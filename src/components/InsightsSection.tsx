import React from "react";
import { Users2, TrendingUp, Star } from "lucide-react";

interface InsightsSectionProps {
  insights:
    | {
        topInvestors: boolean;
        femaleEmployees: string;
        employeeGrowth: string;
        glassdoorRating: number;
      }
    | undefined;
}

const InsightsSection: React.FC<InsightsSectionProps> = ({ insights }) => {
  if (!insights) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Users2 size={18} className="text-gray-600" />
        <span className="text-sm">
          {insights.femaleEmployees}% female employees
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <TrendingUp size={18} className="text-gray-600" />
        <span className="text-sm">
          {insights.employeeGrowth}% employee growth in 12 months
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <Star size={18} className="text-gray-600" />
        <span className="text-sm">Glassdoor ({insights.glassdoorRating})</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(insights.glassdoorRating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
              fill={
                i < Math.floor(insights.glassdoorRating)
                  ? "currentColor"
                  : "none"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
