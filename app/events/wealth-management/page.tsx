import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, DollarSign, PieChart, Users, Calendar } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function WealthManagementPage() {
  const features = [
    "Family Budgeting Workshops",
    "Investment Education Sessions", 
    "Financial Literacy Programs",
    "Wealth Building Strategies",
    "Savings & Planning Guidance",
    "Retirement Planning Basics"
  ];

  const benefits = [
    { icon: DollarSign, title: "Smart Budgeting", description: "Effective household financial planning and management" },
    { icon: PieChart, title: "Investment Knowledge", description: "Basic investment principles and portfolio building" },
    { icon: Users, title: "Family Financial Literacy", description: "Building financial knowledge across all generations" }
  ];

  const events = [
    { title: "Monthly Financial Planning Workshop", date: "First Saturday of each month", time: "10:00 AM - 2:00 PM" },
    { title: "Investment Basics Seminar", date: "Third Sunday of each month", time: "2:00 PM - 5:00 PM" },
    { title: "Family Budgeting Session", date: "Every two weeks", time: "6:00 PM - 8:00 PM" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
                Family Wealth Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Empower families with financial literacy and wealth management skills for sustainable prosperity. 
                Community-based financial education and wealth building programs.
              </p>
              <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
                Join Programs
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/images/family-wealth-management.jpg"
                alt="Family Wealth Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Program Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#e5e7eb' }}>
                <CheckCircle className="w-8 h-8 mb-4" style={{ color: PRIMARY_COLOR }} />
                <h3 className="font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}