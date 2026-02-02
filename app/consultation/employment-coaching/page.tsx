'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, User, MessageCircle, Target } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function EmploymentCoachingPage() {
  const features = [
    "Personalized Career Coaching",
    "Interview Preparation & Practice", 
    "Job Search Strategy Development",
    "Skills Assessment & Gap Analysis",
    "Professional Networking Guidance",
    "Career Transition Support"
  ];

  const benefits = [
    { icon: User, title: "Career Growth", description: "Personalized career development and professional guidance" },
    { icon: MessageCircle, title: "Interview Success", description: "Professional interview skills and confidence building" },
    { icon: Target, title: "Strategic Job Search", description: "Effective job search techniques and networking strategies" }
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
                Employment Coaching
              </h1>
              <p className="text-base font-body font-medium text-gray-600 mb-8 leading-relaxed" style={{ color: '#374151' }}>
                Professional coaching services to enhance employability and career success. 
                Personalized guidance for career development and job search excellence.
              </p>
              <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
                Get Coaching
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/images/employment-coaching.jpg"
                alt="Employment Coaching"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Coaching Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#e5e7eb' }}>
                <CheckCircle className="w-8 h-8 mb-4" style={{ color: PRIMARY_COLOR }} />
                <h3 className="font-body font-semibold mb-2 text-sm uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Coaching Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{benefit.title}</h3>
                  <p className="font-body text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>{benefit.description}</p>
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