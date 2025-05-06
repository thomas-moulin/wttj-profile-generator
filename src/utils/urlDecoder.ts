import { Base64 } from "js-base64";
import { CompanyData } from "../types";
import { defaultCompanyData } from "./defaultData";

export function getCompanyDataFromUrl(): CompanyData {
  try {
    // Check if running in a browser environment
    if (typeof window === 'undefined') {
      return getDefaultCompanyData();
    }

    console.log("URL location:", window.location.href);

    // Try to get data from hash fragment first (format: #data=base64_encoded_json)
    let encodedData = null;
    
    if (window.location.hash) {
      console.log("Hash detected:", window.location.hash.substring(0, 20) + "...");
      const hashMatch = window.location.hash.match(/^#data=(.+)$/);
      if (hashMatch && hashMatch[1]) {
        encodedData = hashMatch[1];
        console.log("Found data in hash fragment, length:", encodedData.length);
      } else {
        console.log("Hash format doesn't match expected pattern");
      }
    } else {
      console.log("No hash fragment found in URL");
    }
    
    // If not found in hash, try query params as fallback
    if (!encodedData) {
      console.log("Checking query parameters");
      const urlParams = new URLSearchParams(window.location.search);
      encodedData = urlParams.get('data');
      if (encodedData) {
        console.log("Found data in query params, length:", encodedData.length);
      } else {
        console.log("No data found in query parameters");
      }
    }

    // If we have encoded data, decode and return it
    if (encodedData) {
      try {
        console.log("Attempting to decode Base64 data");
        const decodedData = Base64.decode(encodedData);
        console.log("Base64 decode successful, data length:", decodedData.length);
        
        try {
          console.log("Attempting to parse JSON data");
          const parsedData = JSON.parse(decodedData) as CompanyData;
          console.log("JSON parse successful");
          return parsedData;
        } catch (jsonError) {
          console.error("JSON parse error:", jsonError);
          console.log("First 100 chars of decoded data:", decodedData.substring(0, 100));
          throw jsonError;
        }
      } catch (decodeError) {
        console.error("Base64 decode error:", decodeError);
        console.log("First 100 chars of encoded data:", encodedData.substring(0, 100));
        throw decodeError;
      }
    }
    
    // If no data found in URL, return default data
    console.log("No data found in URL, using default data");
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
