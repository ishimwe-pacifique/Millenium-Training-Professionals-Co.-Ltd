"use client"

import Image from "next/image";

const IMAGE_URL = "/images/why_choose_us-BaADBL-Q.png"; 

export function About() {
  const deepForestGreenBg = "#004D40"; 
  const accentColor = "#66BB6A"; 

  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: deepForestGreenBg }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Layer - 100% Clear */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={IMAGE_URL} alt="Regional Excellence" fill style={{ objectFit: 'cover' }} className="hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div>
                <p className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] font-display">Established 2023</p>
                <h3 className="text-2xl md:text-3xl font-extrabold mt-2 tracking-tighter uppercase leading-none font-display drop-shadow-2xl" style={{ color: accentColor }}>
                  Driving Regional Excellence
                </h3>
              </div>
            </div>
          </div>

          {/* Content Area - Minimized Font Sizes */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white font-display uppercase tracking-tighter">About Millennium Training</h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed font-medium">
              Millennium Training Professionals is a leading corporate training and consulting company based in Kigali, Rwanda.
            </p>

            <div className="space-y-4">
              {[{ title: "Expert Facilitation", desc: "Experienced trainers with deep expertise." },
                { title: "Customized Solutions", desc: "Tailored programs for executive-level professionals." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center"><span className="text-white font-bold">✓</span></div>
                  <div>
                    <h4 className="font-bold text-white font-display uppercase tracking-wide text-[11px]">{item.title}</h4>
                    <p className="text-gray-400 text-[12px] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white px-8 py-3 rounded-xl hover:bg-gray-100 transition-all font-extrabold uppercase tracking-widest text-[10px] shadow-xl" style={{ color: deepForestGreenBg }}>
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}