"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const backgroundImages = [
    "/images/norrsken-kigali-house-mass-design-group_2.jpg",
    "/professional-training-conference-in-rwanda-with-di.jpg",
    "/african-business-professionals-in-modern-office-rw.jpg",
  ]

  const PRIMARY_COLOR = "#004D40";
  const ACCENT_COLOR = "#66BB6A";

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: `${PRIMARY_COLOR}99` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 hero-content">
            {/* Accent tag uses primary green with transparency */}
            <div className="inline-block rounded-full px-4 py-2 backdrop-blur-sm" style={{ backgroundColor: `${PRIMARY_COLOR}66`, border: `1px solid ${PRIMARY_COLOR}99` }}>
              <span className="text-sm font-medium text-white">Professional Excellence in Africa</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {/* Highlighted text uses the bright green accent color */}
              Transform Your <span style={{ color: ACCENT_COLOR }}>Professional Excellence</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-lg drop-shadow-md">
              Millennium Training Professionals delivers world-class corporate training, executive coaching, and
              consulting services to help organizations thrive and professionals grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button: Deep Green background */}
              <button className="text-white px-8 py-3 rounded-lg transition-all font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90" style={{ backgroundColor: PRIMARY_COLOR }}>
                Explore Programs
                <ArrowRight size={20} />
              </button>
              {/* Secondary Button: White border, white text */}
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold backdrop-blur-sm">
                Learn More
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/20">
              {/* Stats - Text Accent Color (500+) */}
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT_COLOR }}>500+</div>
                <p className="text-sm text-gray-200">Professionals Trained</p>
              </div>
              {/* Stats - Text Accent Color (15+) - FIXED: Changed class to className */}
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT_COLOR }}>15+</div>
                <p className="text-sm text-gray-200">Years Experience</p>
              </div>
              {/* Stats - Text Accent Color (98%) */}
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT_COLOR }}>98%</div>
                <p className="text-sm text-gray-200">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 hero-content" style={{ animationDelay: "0.2s" }}>
            {/* Floating Card 1 - Icon Background uses Deep Green Gradient */}
            <div className="absolute top-10 right-10 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform w-80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, #006400, ${PRIMARY_COLOR})` }}>
                  <span className="text-white text-xl">📚</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Training Excellence</h3>
                  <p className="text-xs text-gray-600">Certified Programs</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">Industry-leading training with expert instructors</p>
            </div>

            {/* Floating Card 2 - Icon Background uses Deep Green Gradient */}
            <div
              className="absolute bottom-20 left-10 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform w-80"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, #006400, ${PRIMARY_COLOR})` }}>
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Proven Results</h3>
                  <p className="text-xs text-gray-600">Measurable Impact</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">Transform your team with lasting professional growth</p>
            </div>

            {/* Floating Card 3 - Icon Background uses Deep Green Gradient */}
            <div
              className="absolute top-1/2 right-0 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform w-80"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, #006400, ${PRIMARY_COLOR})` }}>
                  <span className="text-white text-xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Expert Consultants</h3>
                  <p className="text-xs text-gray-600">Specialized Services</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">Dedicated professionals supporting your success</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}