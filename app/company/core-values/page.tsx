"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Target, Users, Zap } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function CoreValuesPage() {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality training, consulting, and professional services that exceed expectations.",
    },
    {
      icon: Users,
      title: "People-Centered",
      description:
        "Our focus is on human development, dignity, and creating meaningful connections that foster growth and collaboration.",
    },
    {
      icon: Target,
      title: "Integrity",
      description:
        "We operate with transparency, accountability, and ethical principles in all our business relationships and interactions.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously adapt our methods and approaches to deliver cutting-edge solutions that drive real business results.",
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
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 text-center">Our Identity</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-tighter text-center mb-6" style={{ color: PRIMARY_COLOR }}>
            Our Core Values
          </h1>
          <p className="text-sm md:text-base text-gray-500 text-center max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            These values guide every decision we make and shape how we serve our clients and communities to ensure regional professional excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#004D40]/5 flex items-center justify-center mb-6 group-hover:bg-[#004D40] transition-colors duration-300">
                    <Icon className="w-7 h-7 group-hover:text-white transition-colors duration-300" style={{ color: PRIMARY_COLOR }} />
                  </div>
                  <h3 className="text-xl font-extrabold font-display uppercase tracking-wide mb-3" style={{ color: PRIMARY_COLOR }}>{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/diverse-team-collaborating-in-rwanda-training-sess.jpg"
                alt="Team values in action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/30 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold font-display uppercase tracking-tighter leading-tight" style={{ color: PRIMARY_COLOR }}>
                Living Our Values
              </h2>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  Our core values aren't just statements—they're embedded in how we work with every client, community,
                  and team member.
                </p>
                <p>
                  We believe that when organizations prioritize these values, they unlock their full potential and create
                  sustainable success. At Millennium Training, we lead by example.
                </p>
              </div>
              <div className="pt-4">
                 <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Est. 2023</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}