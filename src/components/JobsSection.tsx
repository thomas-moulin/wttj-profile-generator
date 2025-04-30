import React from "react";

interface JobsSectionProps {
  jobs?: {
    total: number;
    categories: {
      name: string;
      positions: {
        title: string;
        url: string;
      }[];
    }[];
  };
}

const JobsSection: React.FC<JobsSectionProps> = ({ jobs }) => {
  if (!jobs?.categories?.length) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Jobs ({jobs.total})</h2>
        <span className="text-sm text-gray-600">All locations</span>
      </div>

      <div className="space-y-6">
        {jobs.categories.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3">{category.name}</h3>
            <ul className="space-y-2">
              {category.positions.map((position, posIndex) => (
                <li key={posIndex}>
                  <a
                    href={position.url}
                    className="text-black underline hover:no-underline"
                  >
                    {position.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
