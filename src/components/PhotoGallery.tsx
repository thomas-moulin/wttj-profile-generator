import React from "react";

interface PhotoGalleryProps {
  photos: string[];
  logo: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, logo }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img
            src={photo}
            alt={`Company photo ${index + 1}`}
            className="w-full h-40 object-cover"
          />
        </div>
      ))}
      <img
        src={logo}
        alt={`Company logo`}
        className="w-full h-40 object-cover"
      />
    </div>
  );
};

export default PhotoGallery;
