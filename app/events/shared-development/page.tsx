'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Users, Zap, Target } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function SharedDevelopmentPage() {
  const initiatives = [
    { icon: Building, title: "Infrastructure Projects", description: "Community-led infrastructure development initiatives" },
    { icon: Users, title: "Skill Sharing", description: "Knowledge and skill exchange programs within communities" },
    { icon: Zap, title: "Innovation Hubs", description: "Community innovation and entrepreneurship centers" },
    { icon: Target, title: "Sustainable Development", description: "Environmental and economic sustainability projects" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <Header />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-center uppercase tracking-tight leading-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Community Shared Development
          </h1>
          <p className="text-base font-body font-medium text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#374151' }}>
            Collaborative community development programs that bring people together for shared progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{initiative.title}</h3>
                  <p className="font-body text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}