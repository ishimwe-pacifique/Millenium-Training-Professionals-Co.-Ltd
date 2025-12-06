import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const PRIMARY_COLOR = "#004D40";

export const metadata = {
  title: "Who We Are | Millennium Training Professionals",
  description: "Learn about Millennium Training Professionals - Rwanda's leading training and consulting company.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Who We Are</h1>
              <p className="text-lg text-gray-700 mb-4">
                Millennium Training Professionals Co. Ltd is a premier training and consulting entity dedicated to
                delivering transformative corporate training, coaching, workshops, and consulting services across Rwanda
                and the region.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our experienced facilitators and consultants bring deep expertise in people management, organizational
                development, and professional excellence. We partner with organizations to create thriving workplaces
                where teams connect, communicate effectively, and succeed together.
              </p>
              <p className="text-lg text-gray-700">
                Since our inception, we've been committed to refining professional excellence and fostering lifelong
                learning that drives both personal growth and organizational productivity.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/professional-team-meeting-in-rwanda-office-confere.jpg"
                alt="Millennium Training Professionals Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>500+</div>
              <p className="text-gray-600">Professionals Trained</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>15+</div>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12" style={{ color: PRIMARY_COLOR }}>Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a regional competitive training and national socio-community edutainment events' services
                provider, setting the standard for professional excellence and community impact across East Africa.
              </p>
            </div>
            <div className="p-8 bg-white border rounded-lg" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                The Millennium Training Professionals program offers courses of effective skills and capacity to uplift
                professionalism, work excellence, and growth. We deliver quality training, consulting, and community
                engagement that creates lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
