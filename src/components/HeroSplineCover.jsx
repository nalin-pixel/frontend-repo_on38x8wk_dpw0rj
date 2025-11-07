import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSplineCover = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient lights - do not block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle at 30% 30%, #D7FA00, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle at 70% 70%, #6ee7ff, transparent 60%)' }}
        />
      </div>

      {/* Header content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-6 pb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-sm">
          Bio2Win — Human Digital Twin
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-300">
          See. Feel. Improve. Track your body’s story with neon-clear insights and a living twin.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button className="rounded-full bg-[#D7FA00] px-5 py-2 text-black font-medium shadow-[0_0_20px_#D7FA00] hover:shadow-[0_0_30px_#D7FA00] transition-shadow">
            Start Session
          </button>
          <button className="rounded-full border border-zinc-700/80 bg-zinc-900/40 px-5 py-2 text-white hover:border-zinc-600 transition-colors">
            Explore Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSplineCover;
