import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Calendar, Target, Users } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function ProjectPlanningPage() {
  const features = [
    "Project Scheduling & Timelines",
    "Resource Allocation & Management", 
    "Team Coordination & Communication",
    "Quality Assurance & Control",
    "Risk Management & Mitigation",
    "Stakeholder Management"
  ];

  const benefits = [
    { icon: Calendar, title: "On-Time Delivery", description: "Comprehensive project timeline and milestone planning" },
    { icon: Target, title: "Resource Optimization", description: "Optimal resource allocation and cost management" },
    { icon: Users, title: "Team Excellence", description: "Effective team coordination and communication" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
                Project Planning & Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Expert project planning and management consulting for successful project delivery. 
                Comprehensive project lifecycle management and team coordination services.
              </p>
              <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
                Get Consultation
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/images/project-planning-consulting.jpg"
                alt="Project Planning Consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Planning Services
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Project Success Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      <Footer />
    </main>
  )
}