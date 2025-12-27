
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import UploadModal from './components/UploadModal';
import Footer from './components/Footer';
import { VideoItem } from './types';

const MOCK_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'THE FUTURE OF STREETWEAR CINEMATICS',
    category: 'FASHION',
    thumbnail: 'https://picsum.photos/id/10/800/1200',
    author: 'REDNOW STUDIOS',
    views: '1.2M',
    date: '2024.11.12',
    aspectRatio: 'portrait'
  },
  {
    id: '2',
    title: 'TOKYO DRIFT: UNDERGROUND CULTURE',
    category: 'AUTOMOTIVE',
    thumbnail: 'https://picsum.photos/id/12/1200/800',
    author: 'DRIFT KINGS',
    views: '850K',
    date: '2024.11.11',
    aspectRatio: 'landscape'
  },
  {
    id: '3',
    title: 'MINIMALIST ARCHITECTURE IN BERLIN',
    category: 'DESIGN',
    thumbnail: 'https://picsum.photos/id/20/800/1200',
    author: 'ARCHI-DIGEST',
    views: '420K',
    date: '2024.11.10',
    aspectRatio: 'portrait'
  }
];

const App: React.FC = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenUpload={() => setIsUploadOpen(true)} />
      
      <main>
        <Hero onOpenUpload={() => setIsUploadOpen(true)} />
        
        <section className="px-6 md:px-12 py-32 border-t border-[#FF0000]/10 bg-black">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white">
              Latest <br /> Transmissions
            </h2>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#FF0000]">RedNow Network</span>
              <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase text-white">Node ID: RED-NOW-LIVE</span>
            </div>
          </div>
          <VideoGrid videos={MOCK_VIDEOS} />
        </section>
      </main>

      <Footer />

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
      />
    </div>
  );
};

export default App;
