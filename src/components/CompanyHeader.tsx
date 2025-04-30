import React from "react";
import { CompanyData } from "../types";
import { Users, MapPin, Briefcase, BellRing } from "lucide-react";

interface CompanyHeaderProps {
  company: CompanyData;
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ company }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold mb-2">{company.name}</h1>
      <p className="text-gray-700 mb-4 max-w-lg">{company.tagline}</p>
      <div className="flex items-center mb-4">
        <Users size={18} className="mr-2" />
        <span className="text-sm">{company.employeeCount}</span>
      </div>
      <div className="flex items-center flex-wrap gap-2 mb-4">
        <Briefcase size={18} className="mr-2" />
        {company.sectors.map((sector, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
          >
            {sector}
          </span>
        ))}
      </div>
      <div className="flex items-center mb-6">
        <MapPin size={18} className="mr-2" />
        <span className="text-md">{company.location}</span>
      </div>
      <button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-sm w-28 justify-center transition-colors duration-200">
        <BellRing size={18} className="mr-2" />
        <span className="text-sm font-semibold">Follow</span>
      </button>
    </div>
  );
};

export default CompanyHeader;
