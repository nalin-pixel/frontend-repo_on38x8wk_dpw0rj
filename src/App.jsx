import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import MetricOrbit from './components/MetricOrbit';
import AICoachCard from './components/AICoachCard';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      {/* Hero with Spline DNA scene */}
      <HeroSplineCover />

      {/* Orbiting key metrics */}
      <MetricOrbit />

      {/* Mini performance preview */}
      <section className="mx-auto mt-8 max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Performance Trajectory</h3>
              <p className="text-sm text-zinc-400">Predictive insights for the next 7 days</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <button className="rounded-full border border-zinc-700/70 px-3 py-1 hover:border-zinc-600">Day</button>
              <button className="rounded-full border border-zinc-700/70 px-3 py-1 hover:border-zinc-600">Week</button>
              <button className="rounded-full border border-zinc-700/70 px-3 py-1 hover:border-zinc-600">Month</button>
            </div>
          </div>
          {/* Simple pulse-lines aesthetic */}
          <div className="mt-4 h-32 w-full rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-950 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-md">
              <svg viewBox="0 0 400 120" className="h-full w-full">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7dd3fc"/>
                    <stop offset="50%" stopColor="#D7FA00"/>
                    <stop offset="100%" stopColor="#a78bfa"/>
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,60 60,90 100,70 C140,50 160,100 200,70 C240,40 260,95 300,70 C340,45 360,85 400,60" fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"/>
                <path d="M0,90 C40,70 60,100 100,80 C140,60 160,110 200,80 C240,50 260,105 300,80 C340,55 360,95 400,70" fill="none" stroke="rgba(215,250,0,0.25)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* AI Coach CTA */}
      <AICoachCard />

      {/* Bottom navigation */}
      <div className="h-24" />
      <BottomNav />
    </div>
  );
}

export default App;
