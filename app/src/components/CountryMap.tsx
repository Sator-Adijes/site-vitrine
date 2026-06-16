import React from 'react';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldAtlas from 'world-atlas/countries-110m.json';

import { City } from '@/types';

type Label = {
  name: string;
  coordinates: [number, number];
};

type Tooltip = {
  name: string;
  x: number;
  y: number;
};

type Props = {
  isoCodes: string[];
  center: [number, number];
  scale: number;
  cities?: City[];
  labels?: Label[];
  svgWidth?: number;
  svgHeight?: number;
  fillHighlight?: string;
  fillDefault?: string;
};

const GEOGRAPHY_STYLE = {
  default: { outline: 'none' },
  hover: { outline: 'none' },
  pressed: { outline: 'none' },
};

export const CountryMap = ({
  isoCodes,
  center,
  scale,
  cities = [],
  labels = [],
  svgWidth = 400,
  svgHeight = 300,
  fillHighlight = '#2563eb',
  fillDefault = '#d1d5db',
}: Props): React.JSX.Element => {
  const [tooltip, setTooltip] = React.useState<Tooltip | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const uniqueCities = cities.filter(
    (city, index, self) => index === self.findIndex(c => c.name === city.name),
  );

  const handleMarkerEnter = (name: string, e: React.MouseEvent<SVGCircleElement>): void => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }
    const rect = wrapper.getBoundingClientRect();
    setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={wrapperRef} className="relative w-full h-full" onMouseLeave={() => setTooltip(null)}>
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
                fill={isoCodes.includes(geo.id) ? fillHighlight : fillDefault}
                stroke="#ffffff"
                strokeWidth={0.5}
                style={GEOGRAPHY_STYLE}
              />
            ))
          }
        </Geographies>
        {uniqueCities.map(city => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <circle
              r={3}
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth={0.5}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => handleMarkerEnter(city.name, e)}
              onMouseLeave={() => setTooltip(null)}
            />
          </Marker>
        ))}
        {labels.map(label => (
          <Marker key={label.name} coordinates={label.coordinates}>
            <text
              textAnchor="middle"
              dy="0.35em"
              fontSize={11}
              fontWeight="bold"
              fill="#3d1f00"
              style={{ fontFamily: 'sans-serif', pointerEvents: 'none', userSelect: 'none' }}
            >
              {label.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      {tooltip && (
        <div
          className="absolute pointer-events-none z-10 px-xs py-xxs rounded-xs bg-neutral-900 text-white text-sm font-medium whitespace-nowrap shadow-md"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, calc(-100% - 8px))',
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
};
