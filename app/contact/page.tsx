import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 border-b" style={{ backgroundColor: `${PRIMARY_COLOR}0D`, borderColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Have questions about our training programs or consulting services? We'd love to hear from you. Reach out to
            our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                  <Mail size={24} style={{ color: PRIMARY_COLOR }} />
                  Email
                </h3>
                <a
                  href="mailto:info@millenium.rw"
                  className="text-gray-600 hover:underline transition-colors"
                >
                  info@millenium.rw
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                  <Phone size={24} style={{ color: PRIMARY_COLOR }} />
                  Phone
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+250767691454"
                    className="block text-gray-600 hover:underline transition-colors"
                  >
                    +250 767 691 454
                  </a>
                  <a
                    href="tel:+250784335816"
                    className="block text-gray-600 hover:underline transition-colors"
                  >
                    +250 784 335 816
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                  <MapPin size={24} style={{ color: PRIMARY_COLOR }} />
                  Location
                </h3>
                <p className="text-gray-600">
                  Kigali, Rwanda
                  <br />
                  East Africa
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3" style={{ color: PRIMARY_COLOR }}>
                  <Clock size={24} style={{ color: PRIMARY_COLOR }} />
                  Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Weekend: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
