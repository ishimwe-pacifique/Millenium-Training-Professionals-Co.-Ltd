import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, TrendingUp, Users } from "lucide-react"

export const metadata = {
  title: "Business Services Consulting | Millennium Training Professionals",
  description: "Expert business consulting services to transform your organization in Rwanda.",
}

export default function BusinessServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Organizational Assessment",
      description: "Comprehensive evaluation of your current business structure and operations",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth Planning",
      description: "Develop actionable strategies to scale and optimize your business",
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams with improved communication and collaboration",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">Business Services Consulting</h1>
              <p className="text-lg text-foreground/80 mb-6">
                Transform your organization with strategic insights and pragmatic advice. Our expert consultants bring
                world-class methodology combined with deep understanding of Rwanda's business landscape.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Request Consultation
              </button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <img src="/business-consulting-meeting-in-rwanda-corporate-of.jpg" alt="Business Consulting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Consulting Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Consulting Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Discovery & Assessment</h3>
                  <p className="text-foreground/70">We deeply understand your business challenges and opportunities</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Strategy Development</h3>
                  <p className="text-foreground/70">We create customized strategies aligned with your business goals</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Implementation & Support</h3>
                  <p className="text-foreground/70">We guide your team through implementation with ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
