
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#FF0000]/20 py-32 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tighter uppercase text-[#FF0000]">RedNow</h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 max-w-xs leading-relaxed text-white">
            The epicenter of next-generation visual broadcast. Unified content, decentralized signals.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="w-10 h-10 border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-black transition-all cursor-pointer">
              <span className="text-[10px] font-black">X</span>
            </div>
            <div className="w-10 h-10 border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-black transition-all cursor-pointer">
              <span className="text-[10px] font-black">IG</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
          <div className="space-y-6">
            <h4 className="text-[11px] font-black tracking-widest uppercase text-[#FF0000]">Transmission</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Global Feed</li>
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Trending</li>
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Archives</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-black tracking-widest uppercase text-[#FF0000]">Platform</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Uplink FAQ</li>
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Manifesto</li>
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Partners</li>
            </ul>
          </div>
          <div className="space-y-6 col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-black tracking-widest uppercase text-[#FF0000]">Legal</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-[#FF0000] cursor-pointer transition-colors">Protocol</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#FF0000]/10 pt-12 text-[9px] font-black tracking-[0.4em] uppercase opacity-40 text-white">
        <span>© 2024 REDNOW BROADCAST SYSTEMS</span>
        <div className="flex gap-12">
          <span className="text-[#FF0000]">Signal_v4.5</span>
          <span>Latency_Optimized</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
