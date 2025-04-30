import React from "react";

interface GallerySectionProps {
  photos: string[] | undefined;
}

const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src={photo}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
