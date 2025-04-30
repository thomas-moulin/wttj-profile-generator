import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

interface MapProps {
  position: [number, number];
  address: string;
}

// Fix for marker icon issues
const markerIcon = icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CompanyMap: React.FC<MapProps> = ({ position, address }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
