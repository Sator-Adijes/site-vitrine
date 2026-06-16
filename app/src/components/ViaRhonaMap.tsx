import React from 'react';

import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip } from 'react-leaflet';

import { VIA_RHONA_ROUTE } from '@/data/viaRhonaRoute';

const CENTER: [number, number] = [45.92, 5.49];

type StagePoint = {
  name: string;
  position: [number, number];
};

const STAGE_POINTS: StagePoint[] = [
  { name: 'Genève', position: [46.204, 6.143] },
  { name: 'Seyssel', position: [45.957, 5.834] },
  { name: 'Montalieu-Vercieu', position: [45.82, 5.39] },
  { name: 'Lyon', position: [45.757, 4.839] },
];

export const ViaRhonaMap = (): React.JSX.Element => (
  <div className="w-full h-[400px] rounded-md border border-neutral-200 overflow-hidden">
    <MapContainer
      center={CENTER}
      zoom={9}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={VIA_RHONA_ROUTE} color="#2563eb" weight={4} opacity={0.9} />
      {STAGE_POINTS.map(({ name, position }, index) => (
        <CircleMarker
          key={name}
          center={position}
          radius={index === 0 || index === STAGE_POINTS.length - 1 ? 8 : 5}
          fillColor={index === 0 || index === STAGE_POINTS.length - 1 ? '#2563eb' : '#ffffff'}
          color="#2563eb"
          weight={2}
          fillOpacity={1}
        >
          <Tooltip permanent direction="top" offset={[0, -8]}>
            {name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  </div>
);
