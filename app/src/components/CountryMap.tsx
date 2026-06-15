import React from 'react';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldAtlas from 'world-atlas/countries-110m.json';

type Props = {
  isoCodes: string[];
  center: [number, number];
  scale: number;
};

export const CountryMap = ({ isoCodes, center, scale }: Props): React.JSX.Element => (
  <ComposableMap
    projection="geoMercator"
    projectionConfig={{ center, scale }}
    width={400}
    height={220}
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
  </ComposableMap>
);
