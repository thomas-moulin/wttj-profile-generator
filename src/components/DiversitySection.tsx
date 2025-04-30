import React from "react";

interface DiversitySectionProps {
  dei?: string[];
}

const DiversitySection: React.FC<DiversitySectionProps> = ({ dei }) => {
  if (!dei) {
    return null;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">DEI, Equity & Inclusion</h2>

      <div className="mb-8">
        <ul className="pl-4 space-y-4 list-disc">
          {dei.map((statement, index) => (
            <li key={index} className="text-gray-700">
              {statement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiversitySection;
