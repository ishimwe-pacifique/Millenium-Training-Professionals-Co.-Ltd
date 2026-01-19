"use client"

import type React from "react"

import { Facebook, Linkedin, Instagram, Twitter, Mail } from "lucide-react"
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

  return (
    <footer className="relative bg-black text-white">
      {/* Decorative pattern at top */}
      <div 
        className="h-24 opacity-20"
        style={{
          backgroundImage: "url('/images/imigongo-CnTasSi5.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x'
        }}
      ></div>
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-200">
                Get the latest training insights and professional development tips delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap"
                style={{ color: PRIMARY_COLOR }}
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <div className="col-span-1 md:col-span-2 text-sm" style={{ color: ACCENT_COLOR }}>✓ Thanks for subscribing!</div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm" style={{ color: PRIMARY_COLOR }}>MT</span>
              </div>
              <span className="font-bold text-white">Millennium Training</span>
            </div>
            <p className="text-sm text-gray-200">
              Transforming professional excellence through quality training and consulting services across Rwanda and
              the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/#services" className="hover:opacity-100 transition-opacity">
                  Corporate Training
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:opacity-100 transition-opacity">
                  Consulting
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:opacity-100 transition-opacity">
                  Workshops
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:opacity-100 transition-opacity">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition-opacity">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#" className="hover:opacity-100 transition-opacity">
                  Testimonials
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-bold mb-4">Contact & Support</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div>
                <p className="font-medium mb-1">For Enquiries & Help:</p>
                <p>📞 0796 691 454</p>
                <p>✉️ milleniumtrainers@gmail.com</p>
              </div>
              <div>
                <p className="font-medium mb-1">Payment Support:</p>
                <p>Mobile Money: 0796 691 454</p>
                <p className="text-xs text-gray-300">*182*1*1*0796691454#</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-200 mb-4">
            <div>© 2025 Millennium Training Professionals. All rights reserved.</div>
            <div className="md:text-center space-x-4">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
            </div>
            <div className="md:text-right">
              <p>Kigali, Rwanda • +250 767 691 454</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
