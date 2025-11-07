import React from 'react';
import { Activity, Flame, HeartPulse, Moon } from 'lucide-react';

const metrics = [
  {
    label: 'Heart Rate',
    value: '72 bpm',
    icon: HeartPulse,
    ring: 'from-pink-500 via-fuchsia-500 to-purple-500',
  },
  {
    label: 'Calories',
    value: '540 kcal',
    icon: Flame,
    ring: 'from-yellow-300 via-amber-300 to-orange-400',
  },
  {
    label: 'Recovery',
    value: '82%',
    icon: Activity,
    ring: 'from-emerald-400 via-lime-300 to-[#D7FA00]',
  },
  {
    label: 'Sleep Score',
    value: '91',
    icon: Moon,
    ring: 'from-sky-400 via-blue-400 to-indigo-500',
  },
];

const MetricOrbit = () => {
  return (
    <section className="relative mx-auto -mt-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 backdrop-blur-md"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full blur-2xl opacity-30"
              style={{ background: `conic-gradient(${m.ring})` }}
            />
            <div className="relative z-10 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800/80 ring-1 ring-zinc-700">
                <m.icon className="h-5 w-5 text-[#D7FA00]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400">{m.label}</p>
                <p className="text-lg font-semibold text-white md:text-xl">{m.value}</p>
              </div>
            </div>
            <div className="mt-3 text-xs text-zinc-400">
              Tap for deep insights →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricOrbit;
