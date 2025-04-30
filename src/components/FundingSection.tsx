import React from "react";

interface FundingSectionProps {
  funding?: {
    rounds: {
      date: string;
      amount: string;
      type: string;
    }[];
    totalAmount: string;
  };
}

const FundingSection: React.FC<FundingSectionProps> = ({ funding }) => {
  if (!funding) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Funding ({funding.rounds.length} rounds)
        </h2>
        <span className="text-sm text-gray-600">
          Total funding: {funding.totalAmount}
        </span>
      </div>

      <div className="space-y-4">
        {funding.rounds.map((round, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-100"
          >
            <div>
              <p className="text-sm text-gray-600">{round.date}</p>
              <p className="font-medium">{round.amount}</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
              {round.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingSection;
