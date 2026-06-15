import React from 'react';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldAtlas from 'world-atlas/countries-110m.json';

import { City } from '@/types';

type Props = {
  isoCodes: string[];
  center: [number, number];
  scale: number;
  cities?: City[];
  svgWidth?: number;
  svgHeight?: number;
};

export const CountryMap = ({
  isoCodes,
  center,
  scale,
  cities = [],
  svgWidth = 400,
  svgHeight = 300,
}: Props): React.JSX.Element => {
  const uniqueCities = cities.filter(
    (city, index, self) => index === self.findIndex(c => c.name === city.name),
  );

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center, scale }}
      width={svgWidth}
      height={svgHeight}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies geography={worldAtlas as unknown as Record<string, unknown>}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={isoCodes.includes(geo.id) ? '#2563eb' : '#d1d5db'}
              stroke="#ffffff"
              strokeWidth={0.5}
              style={{
                default: { outline: 'none' },
                hover: { outline: 'none' },
                pressed: { outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
      {uniqueCities.map(city => (
        <Marker key={city.name} coordinates={city.coordinates}>
          <circle r={3} fill="#ef4444" stroke="#ffffff" strokeWidth={0.5} />
        </Marker>
      ))}
    </ComposableMap>
  );
};
