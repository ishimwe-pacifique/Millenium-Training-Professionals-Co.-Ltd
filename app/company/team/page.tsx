"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, Award, Lightbulb, Landmark, Star } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function TeamPage() {
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
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Our Expertise</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-tighter leading-tight mb-6" style={{ color: PRIMARY_COLOR }}>
            Our People
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            Our team comprises experienced professionals with deep expertise in training, consulting, and organizational development across East Africa.
          </p>

          {/* Expert Avatars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { role: "Executive Consultant", area: "Strategy & Governance" },
              { role: "Senior Facilitator", area: "Leadership Development" },
              { role: "Training Specialist", area: "Project Management" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-[#004D40] transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <User className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base font-extrabold font-display uppercase tracking-tight" style={{ color: PRIMARY_COLOR }}>
                  {member.role}
                </h3>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">{member.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Why Our Team Stands Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Experience", desc: "Decades of combined expertise in organizational growth." },
              { icon: Star, title: "Passion", desc: "Committed to transforming professional excellence." },
              { icon: Lightbulb, title: "Innovation", desc: "Continuously updating methodologies with best practices." },
              { icon: Landmark, title: "Local Context", desc: "Deep understanding of Rwanda's business landscape." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-white hover:border-gray-100 transition-all">
                <item.icon className="w-6 h-6 mb-4" style={{ color: PRIMARY_COLOR }} />
                <h3 className="text-xs font-black font-display uppercase tracking-widest mb-2" style={{ color: PRIMARY_COLOR }}>{item.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}