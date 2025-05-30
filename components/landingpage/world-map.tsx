'use client';

import Image from 'next/image';
import React from 'react';

const WorldMap = () => {
  const dots = [
    { top: '30%', left: '20%' },
    { top: '40%', left: '25%' },
    { top: '45%', left: '72%' },
    { top: '20%', left: '80%' },
    { top: '60%', left: '30%' },
    { top: '45%', left: '50%' },
    { top: '70%', left: '57%' },
    { top: '80%', left: '90%' },
  ];

  const getRandomDelay = () => `${Math.random() * 2}s`;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Image
        src="/world_map.png"
        alt="World Map"
        width={400}
        height={200}
        quality={100}
      />

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
            style={{ animationDelay: getRandomDelay() }}
          >
            <span className="ping-dot" style={{ animationDelay: getRandomDelay() }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
