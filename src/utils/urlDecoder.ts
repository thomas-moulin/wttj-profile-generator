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
    
    // Fetch data from S3 using the company_id as the key
    const downloadResult = await downloadData({
      path: `${companyId}.json`,
      options: {
        bucket: 'wttj-datascience-junglelabs'
        // Optional: Add caching options or other parameters if needed
      }
    }).result;
    
    // Parse the JSON data from the file
    const jsonData = await downloadResult.body.json();
    return jsonData as CompanyData;
    
  } catch (error) {
    console.error("Error fetching company data:", error);
    return defaultCompanyData;
  }
};