import React, { useState, useRef } from 'react';
import { Sparkles, Coffee, Book, Moon, Camera, Music, Share, X } from 'lucide-react';

const MoodBoardPro = () => {
  // --- STATE ---
  const [mood, setMood] = useState('Vibe Check');
  const [vibeStyle, setVibeStyle] = useState('from-purple-500 to-pink-500');
  const [sassyQuote, setSassyQuote] = useState("Waiting for the energy to shift...");
  const [image, setImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ 
    id: 'pSY3i5XHHXo', 
    name: 'Central Cee x Dave - Sprinter' 
  });

  const fileInputRef = useRef(null);

  // --- MOOD DATA ---
  const moods = [
    { 
      label: "Main Character", 
      icon: <Sparkles />, 
      color: "from-yellow-200 via-pink-400 to-purple-600", 
      sass: "The camera is literally crying because you look so good today.",
      trackId: 'pSY3i5XHHXo', 
      trackName: 'Central Cee x Dave - Sprinter'
    },
    { 
      label: "Bed Rotting", 
      icon: <Moon />, 
      color: "from-slate-900 via-indigo-950 to-slate-900", 
      sass: "Productivity is a scam anyway. Stay under the duvet.",
      trackId: '6Yp_m5N5vO8', 
      trackName: 'Dave - Starlight'
    },
    { 
      label: "Academic Weapon", 
      icon: <Book />, 
      color: "from-emerald-500 to-teal-700", 
      sass: "Look at you, actually using your brain. Harvard is calling.",
      trackId: 'XoW9IOnS9uU', 
      trackName: 'Dave ft. Burna Boy - Location'
    },
    { 
      label: "Cafe Hops", 
      icon: <Coffee />, 
      color: "from-orange-200 to-orange-400", 
      sass: "Spending $7 on a latte is a personality trait, and I support it.",
      trackId: '0Y-HRE_6PGo', 
      trackName: 'Central Cee - Doja'
    },
  ];

  // --- HANDLERS ---
  const handleMoodSelect = (m) => {
    setMood(m.label);
    setVibeStyle(m.color);
    setSassyQuote(m.sass);
    setCurrentTrack({ id: m.trackId, name: m.trackName });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className={`min-h-screen w-full transition-all duration-1000 bg-gradient-to-br ${vibeStyle} flex items-center justify-center p-4 overflow-hidden`}>
      
      {/* Film Grain Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>

      {/* Main Glass Card */}
      <div className="relative w-full max-w-md backdrop-blur-2xl bg-white/15 border border-white/20 rounded-[2.5rem] p-6 shadow-2xl">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-black mb-1">Status Report</p>
          <h1 className="text-white text-3xl font-black italic tracking-tighter">{mood}</h1>
        </div>

        {/* Sassy Quote Bubble */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 mb-6 border-l-4 border-white/40 min-h-[70px] flex items-center">
          <p className="text-white/90 text-sm font-medium italic leading-tight">"{sassyQuote}"</p>
        </div>

        {/* Mood Selection Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => handleMoodSelect(m)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all border ${mood === m.label ? 'bg-white/30 border-white scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            >
              <div className="text-white">{m.icon}</div>
            </button>
          ))}
        </div>

        {/* Image Display Area */}
        <div className="relative aspect-[4/5] rounded-[2rem] bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center overflow-hidden group">
          {image ? (
            <>
              <img src={image} className="w-full h-full object-cover" alt="Vibe" />
              <button 
                onClick={() => setImage(null)} 
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white backdrop-blur-md hover:bg-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <div onClick={() => fileInputRef.current.click()} className="flex flex-col items-center cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
                <Camera className="text-white" size={32} />
              </div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center px-4">Tap to upload your fit check</p>
            </div>
          )}
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
        </div>

        {/* Music Player Footer (The "Ultimate Audio Engine") */}
        <div className="mt-6 flex items-center gap-4">
          <div 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 bg-white/10 rounded-full h-14 flex items-center px-4 gap-3 border border-white/10 cursor-pointer hover:bg-white/20 transition-all overflow-hidden relative"
          >
            {isPlaying ? (
              <div className="flex gap-1 items-end h-4">
                <div className="w-1 bg-yellow-400 animate-bounce" />
                <div className="w-1 bg-yellow-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-1 bg-yellow-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            ) : <Music size={18} className="text-white/40" />}
            
            <marquee className="text-white/80 text-[10px] font-mono uppercase tracking-widest flex-1">
              {isPlaying ? `Now Playing: ${currentTrack.name}` : `Tap to start the vibe: ${currentTrack.name}`}
            </marquee>

            {/* Hidden Player */}
            {isPlaying && (
              <div className="absolute opacity-0 pointer-events-none">
                <iframe 
                  key={currentTrack.id}
                  width="100" height="100" 
                  src={`https://www.youtube.com/embed/${currentTrack.id}?autoplay=1&mute=0&controls=0&origin=${window.location.origin}`} 
                  allow="autoplay; encrypted-media"
                />
              </div>
            )}
          </div>
          
          <button className="h-14 w-14 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl shadow-black/20">
            <Share size={24} className="text-black" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MoodBoardPro;