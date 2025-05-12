import { Base64 } from "js-base64";
import { downloadData } from 'aws-amplify/storage';
import { CompanyData } from "../types";
import { defaultCompanyData } from "./defaultData";

export const getCompanyDataFromUrl = async (): Promise<CompanyData> => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if data is directly provided in the URL
    const encodedData = urlParams.get("data");
    if (encodedData) {
      const decodedData = Base64.decode(encodedData);
      return JSON.parse(decodedData) as CompanyData;
    }
    
    // If no direct data, check for company_id
    const companyId = urlParams.get("company_id");
    if (!companyId) {
      return defaultCompanyData;
    }
    
    console.log("Fetching data for company ID:", companyId);
    
    try {
      // Let's try both path formats to be safe
      const paths = [
        `company_data/${companyId}.json`,  // Path from storage resource.ts
        `${companyId}.json`                // Direct file name
      ];
      
      let jsonData = null;
      let lastError = null;
      
      // Try each path until one works
      for (const path of paths) {
        try {
          console.log(`Attempting to access S3 file at: ${path}`);
          const downloadResult = await downloadData({
            key: path,
            options: {
              accessLevel: 'guest'
            }
          }).result;
          
          jsonData = await downloadResult.body.json();
          console.log(`Successfully loaded data from ${path}`);
          break; // Exit loop if successful
        } catch (error) {
          console.log(`Failed to load from ${path}:`, error);
          lastError = error;
          // Continue to next path
        }
      }
      
      // If we found data in any path, return it
      if (jsonData) {
        return jsonData as CompanyData;
      }
      
      // If we've tried all paths and failed, throw the last error
      console.error("No data found in any location. Last error:", lastError);
      throw lastError;
    } catch (storageError) {
      console.error("Storage error details:", storageError);
      
      // For NoSuchKey errors, let's return default data instead of crashing
      if ((storageError as any).name === 'NoSuchKey' || 
          ((storageError as any).message && (storageError as any).message.includes('NoSuchKey'))) {
        console.log("File not found in S3, using default data instead");
        return defaultCompanyData;
      }
      
      throw storageError;
    }
    
  } catch (error) {
    console.error("Error fetching company data:", error);
    return defaultCompanyData;
  }
};