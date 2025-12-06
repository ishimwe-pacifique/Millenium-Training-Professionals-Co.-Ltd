const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      {/* World map background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/world-map-drawing-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Team?</h2>

        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover how our customized training and consulting services can transform your organization's professional
          excellence and drive sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg" style={{ color: PRIMARY_COLOR }}>
            Get Started Today
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg backdrop-blur-sm">
            Schedule Consultation
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-sm text-gray-300 mb-6">Get in touch with us</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <p className="font-semibold text-white mb-2">Location</p>
              <p className="text-gray-200">Kigali, Rwanda</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <p className="font-semibold text-white mb-2">Phone</p>
              <p className="text-gray-200">+250 767 691 454</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <p className="font-semibold text-white mb-2">Email</p>
              <p className="text-gray-200">Info@millenium.rw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
