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
      // Simulate form submission - in production, connect to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-8 space-y-6" style={{ borderColor: '#e5e7eb' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
            style={{ borderColor: '#e5e7eb' }}
            onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
            onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
            style={{ borderColor: '#e5e7eb' }}
            onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
            onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
            style={{ borderColor: '#e5e7eb' }}
            onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
            onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
            placeholder="+250 767 691 454"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Company/Organization</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
            style={{ borderColor: '#e5e7eb' }}
            onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
            onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
            placeholder="Your Company"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Subject *</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 focus:outline-none transition-colors"
          style={{ borderColor: '#e5e7eb' }}
          onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
          onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
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
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: PRIMARY_COLOR }}>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
          style={{ borderColor: '#e5e7eb' }}
          onFocus={(e) => { e.target.style.borderColor = PRIMARY_COLOR; e.target.style.boxShadow = `0 0 0 1px ${PRIMARY_COLOR}` }}
          onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
          placeholder="Tell us about your training or consulting needs..."
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-green-900">Message sent successfully!</p>
            <p className="text-sm text-green-800">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-red-900">Error sending message</p>
            <p className="text-sm text-red-800">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white px-8 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-gray-500">* Required fields. We'll respond to your inquiry within 24 hours.</p>
    </form>
  )
}
