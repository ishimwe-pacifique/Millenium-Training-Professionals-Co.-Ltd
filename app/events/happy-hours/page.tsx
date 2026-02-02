'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Calendar, Music } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function HappyHoursPage() {
  const activities = [
    { icon: Heart, title: "Family Bonding", description: "Fun activities to strengthen family relationships" },
    { icon: Users, title: "Community Gatherings", description: "Social events that bring neighbors together" },
    { icon: Calendar, title: "Regular Events", description: "Monthly community celebration and networking events" },
    { icon: Music, title: "Cultural Activities", description: "Music, dance, and cultural celebration programs" }
  ];

  const events = [
    { title: "Monthly Family Fun Day", date: "First Saturday of each month", time: "2:00 PM - 6:00 PM" },
    { title: "Community Networking Evening", date: "Third Friday of each month", time: "5:00 PM - 8:00 PM" },
    { title: "Cultural Celebration", date: "Quarterly", time: "Various times" }
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
            Family & Community Happy Hours
          </h1>
          <p className="text-base font-body font-medium text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#374151' }}>
            Joyful community events that celebrate family bonds and community spirit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{activity.title}</h3>
                  <p className="font-body text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>{activity.description}</p>
                </div>
              );
            })}
          </div>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-display font-bold mb-6 text-center uppercase tracking-tight" style={{ color: PRIMARY_COLOR, letterSpacing: '-0.02em' }}>
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="font-display font-bold mb-2 uppercase tracking-wide" style={{ color: PRIMARY_COLOR, letterSpacing: '0.05em' }}>{event.title}</h3>
                  <p className="font-body text-sm font-medium mb-1" style={{ color: '#374151' }}>{event.date}</p>
                  <p className="font-body text-sm font-medium" style={{ color: '#374151' }}>{event.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}