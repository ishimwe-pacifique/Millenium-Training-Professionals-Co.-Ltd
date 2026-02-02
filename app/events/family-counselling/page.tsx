'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Calendar, MapPin } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function FamilyCounsellingPage() {
  const services = [
    "Marriage & Relationship Counseling",
    "Family Communication Workshops", 
    "Conflict Resolution Sessions",
    "Parenting Skills Development",
    "Financial Planning for Families",
    "Community Support Groups"
  ];

  const events = [
    { title: "Monthly Family Wellness Sessions", date: "Every 2nd Saturday", location: "Kigali Community Center" },
    { title: "Couples Communication Workshop", date: "Quarterly", location: "Various Locations" },
    { title: "Youth & Family Integration", date: "Monthly", location: "Community Halls" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <Header />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 uppercase tracking-tight leading-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
              Family Relationship Counselling
            </h1>
            <p className="text-base font-body font-medium text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#374151' }}>
              Strengthen family bonds and build healthier relationships through our comprehensive counselling 
              and community support programs designed for families across Rwanda.
            </p>
            <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
              Join Our Programs
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow" style={{ borderColor: '#e5e7eb' }}>
                <Heart className="w-8 h-8 mb-4" style={{ color: PRIMARY_COLOR }} />
                <h3 className="font-body font-semibold text-sm uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12 uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}