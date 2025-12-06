import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Zap } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export const metadata = {
  title: "Careers | Millennium Training Professionals",
  description: "Join our team and make an impact on professional excellence in Rwanda.",
}

export default function CareersPage() {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Training Facilitators",
      description: "Passionate professionals to design and deliver impactful training programs",
    },
    {
      icon: Users,
      title: "Consulting Professionals",
      description: "Expert consultants to guide organizations through transformation",
    },
    {
      icon: Zap,
      title: "Program Coordinators",
      description: "Organized professionals to manage training and consulting operations",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>Join Our Team</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Be part of a mission-driven organization transforming professional development in Rwanda and beyond.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border rounded-lg hover:shadow-lg transition-all"
                  style={{ borderColor: '#e5e7eb' }}
                >
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{opp.title}</h3>
                  <p className="text-gray-600 mb-6">{opp.description}</p>
                  <button className="font-semibold hover:opacity-80 transition-colors" style={{ color: PRIMARY_COLOR }}>
                    Learn More →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: PRIMARY_COLOR }}>Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Professional Growth</h3>
              <p className="text-gray-600">Continuous learning and development opportunities</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Impact</h3>
              <p className="text-gray-600">Make a real difference in organizational and community development</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Collaborative Culture</h3>
              <p className="text-gray-600">Work with passionate professionals who share your values</p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Competitive Benefits</h3>
              <p className="text-gray-600">Attractive compensation and comprehensive benefits package</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Ready to Join Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Send your CV and cover letter to careers@millenium.rw to explore opportunities with Millennium Training
            Professionals.
          </p>
          <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
            Send Application
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
