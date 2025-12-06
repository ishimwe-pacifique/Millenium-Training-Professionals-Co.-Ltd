import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Briefcase, TrendingUp, Award, Target, BarChart3, ArrowRight } from "lucide-react"

const servicesDetail = [
  {
    icon: <Users size={40} />,
    title: "Corporate Training",
    description: "Customized training programs designed for managers and executives.",
    features: [
      "Strategic management development",
      "Leadership & communication skills",
      "Business excellence & resilience",
      "Customized curricula for your needs",
    ],
  },
  {
    icon: <Briefcase size={40} />,
    title: "Executive Coaching",
    description: "Personalized coaching to develop professional excellence.",
    features: [
      "One-on-one coaching sessions",
      "Communication skill development",
      "Professional resilience building",
      "Leadership capability enhancement",
    ],
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Consulting",
    description: "Strategic consulting for organizational transformation.",
    features: [
      "Business strategy development",
      "Market analysis & positioning",
      "Organizational restructuring",
      "Competitive advantage building",
    ],
  },
  {
    icon: <Award size={40} />,
    title: "Professional Workshops",
    description: "Interactive workshops on in-demand professional skills.",
    features: [
      "Project management excellence",
      "Creativity & innovation training",
      "Career development & promotion",
      "Industry-specific competencies",
    ],
  },
  {
    icon: <Target size={40} />,
    title: "Skills Development",
    description: "Specialized training in critical business domains.",
    features: [
      "Financial services training",
      "Sales & marketing excellence",
      "Corporate governance",
      "Technical skills development",
    ],
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Community Events",
    description: "Socio-community events for professional networking.",
    features: [
      "Family relationship counselling",
      "Networking events",
      "Community awareness programs",
      "Professional development seminars",
    ],
  },
]

const deliveryMethods = [
  {
    title: "In-Person Training",
    description: "Face-to-face facilitator-led training for maximum engagement and interaction.",
    icon: "🏢",
  },
  {
    title: "Virtual Training",
    description: "Online instructor-led sessions providing flexibility and accessibility.",
    icon: "💻",
  },
  {
    title: "Hybrid Programs",
    description: "Combination of in-person and virtual components for optimal learning.",
    icon: "🔄",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 border-b bg-white" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive training and consulting solutions designed to elevate your organization's professional
            excellence and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        {/* Background image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/world_tech-DB__SZCy.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetail.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group/btn">
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Flexible Delivery Methods</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the training format that works best for your organization's needs and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryMethods.map((method, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team today to discuss your training and consulting needs.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
