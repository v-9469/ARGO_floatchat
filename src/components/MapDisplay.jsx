import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import Card from './Card';
import { FiFilter, FiDownload } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';

const buoyLocations = {
  chennai: [13.0827, 80.2707],
  sensors: [
    { id: 1, pos: [13.10, 80.32], name: "Sensor #2345", status: "Active" },
    { id: 2, pos: [13.05, 80.30], name: "Sensor #2346", status: "Active" },
    { id: 3, pos: [13.12, 80.25], name: "Sensor #2347", status: "Inactive" },
  ],
};

const MapDisplay = () => {
  const mapMenu = (
    <>
      <FiFilter />
      <FiDownload />
    </>
  );

  return (
    <Card title="Float Locations" menu={mapMenu} className="flex-1">
      <MapContainer center={buoyLocations.chennai} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {buoyLocations.sensors.map(sensor => (
          <CircleMarker
            key={sensor.id}
            center={sensor.pos}
            radius={6}
            pathOptions={{
              color: sensor.status === 'Active' ? '#2563EB' : '#9CA3AF',
              fillColor: sensor.status === 'Active' ? '#3B82F6' : '#D1D5DB',
              fillOpacity: 0.8
            }}
          >
            <Popup>{sensor.name} ({sensor.status})</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </Card>
  );
};

export default MapDisplay;