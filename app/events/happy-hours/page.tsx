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
      <Header />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>
            Family & Community Happy Hours
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Joyful community events that celebrate family bonds and community spirit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              );
            })}
          </div>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.time}</p>
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