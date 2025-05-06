import { Base64 } from "js-base64";
import { CompanyData } from "../types";
import { defaultCompanyData } from "./defaultData";

export function getCompanyDataFromUrl(): CompanyData {
  try {
    // Check if running in a browser environment
    if (typeof window === 'undefined') {
      return getDefaultCompanyData();
    }

    // Try to get data from hash fragment first (format: #data=base64_encoded_json)
    let encodedData = null;
    
    if (window.location.hash) {
      const hashMatch = window.location.hash.match(/^#data=(.+)$/);
      if (hashMatch && hashMatch[1]) {
        encodedData = hashMatch[1];
      }
    }
    
    // If not found in hash, try query params as fallback
    if (!encodedData) {
      const urlParams = new URLSearchParams(window.location.search);
      encodedData = urlParams.get('data');
    }

    // If we have encoded data, decode and return it
    if (encodedData) {
      const decodedData = Base64.decode(encodedData);
      return JSON.parse(decodedData) as CompanyData;
    }
    
    // If no data found in URL, return default data
    return getDefaultCompanyData();
  } catch (error) {
    console.error("Error parsing company data from URL:", error);
    return getDefaultCompanyData();
  }
}

function getDefaultCompanyData(): CompanyData {
  return defaultCompanyData;
}

export function generateHashUrl(data: CompanyData, baseUrl = window.location.origin + window.location.pathname): string {
  // Convert data object to JSON string
  const jsonString = JSON.stringify(data);
  
  // Encode the JSON string in base64 using the library
  const base64Encoded = Base64.encode(jsonString);
  
  // Create the URL with hash fragment
  return `${baseUrl}#data=${base64Encoded}`;
}
