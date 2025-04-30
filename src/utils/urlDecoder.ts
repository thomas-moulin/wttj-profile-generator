import { Base64 } from "js-base64";
import { CompanyData } from "../types";
import { defaultCompanyData } from "./defaultData";

export const getCompanyDataFromUrl = (): CompanyData => {
  try {
    const url = window.location.pathname;
    const encodedData = url.split("/").pop();

    if (!encodedData) {
      return defaultCompanyData;
    }

    const decodedData = Base64.decode(encodedData);
    return JSON.parse(decodedData) as CompanyData;
  } catch (error) {
    console.error("Error decoding URL data:", error);
    return defaultCompanyData;
  }
};
