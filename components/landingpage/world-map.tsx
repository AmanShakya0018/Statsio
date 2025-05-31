import Image from 'next/image';
import React from 'react';

const WorldMap = () => {
  const dots = [
    { top: '30%', left: '20%', delay: '0s' },
    { top: '40%', left: '25%', delay: '0.3s' },
    { top: '45%', left: '72%', delay: '0.6s' },
    { top: '20%', left: '80%', delay: '0.9s' },
    { top: '60%', left: '30%', delay: '1.2s' },
    { top: '45%', left: '50%', delay: '1.5s' },
    { top: '70%', left: '57%', delay: '1.8s' },
    { top: '80%', left: '90%', delay: '2.1s' },
  ];

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
            className="relative flex justify-center items-center rounded-full w-1 h-1"
            style={{
              animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: dot.delay,
              backgroundColor: 'rgba(110, 231, 183, 0.4)',
            }}
          >
            <div
              className="flex justify-center items-center rounded-full w-1 h-1"
              style={{
                animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`,
                animationDelay: dot.delay,
                backgroundColor: '#34d399',
              }}
            >
              <div
                className="flex justify-center items-center rounded-full w-1 h-1"
                style={{
                  animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`,
                  animationDelay: dot.delay,
                  backgroundColor: '#34d399',
                }}
              />
            </div>
            <div
              className="absolute top-1/2 left-1/2 flex justify-center items-center rounded-full w-1 h-1 -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: '#10b981' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
