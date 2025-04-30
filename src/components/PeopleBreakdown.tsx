import React, { useState } from "react";

interface PeopleBreakdownProps {
  breakdown: {
    ethnicity: { [key: string]: number };
    gender: { [key: string]: number };
    workingLocation: { [key: string]: number };
  };
}

type Category = "ethnicity" | "gender" | "workingLocation";

const categoryColors: Record<string, string> = {
  // Ethnicity colors
  Asian: "bg-[#FFD84D]",
  "Black or African American": "bg-[#40C4AA]",
  "Hispanic or Latino": "bg-[#FF9F7B]",
  "Multiracial / Multiethnic": "bg-[#7BD5F5]",
  White: "bg-[#F4A4D1]",
  Other: "bg-[#B8E986]",
  Unknown: "bg-[#A4A4A4]",

  // Gender colors
  Female: "bg-[#FFD84D]",
  Male: "bg-[#40C4AA]",
  Other: "bg-[#7BD5F5]",

  // Working location colors
  Hybrid: "bg-[#40C4AA]",
  Remote: "bg-[#FF9F7B]",
  Office: "bg-[#7BD5F5]",
};

const PeopleBreakdown: React.FC<PeopleBreakdownProps> = ({ breakdown }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("ethnicity");

  const categories = {
    ethnicity: breakdown.ethnicity,
    gender: breakdown.gender,
    workingLocation: breakdown.workingLocation,
  };

  const renderBar = (data: { [key: string]: number }) => {
    return (
      <div className="flex h-8 rounded-full overflow-hidden">
        {Object.entries(data)
          .filter(([, value]) => value > 0)
          .map(([key, value], index) => (
            <div
              key={index}
              style={{ width: `${value}%` }}
              className={`${categoryColors[key]} flex items-center justify-end px-2`}
            >
              <span className="text-sm font-medium">{value}%</span>
            </div>
          ))}
      </div>
    );
  };

  const renderLegend = (data: { [key: string]: number }) => {
    return (
      <div className="flex flex-wrap gap-4 mt-4">
        {Object.keys(data).map((key) => (
          <div key={key} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${categoryColors[key]}`} />
            <span className="text-sm">{key}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">People breakdown</h2>
        <div className="flex rounded-full bg-gray-100 p-1">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {renderBar(categories[activeCategory])}
        {renderLegend(categories[activeCategory])}
      </div>

      <p className="text-gray-400 text-sm">Last updated on 04 December 2024</p>
    </div>
  );
};

export default PeopleBreakdown;
