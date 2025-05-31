'use client';

import DottedMap from "dotted-map"
import React, { useEffect, useState } from 'react';

const WorldMap = () => {
  const dots = [
    { top: '30%', left: '20%' },
    { top: '40%', left: '23%' },
    { top: '45%', left: '75%' },
    { top: '20%', left: '80%' },
    { top: '23%', left: '65%' },
    { top: '60%', left: '30%' },
    { top: '45%', left: '50%' },
    { top: '70%', left: '60%' },
    { top: '75%', left: '95%' },
  ];

  const [delays, setDelays] = useState<string[]>([]);

  useEffect(() => {
    const generatedDelays = dots.map(() => `${Math.random() * 2}s`);
    setDelays(generatedDelays);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const map = new DottedMap({ height: 60, grid: 'diagonal' })

  const points = map.getPoints()

  const Map = () => {
    const viewBox = `0 0 120 63`
    return (
      <svg viewBox={viewBox} style={{ background: "transparent" }}>
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r={0.25} fill={"white"} />
        ))}
      </svg>
    )
  }

  return (
    <div>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-background absolute inset-0 from-transparent to-99%"></div>
          <Map />

          {dots.map((dot, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: dot.top,
                left: dot.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="w-4 h-4 relative"
                style={{ animationDelay: delays[index] }}
              >
                <span
                  className="ping-dot"
                  style={{ animationDelay: delays[index] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default WorldMap;
