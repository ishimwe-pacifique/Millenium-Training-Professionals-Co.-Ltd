'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, TrendingUp, Users, Target } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function BusinessServicesPage() {
  const services = [
    { icon: Briefcase, title: "Business Strategy Development", description: "Comprehensive strategic planning and implementation guidance" },
    { icon: TrendingUp, title: "Market Analysis & Research", description: "In-depth market studies and competitive analysis" },
    { icon: Users, title: "Organizational Development", description: "Structure optimization and team effectiveness" },
    { icon: Target, title: "Performance Optimization", description: "Process improvement and efficiency enhancement" }
  ];

  const expertise = [
    "Strategic Business Planning",
    "Market Entry Strategies", 
    "Operational Excellence",
    "Change Management",
    "Digital Transformation",
    "Risk Assessment & Management"
  ];

  return (
    <main className="min-h-screen bg-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <Header />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 uppercase tracking-tight leading-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
                Business Services Consulting
              </h1>
              <p className="text-base font-body font-medium text-gray-600 mb-8 leading-relaxed" style={{ color: '#374151' }}>
                Transform your business with our expert consulting services. We provide strategic guidance 
                and practical solutions to help your organization achieve sustainable growth and competitive advantage.
              </p>
              <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
                Get Consultation
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/images/business-consulting.jpg"
                alt="Business Consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Our Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow" style={{ borderColor: '#e5e7eb' }}>
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{service.title}</h3>
                  <p className="font-body text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}