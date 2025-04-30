import React from "react";

interface CompanyMissionProps {
  mission: string;
}

const CompanyMission: React.FC<CompanyMissionProps> = ({ mission }) => {
  return (
    <section className="mb-1">
      <h2 className="text-xl font-semibold mb-4">Company mission</h2>
      <p className="text-gray-700 max-w-2xl">{mission}</p>
    </section>
  );
};

export default CompanyMission;
