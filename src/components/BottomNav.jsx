import React from 'react';
import { Home, BarChart3, PersonStanding, Users, Bot, Plus } from 'lucide-react';

const tabs = [
  { label: 'Home', icon: Home },
  { label: 'Performance', icon: BarChart3 },
  { label: 'Body', icon: PersonStanding },
  { label: 'Community', icon: Users },
  { label: 'AI', icon: Bot },
];

const BottomNav = () => {
  return (
    <nav className="sticky bottom-4 mx-auto w-full max-w-xl px-4">
      <div className="relative flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-2 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        {tabs.map((t) => (
          <button
            key={t.label}
            className="group flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-zinc-400 hover:text-white"
          >
            <t.icon className="h-5 w-5" />
            <span className="hidden text-sm md:inline">{t.label}</span>
          </button>
        ))}

        {/* Floating Quick Add */}
        <button
          className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#D7FA00] p-3 text-black shadow-[0_0_25px_#D7FA00] hover:shadow-[0_0_35px_#D7FA00] transition-shadow"
          aria-label="Quick add"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
