import React from "react";

interface BenefitsSectionProps {
  benefits?: {
    location: string;
    items: string[];
  }[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  if (!benefits) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Benefits</h2>

      {benefits.map((benefit) => (
        <>
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm">
              {benefit.location}
            </span>
          </div>

          <ul className="space-y-4">
            {benefit.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default BenefitsSection;
