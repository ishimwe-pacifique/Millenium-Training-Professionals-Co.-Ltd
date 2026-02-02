"use client"

import type React from "react"
import { Facebook, Linkedin, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const socialLinks = {
    instagram: "https://www.instagram.com/millenniumtrainingpro?igsh=MXJoY2dhc3Y2aHlwaQ==",
    facebook: "https://www.facebook.com/profile.php?id=61583500145849",
    linkedin: "#",
    x: "#",
    youtube: "#"
  }

  return (
    <footer className="relative bg-[#050505] text-white font-sans overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Cultural Heritage Accent */}
      <div className="h-1.5 w-full opacity-30" style={{ backgroundImage: "url('/images/imigongo-CnTasSi5.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat-x' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Compact Newsletter Row */}
        <div className="border-b border-white/5 pb-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-black font-display uppercase tracking-tight mb-1">Stay <span style={{ color: ACCENT_COLOR }}>Updated</span></h3>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Elite professional tips to your inbox.</p>
            </div>
            <form onSubmit={handleSubscribe} className="relative flex gap-2">
              <input
                type="email"
                placeholder="Professional Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-[11px] focus:outline-none focus:border-[#66BB6A]/50 transition-all"
                required
              />
              <button type="submit" className="px-6 py-3 bg-white text-black rounded-xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-gray-100 transition-all">
                {subscribed ? "Success" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Wing */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-black text-[10px]" style={{ color: PRIMARY_COLOR }}>MT</span>
              </div>
              <span className="font-black text-base font-display uppercase tracking-tighter">Millennium Training</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-500 font-medium max-w-sm">
              Transforming professional excellence through quality training and consulting services across Rwanda.
            </p>
            <div className="flex gap-3">
              <a href={socialLinks.facebook} target="_blank" className="p-2.5 bg-white/5 rounded-lg hover:bg-[#66BB6A] transition-all border border-white/5 text-gray-400 hover:text-white"><Facebook size={14} /></a>
              <a href={socialLinks.instagram} target="_blank" className="p-2.5 bg-white/5 rounded-lg hover:bg-[#66BB6A] transition-all border border-white/5 text-gray-400 hover:text-white"><Instagram size={14} /></a>
              <a href={socialLinks.linkedin} className="p-2.5 bg-white/5 rounded-lg hover:bg-[#66BB6A] transition-all border border-white/5 text-gray-400 hover:text-white"><Linkedin size={14} /></a>
              <a href={socialLinks.x} className="p-2.5 bg-white/5 rounded-lg hover:bg-[#66BB6A] transition-all border border-white/5 text-gray-400 hover:text-white"><Twitter size={14} /></a>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-black text-[9px] uppercase tracking-[0.2em] text-gray-600 mb-5 font-display">Services</h4>
              <ul className="space-y-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <li><Link href="/#services" className="hover:text-[#66BB6A]">Corporate Training</Link></li>
                <li><Link href="/#services" className="hover:text-[#66BB6A]">Consulting</Link></li>
                <li><Link href="/#services" className="hover:text-[#66BB6A]">Workshops</Link></li>
                <li><Link href="/#services" className="hover:text-[#66BB6A]">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[9px] uppercase tracking-[0.2em] text-gray-600 mb-5 font-display">Company</h4>
              <ul className="space-y-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <li><Link href="/#" className="hover:text-[#66BB6A]">About Us</Link></li>
                <li><Link href="/#" className="hover:text-[#66BB6A]">Our Story</Link></li>
                <li><Link href="/#" className="hover:text-[#66BB6A]">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-[#66BB6A]">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Node */}
          <div className="lg:col-span-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <h4 className="font-black text-[9px] uppercase tracking-[0.3em] text-[#66BB6A] mb-5 font-display">Contact & Support</h4>
            <div className="space-y-4 text-[10px] text-gray-300 font-medium">
              <div className="flex items-center gap-3">
                <Phone size={12} className="text-[#66BB6A]" />
                <p className="font-black tracking-widest">0796 691 454</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={12} className="text-[#66BB6A]" />
                <p className="lowercase opacity-70">milleniumtrainers@gmail.com</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-black uppercase text-[8px] tracking-[0.2em] opacity-40 mb-2">Payment Support</p>
                <p className="font-mono text-[12px] font-black text-[#66BB6A] bg-white/5 p-2 rounded-lg text-center border border-white/5">
                  *182*1*1*0796691454#
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-black uppercase tracking-[0.3em] text-gray-600">
          <div className="flex items-center gap-2"><MapPin size={10} className="text-[#66BB6A]" />Kigali, Rwanda</div>
          <div>© 2026 Millennium Training Professionals</div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}