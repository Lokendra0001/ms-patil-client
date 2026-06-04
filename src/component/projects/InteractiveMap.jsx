"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Helper component to change map view dynamically
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom, {
        animate: true,
        duration: 1.2,
      });
    }
  }, [center, zoom, map]);
  return null;
};

// Create a custom pulsing marker icon
const createPulsingIcon = (isActive) => {
  const markerColor = isActive ? "bg-primary" : "bg-slate-500";
  const ringColor = isActive ? "bg-primary/40 animate-ping" : "bg-transparent";
  
  return L.divIcon({
    className: "custom-pulsing-icon",
    html: `
      <div class="relative flex items-center justify-center w-8 h-8">
        <span class="absolute h-8 w-8 rounded-full opacity-75 ${ringColor}"></span>
        <span class="absolute h-4 w-4 rounded-full border border-white shadow-md transition-all duration-300 ${markerColor}"></span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

const InteractiveMap = ({ regions, activeRegion, onSelectRegion }) => {
  const activeData = regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <div className="relative w-full h-full bg-slate-50 border border-border-secondary shadow-sm overflow-hidden z-10 rounded-xs">
      {/* Leaflet Map */}
      <MapContainer
        center={activeData.coordinates}
        zoom={activeData.zoom}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        touchZoom={true}
        dragging={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Colorful Voyager map layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Change map view when activeRegion changes */}
        <ChangeView center={activeData.coordinates} zoom={activeData.zoom} />

        {/* Custom Zoom Control in the bottom-right */}
        <ZoomControl position="bottomright" />

        {/* Markers */}
        {regions.map((region) => {
          const isActive = region.id === activeRegion;
          return (
            <Marker
              key={region.id}
              position={region.coordinates}
              icon={createPulsingIcon(isActive)}
              eventHandlers={{
                mouseover: () => onSelectRegion(region.id),
                click: () => onSelectRegion(region.id),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Map overlay controls/title */}
      <div className="absolute top-6 left-6 z-[1000] select-none pointer-events-none bg-white/90 backdrop-blur-xs px-4 py-2.5 border border-border-secondary shadow-xs rounded-xs">
        <span className="text-[9px] font-bold text-text-gray uppercase tracking-widest block mb-0.5">
          Interactive Map
        </span>
        <span className="text-xs font-extrabold text-primary uppercase tracking-wide">
          Regional Workstations
        </span>
      </div>
    </div>
  );
};

export default InteractiveMap;
