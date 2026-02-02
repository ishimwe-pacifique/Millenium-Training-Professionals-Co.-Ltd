"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const PRIMARY_COLOR = "#004D40";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* World-Class Typography Loading */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-tighter leading-tight" style={{ color: PRIMARY_COLOR }}>
                Who We Are
              </h1>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  Millennium Training Professionals Co. Ltd is a premier training and consulting entity dedicated to
                  delivering transformative corporate training, coaching, workshops, and consulting services across Rwanda
                  and the region.
                </p>
                <p>
                  Our experienced facilitators and consultants bring deep expertise in people management, organizational
                  development, and professional excellence. We partner with organizations to create thriving workplaces
                  where teams connect, communicate effectively, and succeed together.
                </p>
                <p>
                  Since our inception, we've been committed to refining professional excellence and fostering lifelong
                  learning that drives both personal growth and organizational productivity.
                </p>
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/professional-team-meeting-in-rwanda-office-confere.jpg"
                alt="Millennium Training Professionals Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Vision & Mission - Refined Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 text-center">Foundations of Excellence</h2>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-center mb-16" style={{ color: PRIMARY_COLOR }}>
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-extrabold font-display uppercase tracking-wide mb-6 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                <span className="w-8 h-8 rounded-lg bg-[#004D40]/10 flex items-center justify-center text-sm">01</span>
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                To be a regional competitive training and national socio-community edutainment events' services
                provider, setting the standard for professional excellence and community impact across East Africa.
              </p>
            </div>
            <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-extrabold font-display uppercase tracking-wide mb-6 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                <span className="w-8 h-8 rounded-lg bg-[#004D40]/10 flex items-center justify-center text-sm">02</span>
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                The Millennium Training Professionals program offers courses of effective skills and capacity to uplift
                professionalism, work excellence, and growth. We deliver quality training, consulting, and community
                engagement that creates lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}