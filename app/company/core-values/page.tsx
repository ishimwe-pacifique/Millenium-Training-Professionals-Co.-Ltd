import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Target, Users, Zap } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export const metadata = {
  title: "Our Core Values | Millennium Training Professionals",
  description: "Discover the core values that guide Millennium Training Professionals.",
}

export default function CoreValuesPage() {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality training, consulting, and professional services that exceed expectations.",
    },
    {
      icon: Users,
      title: "People-Centered",
      description:
        "Our focus is on human development, dignity, and creating meaningful connections that foster growth and collaboration.",
    },
    {
      icon: Target,
      title: "Integrity",
      description:
        "We operate with transparency, accountability, and ethical principles in all our business relationships and interactions.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously adapt our methods and approaches to deliver cutting-edge solutions that drive real business results.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>Our Core Values</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These values guide every decision we make and shape how we serve our clients and communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border rounded-lg hover:shadow-lg transition-all"
                  style={{ borderColor: '#e5e7eb' }}
                >
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/diverse-team-collaborating-in-rwanda-training-sess.jpg"
                alt="Team values in action"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Living Our Values</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our core values aren't just statements - they're embedded in how we work with every client, community,
                and team member.
              </p>
              <p className="text-lg text-gray-700">
                We believe that when organizations prioritize these values, they unlock their full potential and create
                sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
