"use client"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden font-sans"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      {/* World-Class Typography Loading */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* World map background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/world-map-drawing-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Minimized Headline */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 font-display uppercase tracking-tight">
          Ready to Elevate Your Team?
        </h2>

        {/* Minimized Subtext */}
        <p className="text-sm md:text-base text-gray-200 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
          Discover how our customized training and consulting services can transform your organization's excellence and drive sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            className="bg-white px-8 py-3 rounded-xl hover:bg-gray-100 transition-all font-bold text-[10px] uppercase tracking-widest shadow-xl active:scale-95" 
            style={{ color: PRIMARY_COLOR }}
          >
            Get Started Today
          </button>
          <button className="border border-white/40 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-sm">
            Schedule Consultation
          </button>
        </div>

        {/* Minimized Contact Info */}
        <div className="mt-10 pt-10 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-6">Get in touch with us</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1 font-display">Location</p>
              <p className="text-xs text-gray-300 font-medium">Kigali, Rwanda</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1 font-display">Phone</p>
              <p className="text-xs text-gray-300 font-medium">+250 767 691 454</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1 font-display">Email</p>
              <p className="text-xs text-gray-300 font-medium">Info@millenium.rw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}