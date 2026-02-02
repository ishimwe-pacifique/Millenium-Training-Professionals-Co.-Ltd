"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Handshake, Globe } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function CodeOfConductPage() {
  const principles = [
    {
      icon: Handshake,
      title: "Professional Integrity",
      description: "We maintain the highest ethical standards in all business dealings and client relationships.",
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "We protect client information and maintain strict confidentiality in all consulting relationships.",
    },
    {
      icon: Globe,
      title: "Social Responsibility",
      description: "We contribute positively to communities and promote sustainable business practices.",
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

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Ethical Standards</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-tighter leading-tight mb-6" style={{ color: PRIMARY_COLOR }}>
            Code of Conduct
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-3xl font-medium leading-relaxed mb-12">
            At Millennium Training Professionals, our Code of Conduct reflects our commitment to ethical business
            practices, professional excellence, and social responsibility. These principles guide how we interact with
            clients, employees, partners, and communities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon
              return (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[#004D40]/5 flex items-center justify-center mb-6 group-hover:bg-[#004D40] transition-colors duration-300">
                    <Icon className="w-6 h-6 group-hover:text-white transition-colors duration-300" style={{ color: PRIMARY_COLOR }} />
                  </div>
                  <h3 className="text-base font-extrabold font-display uppercase tracking-wide mb-3" style={{ color: PRIMARY_COLOR }}>{principle.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight mb-10" style={{ color: PRIMARY_COLOR }}>Our Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Client Excellence", desc: "We deliver exceptional value and maintain transparent communication throughout all engagements." },
              { title: "Employee Development", desc: "We invest in our team's growth and provide a supportive work environment." },
              { title: "Community Impact", desc: "We actively contribute to community development and promote social responsibility." },
              { title: "Compliance", desc: "We adhere to all applicable laws, regulations, and industry standards in Rwanda and the region." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: PRIMARY_COLOR }}>{item.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}