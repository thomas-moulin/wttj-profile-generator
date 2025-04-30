import React from "react";

interface OurTakeSectionProps {
  ourTake?: {
    content: string;
    author: {
      name: string;
      title: string;
      photoUrl: string;
    };
  };
}

const DEFAULT_PHOTO_URL = "https://static.otta.com/images/headshots/Steph.webp";

const OurTakeSection: React.FC<OurTakeSectionProps> = ({ ourTake }) => {
  if (!ourTake) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Our take</h2>
      <p className="text-gray-700 mb-6">{ourTake.content}</p>

      <div className="flex items-center">
        <img
          src={ourTake.author.photoUrl || DEFAULT_PHOTO_URL}
          alt={ourTake.author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-medium">{ourTake.author.name}</p>
          <p className="text-sm text-gray-600">{ourTake.author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default OurTakeSection;
