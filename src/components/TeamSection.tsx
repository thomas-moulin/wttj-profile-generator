import React, { useState } from "react";
import { Users, Play, Volume2, Settings, Maximize2 } from "lucide-react";
import { TeamMember } from "../types";

interface TeamSectionProps {
  departments: string[];
  totalPeople: number;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  departments,
  totalPeople,
  members,
}) => {
  const [activeDept, setActiveDept] = useState(departments[0]);
  const filteredMembers = members.filter(
    (member) => member.department === activeDept
  );

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Meet the team</h2>

      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`py-2 px-4 text-sm font-medium ${
                activeDept === dept
                  ? "text-black font-semibold border-b-4 border-yellow-400"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center mb-6">
        <Users size={18} className="mr-2" />
        <span className="text-sm font-bold">{totalPeople} people</span>
      </div>

      {filteredMembers.map((member, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            {member.name}, {member.title}
          </h3>

          <div className="relative rounded-lg overflow-hidden">
            {member.videoUrl ? (
              <div className="relative">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-11 left-1 bg-black bg-opacity-70 text-white text-xs px-2 py-1">
                  01:54
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
                  <button className="bg-black bg-opacity-70 text-white p-2 rounded-full">
                    <Play size={16} />
                  </button>
                  <div className="flex-1 mx-2">
                    <div className="h-1 bg-gray-600 rounded-full">
                      <div className="h-1 bg-yellow-400 rounded-full w-1/5"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-black bg-opacity-70 text-white p-1 rounded-full">
                      <Volume2 size={14} />
                    </button>
                    <button className="bg-black bg-opacity-70 text-white p-1 rounded-full">
                      <Settings size={14} />
                    </button>
                    <button className="bg-black bg-opacity-70 text-white p-1 rounded-full">
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
