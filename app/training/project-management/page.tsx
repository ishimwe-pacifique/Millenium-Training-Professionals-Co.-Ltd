import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Project Management Training | Millennium Training Professionals",
  description: "Master project management skills with our comprehensive training programs in Rwanda.",
}

export default function ProjectManagementPage() {
  const benefits = [
    "Learn proven project management methodologies",
    "Master risk management and stakeholder engagement",
    "Develop leadership and team coordination skills",
    "Enhance planning, execution, and monitoring capabilities",
    "Apply real-world case studies and best practices",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">Project Management Training</h1>
              <p className="text-lg text-foreground/80 mb-6">
                Master the essential skills to lead projects successfully from conception to completion. Our
                comprehensive training program equips professionals with tools and techniques to deliver results on time
                and within budget.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Enroll Now
              </button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <img
                src="/project-management-team-planning-in-kigali-office-.jpg"
                alt="Project Management Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Training Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Program Details</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-foreground/70">3-5 days intensive or flexible schedule</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Delivery Format</h3>
                <p className="text-foreground/70">In-person, Virtual, or Hybrid options</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Group Size</h3>
                <p className="text-foreground/70">Small groups for personalized attention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
