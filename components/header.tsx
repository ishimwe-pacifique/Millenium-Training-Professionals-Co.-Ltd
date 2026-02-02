"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import EnrollmentForm from './EnrollmentForm'

// Deep Forest Green color hex code: #004D40 (Used as the primary color)
const PRIMARY_COLOR = "#004D40";
// Bright accent color for hover states (e.g., a lighter green that complements the primary)
const LIGHT_ACCENT_COLOR = "#38761D"; 
const LIGHT_HOVER_BG = "hover:bg-[#004D40]/10"; // Light hover background using the primary color
const BUTTON_BG_COLOR = "bg-[#004D40]/70"; // Semi-transparent button background
const BUTTON_HOVER_BG = "hover:bg-[#004D40]"; // Solid button hover background

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="border-b border-white/20 backdrop-blur-md sticky top-0 z-50 shadow-sm" style={{ backgroundColor: `${PRIMARY_COLOR}E6` }}>
      {/* Font Loading: Montserrat for headers and Inter for clean body text */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-display">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/LogoMTPC.png"
            alt="Millennium Training Professionals Logo"
            width={120}
            height={120}
            className="rounded-lg object-cover"
            priority
          />
          <span className="font-extrabold text-lg text-white hidden sm:inline tracking-tighter uppercase">Millennium Training</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {/* Dropdown: Company */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-white hover:text-white/80 transition-colors font-bold px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/10 text-[10px] uppercase tracking-widest`}>
              Company
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 1 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-48 bg-white/90 backdrop-blur-md border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/company/about"
                className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider`}
              >
                Who We Are
              </Link>
              <Link
                href="/company/core-values"
                className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}
              >
                Our Core Values
              </Link>
              <Link
                href="/company/team"
                className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}
              >
                Our People
              </Link>
              <Link
                href="/company/code-of-conduct"
                className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}
              >
                Code of Conduct
              </Link>
              <Link
                href="/company/careers"
                className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Dropdown: Training & Workshops */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-white hover:text-white/80 transition-colors font-bold px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/10 text-[10px] uppercase tracking-widest`}>
              Training & Workshops
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 2 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-56 bg-white/90 backdrop-blur-md border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/training/project-management" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider`}>Project Management</Link>
              <Link href="/training/strategic-marketing" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Strategic Marketing</Link>
              <Link href="/training/business-health" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Business in Health Science</Link>
              <Link href="/training/business-engineering" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Business in Engineering</Link>
              <Link href="/training/innovation" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Creativity & Innovation</Link>
              <Link href="/training/employability" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Transition Employability</Link>
              <Link href="/training/career-creation" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Jobs & Career Creation</Link>
            </div>
          </div>

          {/* Dropdown: Consultation */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-white hover:text-white/80 transition-colors font-bold px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/10 text-[10px] uppercase tracking-widest`}>
              Consultation
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 3 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-64 bg-white/90 backdrop-blur-md border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/consultation/business-services" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider`}>Business Services Consulting</Link>
              <Link href="/consultation/sales-marketing" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Sales & Marketing</Link>
              <Link href="/consultation/strategy" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Strategy Consulting</Link>
              <Link href="/consultation/financial" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Financial Services</Link>
              <Link href="/consultation/governance" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Corporate Governance & Leadership</Link>
              <Link href="/consultation/project-planning" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Project Planning & Management</Link>
              <Link href="/consultation/monitoring" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Monitoring & Evaluation</Link>
              <Link href="/consultation/employment-coaching" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Employment Coaching</Link>
              <Link href="/consultation/recruitment" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Recruitment Consulting</Link>
            </div>
          </div>

          {/* Dropdown: Socio-Community Events */}
          <div className="relative group">
            <button className={`text-white hover:text-white/80 transition-colors font-bold px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/10 text-[10px] uppercase tracking-widest`}>
              Socio-Community Events
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white/90 backdrop-blur-md border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/events/family-counselling" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider`}>Family Relationship Counselling</Link>
              <Link href="/events/wealth-management" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Family Wealth Management</Link>
              <Link href="/events/community-awareness" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Family & Community Awareness</Link>
              <Link href="/events/shared-development" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Community Shared Development</Link>
              <Link href="/events/happy-hours" className={`block px-4 py-3 text-[#004D40] ${LIGHT_HOVER_BG} font-bold transition-colors text-xs uppercase tracking-wider border-t border-gray-100`}>Family & Community Happy Hours</Link>
            </div>
          </div>

          {/* <a href="/#services" className="text-white hover:text-white/80 transition-colors font-semibold px-3 py-2 text-sm uppercase tracking-wide">Services</a> */}
          <a href="/#about" className="text-white hover:text-white/80 transition-colors font-bold px-3 py-2 text-[10px] uppercase tracking-widest">About</a>
          <Link href="/contact" className="text-white hover:text-white/80 transition-colors font-bold px-3 py-2 text-[10px] uppercase tracking-widest">Contact</Link>
          {/* <Link href="/admin/login" className="text-white hover:text-white/80 transition-colors font-semibold px-3 py-2 text-sm uppercase tracking-wide">Admin</Link> */}
          
          {/* Enrollment Button (Using deep green for button background) */}
          <button className={`${BUTTON_BG_COLOR} ${BUTTON_HOVER_BG} text-white backdrop-blur-sm px-6 py-2 rounded-lg transition-colors font-extrabold text-[10px] uppercase tracking-[0.15em] ml-2 shadow-md`} onClick={() => setIsEnrollmentOpen(true)}>
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Container (50% Transparent) */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border md:hidden max-h-96 overflow-y-auto font-display shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              {/* Mobile Dropdown: Company */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("company")}
                  className={`w-full text-left text-[#004D40] py-3 font-extrabold flex justify-between items-center text-sm uppercase tracking-widest border-b border-gray-100`}
                >
                  Company
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "company" && (
                  /* Mobile Dropdown Submenus (30% Transparent, items hover deep green) */
                  <div className="bg-white/30 backdrop-blur-sm rounded-md pl-4 space-y-1">
                    <Link
                      href="/company/about"
                      onClick={handleNavClick}
                      className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/company/core-values"
                      onClick={handleNavClick}
                      className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}
                    >
                      Our Core Values
                    </Link>
                    <Link
                      href="/company/team"
                      onClick={handleNavClick}
                      className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}
                    >
                      Our People
                    </Link>
                    <Link
                      href="/company/code-of-conduct"
                      onClick={handleNavClick}
                      className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}
                    >
                      Code of Conduct
                    </Link>
                    <Link
                      href="/company/careers"
                      onClick={handleNavClick}
                      className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Training & Workshops */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("training")}
                  className={`w-full text-left text-[#004D40] py-3 font-extrabold flex justify-between items-center text-sm uppercase tracking-widest border-b border-gray-100`}
                >
                  Training & Workshops
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === "training" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "training" && (
                  /* Mobile Dropdown Submenus (30% Transparent, items hover deep green) */
                  <div className="bg-white/30 backdrop-blur-sm rounded-md pl-4 space-y-1">
                    <Link href="/training/project-management" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Project Management</Link>
                    <Link href="/training/strategic-marketing" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Strategic Marketing</Link>
                    <Link href="/training/business-health" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Business in Health Science</Link>
                    <Link href="/training/business-engineering" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Business in Engineering</Link>
                    <Link href="/training/innovation" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Creativity & Innovation</Link>
                    <Link href="/training/employability" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Transition Employability</Link>
                    <Link href="/training/career-creation" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Jobs & Career Creation</Link>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Consultation */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("consultation")}
                  className={`w-full text-left text-[#004D40] py-3 font-extrabold flex justify-between items-center text-sm uppercase tracking-widest border-b border-gray-100`}
                >
                  Consultation
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === "consultation" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "consultation" && (
                  /* Mobile Dropdown Submenus (30% Transparent, items hover deep green) */
                  <div className="bg-white/30 backdrop-blur-sm rounded-md pl-4 space-y-1">
                    <Link href="/consultation/business-services" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Business Services</Link>
                    <Link href="/consultation/sales-marketing" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Sales & Marketing</Link>
                    <Link href="/consultation/strategy" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Strategy Consulting</Link>
                    <Link href="/consultation/financial" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Financial Services</Link>
                    <Link href="/consultation/governance" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Corporate Governance</Link>
                    <Link href="/consultation/project-planning" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Project Planning</Link>
                    <Link href="/consultation/monitoring" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Monitoring & Evaluation</Link>
                    <Link href="/consultation/employment-coaching" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Employment Coaching</Link>
                    <Link href="/consultation/recruitment" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Recruitment Consulting</Link>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Socio-Community Events */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("events")}
                  className={`w-full text-left text-[#004D40] py-3 font-extrabold flex justify-between items-center text-sm uppercase tracking-widest border-b border-gray-100`}
                >
                  Socio-Community Events
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === "events" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "events" && (
                  <div className="bg-white/30 backdrop-blur-sm rounded-md pl-4 space-y-1">
                    <Link href="/events/family-counselling" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Family Relationship Counselling</Link>
                    <Link href="/events/wealth-management" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Family Wealth Management</Link>
                    <Link href="/events/community-awareness" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Family & Community Awareness</Link>
                    <Link href="/events/shared-development" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Community Shared Development</Link>
                    <Link href="/events/happy-hours" onClick={handleNavClick} className={`block text-[#004D40] font-bold text-xs uppercase tracking-wider py-2`}>Family & Community Happy Hours</Link>
                  </div>
                )}
              </div>

              {/* General links */}
              {/* <a href="/#services" onClick={handleNavClick} className={`block text-[#004D40] py-3 font-extrabold text-sm uppercase tracking-widest border-b border-gray-100`}>Services</a> */}
              <a href="/#about" onClick={handleNavClick} className={`block text-[#004D40] py-3 font-extrabold text-sm uppercase tracking-widest border-b border-gray-100`}>About</a>
              <Link href="/contact" onClick={handleNavClick} className={`block text-[#004D40] py-3 font-extrabold text-sm uppercase tracking-widest border-b border-gray-100`}>Contact</Link>
              
              {/* Enrollment Button - Mobile (Transparent, using new green) */}
              <button className={`${BUTTON_BG_COLOR} ${BUTTON_HOVER_BG} w-full text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] mt-6 shadow-xl`} onClick={() => setIsEnrollmentOpen(true)}>
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <EnrollmentForm 
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </header>
  )
}