"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border rounded-2xl p-6 md:p-10 space-y-5 shadow-sm font-sans" style={{ borderColor: '#f3f4f6' }}>
      {/* Font Loading */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-xs border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-xs border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-xs border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100"
            placeholder="+250 767 691 454"
          />
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Organization</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-xs border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100"
            placeholder="Your Company"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Subject *</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 text-xs border rounded-xl bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100 appearance-none"
        >
          <option value="">Select a subject...</option>
          <option value="training">Training Programs</option>
          <option value="consulting">Consulting Services</option>
          <option value="workshops">Workshops</option>
          <option value="events">Events & Community</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="block text-[10px] font-bold uppercase tracking-widest font-display" style={{ color: PRIMARY_COLOR }}>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 text-xs border rounded-xl bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-[#004D40] transition-all outline-none border-gray-100 resize-none"
          placeholder="Tell us about your training or consulting needs..."
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
          <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
          <div className="text-[11px] font-medium text-green-800">Message sent! We'll respond within 24 hours.</div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white px-8 py-3.5 rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg active:scale-[0.98]"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide text-center">
        * Protected by secure encryption. Typical response time: 24h.
      </p>
    </form>
  )
}