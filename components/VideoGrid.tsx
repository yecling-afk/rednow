
import React from 'react';
import { VideoItem } from '../types';

interface VideoGridProps {
  videos: VideoItem[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      {videos.map((video) => (
        <div key={video.id} className="group cursor-pointer">
          <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-zinc-900 border border-[#FF0000]/10 hover:border-[#FF0000]/50 transition-all duration-500 rounded-sm">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
              <span className="bg-[#FF0000] text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                Tune In
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="text-[#FF0000]">{video.category}</span>
              <span className="opacity-40 text-white">{video.date}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tighter leading-none text-white group-hover:text-[#FF0000] transition-colors">
              {video.title}
            </h3>
            <div className="flex justify-between items-center text-[9px] font-bold tracking-widest uppercase opacity-40 text-white">
              <span className="group-hover:opacity-100 transition-opacity">{video.author}</span>
              <span className="text-[#FF0000] group-hover:text-white transition-colors">{video.views} Pulses</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
