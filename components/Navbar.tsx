
import React from 'react';

interface NavbarProps {
  onOpenUpload: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenUpload }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 h-24 flex items-center justify-between pointer-events-none">
      <div className="pointer-events-auto">
        <a href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#FF0000] flex items-center justify-center text-black font-black text-sm">R</div>
          <span className="text-xl font-black tracking-tighter uppercase text-white">RedNow</span>
        </a>
      </div>

      <div className="pointer-events-auto flex items-center gap-8">
        <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white opacity-40 hover:opacity-100 transition-opacity">Feed</button>
        <button 
          onClick={onOpenUpload}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-white bg-white/5 hover:bg-[#FF0000] hover:text-black px-6 py-2 rounded-full transition-all"
        >
          Join
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
