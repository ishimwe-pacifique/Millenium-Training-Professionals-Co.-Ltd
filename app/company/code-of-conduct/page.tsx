import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Handshake, Globe } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export const metadata = {
  title: "Code of Conduct | Millennium Training Professionals",
  description: "Our commitment to ethical business practices and professional standards.",
}

export default function CodeOfConductPage() {
  const principles = [
    {
      icon: Handshake,
      title: "Professional Integrity",
      description: "We maintain the highest ethical standards in all business dealings and client relationships.",
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "We protect client information and maintain strict confidentiality in all consulting relationships.",
    },
    {
      icon: Globe,
      title: "Social Responsibility",
      description: "We contribute positively to communities and promote sustainable business practices.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Code of Conduct</h1>
          <p className="text-lg text-gray-700 mb-8">
            At Millennium Training Professionals, our Code of Conduct reflects our commitment to ethical business
            practices, professional excellence, and social responsibility. These principles guide how we interact with
            clients, employees, partners, and communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {principles.map((principle, idx) => {
              const Icon = principle.icon
              return (
                <div key={idx} className="p-8 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: PRIMARY_COLOR }}>Our Commitments</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Client Excellence</h3>
              <p className="text-gray-600">
                We deliver exceptional value and maintain transparent communication throughout all engagements.
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Employee Development</h3>
              <p className="text-gray-600">
                We invest in our team's growth and provide a supportive work environment.
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Community Impact</h3>
              <p className="text-gray-600">
                We actively contribute to community development and promote social responsibility.
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR }}>Compliance</h3>
              <p className="text-gray-600">
                We adhere to all applicable laws, regulations, and industry standards in Rwanda and the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
