import React from 'react';

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
        <div
          className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 0,
            willChange: 'auto',
          }}
        >
          <div className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200" />
          <div className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200" />
          <div className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200" />
          <div className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200" />
        </div>
        <h2 className="font-sans text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          <span>
            Analytics made easy
          </span>
        </h2>
      </div>

      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Track what matters, forget the noise.
      </p>
      <div className='mt-20  grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto'>
        <div className='group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3'></div>
        <div className='group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2'></div>
        <div className='group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2'></div>
        <div className='group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3'></div>
      </div>

    </section>
  );
};

export default FeaturesSection;
