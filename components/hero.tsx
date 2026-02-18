"use client"

import { useState, useEffect } from "react"
import { Play, ArrowRight, Star, Users, Globe, Landmark } from "lucide-react"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const YOUTUBE_ID = "bZylniUVzfE"
  const ACCENT_COLOR = "#66BB6A"
  const PRIMARY_COLOR = "#004D40"

  useEffect(() => {
    if (count < 98) {
      const timer = setTimeout(() => setCount(count + 1), 20)
      return () => clearTimeout(timer)
    }
  }, [count])

  return (
    <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* Subtle Background Elements */}
      <div className="absolute top-[-5%] right-[-2%] w-[45%] h-[110%] bg-[#004D40]/5 -skew-x-12 transform origin-top z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content Wing */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 shadow-sm">
           
            </div>

            <h1 className="text-[#004D40] text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[1.05]">
              Transform Your <br />
              <span style={{ color: ACCENT_COLOR }} className="relative inline-block">
                Professional Excellence
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M2 4C40 1 160 1 198 4" stroke={ACCENT_COLOR} strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-lg font-sans opacity-85">
              World-class corporate training and executive coaching built for 
              measurable organizational success across Rwanda and the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#004D40] group px-8 py-3.5 rounded-xl hover:bg-[#004D40]/90 transition-all font-display font-bold text-[11px] uppercase tracking-widest text-white flex items-center justify-center gap-3 shadow-xl shadow-[#004D40]/20 active:scale-95"
              >
                Explore Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="bg-white px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-all font-display font-bold text-[11px] uppercase tracking-widest border border-gray-200 flex items-center justify-center gap-3 shadow-sm active:scale-95 text-[#004D40]"
              >
                <Play size={14} className="text-[#004D40] fill-[#004D40]" /> Watch Impact
              </button>
            </div>

            {/* Geographic Markers */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 w-fit">
              <div className="flex items-center gap-2 opacity-50">
                <Landmark size={16} className="text-[#004D40]" />
                <span className="text-[9px] font-bold uppercase font-display tracking-widest text-[#004D40]">Kigali HQ</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <Globe size={16} className="text-[#004D40]" />
                <span className="text-[9px] font-bold uppercase font-display tracking-widest text-[#004D40]">Regional Presence</span>
              </div>
            </div>
          </div>

          {/* Visual Wing - Minimized Thumbnail Height */}
          <div className="relative flex items-center justify-center">
            {!isVideoPlaying ? (
              <div className="relative w-full max-w-[500px] animate-float" onClick={() => setIsVideoPlaying(true)}>
                {/* Changed aspect-ratio to aspect-[3/2] for a shorter, medium height */}
                <div className="relative z-10 aspect-[3/2] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer group">
                  <img 
                    src="/Thambnail.png"
                    alt="Training Impact"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/30 via-transparent to-transparent flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-lg rounded-full p-5 border border-white/30 transform group-hover:scale-110 transition-transform duration-500">
                      <Play size={24} className="text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Minimized Badge positioned relative to shorter thumbnail */}
                
                  
                </div>
              
            ) : (
              <div className="relative w-full max-w-[600px] aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-black z-20">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsVideoPlaying(false); }}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full hover:bg-white/40"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}