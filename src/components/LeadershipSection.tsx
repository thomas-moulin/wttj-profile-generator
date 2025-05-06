import React from "react";

interface LeadershipSectionProps {
  leadership?: {
    leaders: {
      name: string;
      title: string;
      background: string;
      linkedinUrl: string;
    }[];
  };
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  leadership,
}) => {
  if (!leadership?.leaders?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Leadership</h2>

      <div className="space-y-8">
        {leadership.leaders.map((leader, index) => (
          <div key={index}>
            <div className="flex items-start space-x-4 mb-4">
              <div>
                <h3 className="font-medium">
                  <a 
                    href={leader.linkedinUrl} 
                    className="text-black hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {leader.name}
                  </a>
                </h3>
                <p className="text-gray-600">{leader.title}</p>
                <p className="text-sm text-gray-700 mt-2">
                  {leader.background}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
