import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const AICoachCard = () => {
  return (
    <section className="mx-auto mt-8 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-5 md:p-6">
        {/* Glow ring */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(circle, #D7FA00 0%, rgba(215,250,0,0.0) 60%)' }}
        />
        <div className="relative z-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid h-12 w-12 place-items-center rounded-full bg-zinc-800/70 ring-1 ring-zinc-700">
              <div className="absolute inset-0 animate-ping rounded-full" style={{ boxShadow: '0 0 25px 5px rgba(215,250,0,0.35)' }} />
              <Bot className="relative z-10 h-6 w-6 text-[#D7FA00]" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Coach</h3>
              <p className="text-sm text-zinc-400">Personal guidance that feels alive — tips, recovery and mindset.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#D7FA00] px-4 py-2 text-black font-medium shadow-[0_0_18px_#D7FA00] hover:shadow-[0_0_28px_#D7FA00] transition-shadow">
            <Sparkles className="h-4 w-4" /> Ask for a plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default AICoachCard;
