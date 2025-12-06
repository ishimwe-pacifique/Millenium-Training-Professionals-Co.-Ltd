import Image from "next/image";

// Placeholder image URL for "Driving Regional Excellence"
// NOTE: REPLACE THIS URL with your actual image file that features 
// African professionals and the continent's map for "Driving Regional Excellence".
const IMAGE_URL = "/images/why_choose_us-BaADBL-Q.png"; 

export function About() {
  // Approximate color of the provided image (Deep Forest Green)
  const deepForestGreenBg = "#004D40"; 
  // A vibrant accent color that contrasts well (e.g., Bright Green or White)
  const accentColor = "#66BB6A"; 

  return (
    <section id="about" 
      className="py-20 md:py-32" 
      style={{ backgroundColor: deepForestGreenBg }} // Using the deep forest green color
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Component featuring African context */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            
            <Image
              src={IMAGE_URL}
              alt="African professionals in a meeting with a subtle map of Africa in the background, symbolizing regional excellence."
              fill
              style={{ objectFit: 'cover' }}
              className="transition duration-500 ease-in-out hover:scale-105"
              priority
            />
            
            {/* Light overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Text Overlay (Driving Regional Excellence) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/90 font-semibold text-lg">Established 2009</p>
                {/* Accent color for highlight over the image */}
                <p className="text-3xl font-extrabold mt-2 tracking-wide drop-shadow-lg" style={{ color: accentColor }}>
                  Driving Regional Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Content (Text color set to white/light for contrast) */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Millennium Training</h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              Millennium Training Professionals is a leading corporate training and consulting company based in Kigali,
              Rwanda. Our vision is to be a regional competitive training provider and national events service provider,
              delivering excellence in professional development.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                {/* Icon background changed to complement the dark green */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Expert Facilitation</h4>
                  <p className="text-gray-300">
                    Experienced trainers with deep expertise in people management and professional development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {/* Icon background changed to complement the dark green */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Customized Solutions</h4>
                  <p className="text-gray-300">
                    Tailored programs designed for functional, management, and executive-level professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {/* Icon background changed to complement the dark green */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Flexible Delivery</h4>
                  <p className="text-gray-300">
                    In-person facilitation and virtual instructor-led training options for maximum accessibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Button contrast: White background with the Deep Forest Green text */}
            <button 
              className="bg-white px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold mt-4 shadow-lg"
              style={{ color: deepForestGreenBg }} // Use the main background color for button text
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}