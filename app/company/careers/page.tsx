"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Zap, ArrowRight } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function CareersPage() {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Training Facilitators",
      description: "Passionate professionals to design and deliver impactful training programs",
    },
    {
      icon: Users,
      title: "Consulting Professionals",
      description: "Expert consultants to guide organizations through transformation",
    },
    {
      icon: Zap,
      title: "Program Coordinators",
      description: "Organized professionals to manage training and consulting operations",
    },
  ]

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Work With Us</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-tighter leading-tight mb-6" style={{ color: PRIMARY_COLOR }}>
            Join Our Team
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            Be part of a mission-driven organization transforming professional development in Rwanda and across the region.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#004D40]/5 flex items-center justify-center mb-6 group-hover:bg-[#004D40] transition-colors duration-300">
                    <Icon className="w-6 h-6 group-hover:text-white transition-colors duration-300" style={{ color: PRIMARY_COLOR }} />
                  </div>
                  <h3 className="text-base font-extrabold font-display uppercase tracking-tight mb-3" style={{ color: PRIMARY_COLOR }}>{opp.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{opp.description}</p>
                  <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/btn transition-colors" style={{ color: PRIMARY_COLOR }}>
                    Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: "Professional Growth", desc: "Continuous learning and development opportunities." },
              { title: "Global Impact", desc: "Make a real difference in organizational and community development." },
              { title: "Collaborative Culture", desc: "Work with passionate professionals who share your values." },
              { title: "Competitive Benefits", desc: "Attractive compensation and comprehensive benefits package." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <div>
                  <h3 className="text-xs font-black font-display uppercase tracking-widest mb-1" style={{ color: PRIMARY_COLOR }}>{item.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight mb-6" style={{ color: PRIMARY_COLOR }}>
            Ready to Join Us?
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Send your CV and cover letter to <span className="text-[#004D40] font-bold">careers@millenium.rw</span> to explore opportunities with Millennium Training Professionals.
          </p>
          <button 
            className="text-white px-10 py-4 rounded-xl hover:opacity-90 transition-all font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl active:scale-95" 
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Send Application
          </button>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}