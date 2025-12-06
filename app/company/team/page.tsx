import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const PRIMARY_COLOR = "#004D40";

export const metadata = {
  title: "Our People | Millennium Training Professionals",
  description: "Meet the talented professionals behind Millennium Training Professionals.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>Our People</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our team comprises experienced professionals with deep expertise in training, consulting, and organizational
            development.
          </p>

          <div className="relative h-96 rounded-xl overflow-hidden mb-12" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
            <img
              src="/diverse-team-of-professionals-from-rwanda-training.jpg"
              alt="Millennium Training Professionals Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
                  <img
                    src={`/professional-portrait.png?height=128&width=128&query=professional portrait person ${idx}`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>Expert Professional</h3>
                <p className="text-gray-600 mt-2">Specialization in Training & Development</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: PRIMARY_COLOR }}>Why Our Team Stands Out</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>Experience</h3>
              <p className="text-gray-600">
                Decades of combined experience in training, consulting, and organizational development
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>Passion</h3>
              <p className="text-gray-600">
                Committed to transforming organizations and developing professional excellence
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>Innovation</h3>
              <p className="text-gray-600">
                Continuously updating methodologies and approaches to stay current with best practices
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>Local Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Rwanda's business landscape and cultural context
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
