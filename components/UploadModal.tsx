
import React, { useState } from 'react';
import { ContentType } from '../types';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<ContentType>(ContentType.UPLOAD);
  const [url, setUrl] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-black border-2 border-[#FF0000] p-1 shadow-[0px_0px_100px_rgba(255,0,0,0.2)]">
        <div className="bg-black border border-[#FF0000]/30 p-12 relative overflow-hidden">
          <button onClick={onClose} className="absolute top-6 right-6 text-[#FF0000] hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-3xl font-black tracking-tighter uppercase mb-12 text-center text-white">
            Initiate Uplink
          </h2>

          <div className="flex border border-[#FF0000]/30 mb-10">
            <button 
              onClick={() => setActiveTab(ContentType.UPLOAD)}
              className={`flex-1 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${
                activeTab === ContentType.UPLOAD ? 'bg-[#FF0000] text-black' : 'text-[#FF0000] hover:bg-[#FF0000]/5'
              }`}
            >
              Signal File
            </button>
            <button 
              onClick={() => setActiveTab(ContentType.LINK)}
              className={`flex-1 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${
                activeTab === ContentType.LINK ? 'bg-[#FF0000] text-black' : 'text-[#FF0000] hover:bg-[#FF0000]/5'
              }`}
            >
              Stream Link
            </button>
          </div>

          <div className="min-h-[160px] flex flex-col justify-center">
            {activeTab === ContentType.UPLOAD ? (
              <div className="border border-dashed border-[#FF0000]/50 py-16 flex flex-col items-center justify-center gap-6 group cursor-pointer hover:bg-[#FF0000]/5 transition-all">
                <div className="w-12 h-12 border border-[#FF0000] flex items-center justify-center group-hover:bg-[#FF0000] group-hover:text-black transition-all">
                   <span className="text-2xl font-bold">+</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">Uplink Raw Data</span>
                  <p className="text-[8px] font-bold opacity-40 mt-2">MP4 / MOV / 2GB / 4K</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="text-[9px] font-black tracking-widest uppercase opacity-50">Signal Endpoint</label>
                <input 
                  type="text" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="HTTPS://SIGNAL.ALPHA/SOURCE"
                  className="w-full border-b-2 border-[#FF0000] py-4 text-sm font-bold bg-transparent text-white focus:outline-none placeholder:opacity-20"
                />
              </div>
            )}
          </div>

          <button className="w-full mt-12 bg-[#FF0000] text-black py-5 text-[11px] font-black tracking-widest uppercase hover:bg-white transition-all shadow-lg shadow-red-900/40">
            Push to Live Grid
          </button>
          
          <div className="mt-8 flex justify-center">
             <span className="text-[8px] font-black tracking-[0.5em] opacity-30">SECURE ENCRYPTED UPLINK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
