"use client"

import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, ShieldCheck, ChevronDown } from "lucide-react"
import { useState } from "react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I register for a training program?", a: "You can register directly through our Events page by selecting your desired program and completing the registration form." },
    { q: "Do you offer customized corporate training?", a: "Yes, we specialize in tailoring our curriculum to meet the specific organizational needs and professional goals of your team." },
    { q: "Where are the training sessions held?", a: "Most sessions are held at our Kigali facilities, though we also provide on-site training for corporate clients across Rwanda." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Header />

      {/* Cinematic Page Header with Image Overlay */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/norrsken-kigali-house-mass-design-group_2.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#004D40]/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-none mb-4">
            Get In <span style={{ color: ACCENT_COLOR }}>Touch</span>
          </h1>
          <p className="text-white/70 text-sm md:text-lg max-w-xl font-medium leading-relaxed">
            Reach out to our experts today to discuss how we can refine your professional trajectory.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3 text-gray-400 group-hover:text-[#004D40] transition-colors font-display">
                  <Mail size={18} className="text-[#004D40]" />
                  Direct Correspondence
                </h3>
                <a href="mailto:milleniumtrainers@gmail.com" className="text-base font-bold text-[#004D40] hover:underline underline-offset-4">
                  milleniumtrainers@gmail.com
                </a>
              </div>

              <div className="group">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3 text-gray-400 group-hover:text-[#004D40] transition-colors font-display">
                  <Phone size={18} className="text-[#004D40]" />
                  Strategic Support
                </h3>
                <div className="space-y-2">
                  <p className="text-base font-bold text-[#004D40]">0796 691 454</p>
                  <p className="text-sm font-medium text-gray-400 tracking-widest font-mono">*182*1*1*0796691454#</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3 text-gray-400 group-hover:text-[#004D40] transition-colors font-display">
                  <MapPin size={18} className="text-[#004D40]" />
                  Regional Headquarters
                </h3>
                <p className="text-base font-bold text-[#004D40] leading-relaxed uppercase tracking-tight font-display">
                  Kigali, Rwanda <br />
                </p>
              </div>
            </div>

            {/* High-End Contact Form */}
            <div className="lg:col-span-2 bg-gray-50/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
               <div className="mb-10">
                 <h2 className="text-2xl font-black font-display uppercase tracking-tight text-[#004D40] mb-2">Send a Message</h2>
                 <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Expected Response Time: 24 Hours</p>
               </div>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Modern FAQ Section */}
      <section className="py-20 bg-gray-50/30 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black font-display uppercase tracking-tight text-[#004D40]">
              Frequently Asked <span style={{ color: ACCENT_COLOR }}>Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-sm md:text-base text-[#004D40] uppercase tracking-tight font-display">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#66BB6A] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}