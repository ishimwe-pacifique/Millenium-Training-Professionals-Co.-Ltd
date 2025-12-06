"use client"

import { Users, Briefcase, TrendingUp, Award, Target, BarChart3 } from "lucide-react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

const services = [
  {
    icon: <Users size={32} />,
    title: "Corporate Training",
    description:
      "Customized training programs for managers and executives in strategic management, leadership, and business excellence.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Executive Coaching",
    description:
      "Personalized coaching to develop communication skills, professional resilience, and influential leadership capabilities.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Business Consulting",
    description:
      "Strategic consulting services for business development, market strategy, and organizational transformation.",
  },
  {
    icon: <Award size={32} />,
    title: "Professional Workshops",
    description:
      "Interactive workshops on project management, creativity, innovation, and career development for all professional levels.",
  },
  {
    icon: <Target size={32} />,
    title: "Skills Development",
    description:
      "Specialized training in financial services, sales & marketing, governance, and industry-specific competencies.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Community Events",
    description:
      "Socio-community events for family wellness, business networking, and professional development opportunities.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training and consulting solutions designed to elevate your organization's professional
            excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-8 transition-all hover:shadow-lg group cursor-pointer hover:border-[#004D40]"
              style={{ borderColor: '#e5e7eb' }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform" style={{ color: PRIMARY_COLOR }}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
