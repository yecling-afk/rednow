
import React, { useState } from 'react';

interface HeroProps {
  onOpenUpload: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenUpload }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-20 w-full max-w-3xl flex flex-col items-center gap-16">
        
        {/* 极简品牌入口 */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mix-blend-difference">
            Red<span className="text-[#FF0000]">Now</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#FF0000] opacity-50">
            Intelligent Content Uplink
          </p>
        </div>

        {/* 极简上传条 - 重新设计的胶囊形 */}
        <div className="w-full glass-panel rounded-full p-2 pl-3 md:pl-5 flex items-center gap-4 transition-all duration-500 hover:border-[#FF0000]/30 shadow-2xl">
          
          {/* 添加附件 */}
          <button 
            onClick={onOpenUpload}
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-[#FF0000] hover:border-[#FF0000]/40 transition-all shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* 输入框 */}
          <div className="flex-grow">
            <input 
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="输入灵感或粘贴视频源..."
              className="w-full bg-transparent border-none text-sm md:text-base font-medium text-white placeholder:text-white/20 focus:ring-0 py-2"
            />
          </div>

          {/* 状态参数 */}
          <div className="hidden sm:flex items-center gap-4 px-4 border-l border-white/5 h-8">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">9:16</span>
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">4K</span>
          </div>

          {/* 发射按钮 */}
          <button className="w-10 h-10 md:w-11 md:h-11 bg-[#FF0000] text-black rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* 底部微小提示 */}
        <div className="flex items-center gap-12 opacity-20">
          <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-[#FF0000] rounded-full animate-pulse"></div>
             <span className="text-[8px] font-black uppercase tracking-[0.3em]">Protocol X-R</span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.3em]">Uplink Status: Ready</span>
        </div>

      </div>
    </div>
  );
};

export default Hero;
