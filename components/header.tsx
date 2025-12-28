"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

  const handleNavClick = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="border-b border-white/20 backdrop-blur-md sticky top-0 z-50 shadow-sm" style={{ backgroundColor: `${PRIMARY_COLOR}E6` }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/LogoMTPC.png"
            alt="Millennium Training Professionals Logo"
            width={120}
            height={120}
            className="rounded-lg object-cover"
            priority
          />
          <span className="font-bold text-lg text-foreground hidden sm:inline">Millennium Training</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {/* Dropdown: Company */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/50`}>
              Company
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 1 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-48 bg-white/70 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/company/about"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm`}
              >
                Who We Are
              </Link>
              <Link
                href="/company/core-values"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Our Core Values
              </Link>
              <Link
                href="/company/team"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Our People
              </Link>
              <Link
                href="/company/code-of-conduct"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Code of Conduct
              </Link>
              <Link
                href="/company/careers"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Dropdown: Training & Workshops */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/50`}>
              Training & Workshops
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 2 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-56 bg-white/70 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/training/project-management"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm`}
              >
                Project Management
              </Link>
              <Link
                href="/training/strategic-marketing"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Strategic Marketing
              </Link>
              <Link
                href="/training/business-health"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Business in Health Science
              </Link>
              <Link
                href="/training/business-engineering"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Business in Engineering
              </Link>
              <Link
                href="/training/innovation"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Creativity & Innovation
              </Link>
              <Link
                href="/training/employability"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Transition Employability
              </Link>
              <Link
                href="/training/career-creation"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Jobs & Career Creation
              </Link>
            </div>
          </div>

          {/* Dropdown: Consultation */}
          <div className="relative group">
            {/* Text hover color uses the deep green */}
            <button className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/50`}>
              Consultation
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            {/* Desktop Dropdown Menu 3 (70% Transparent) */}
            <div className="absolute left-0 mt-0 w-64 bg-white/70 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/consultation/business-services"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm`}
              >
                Business Services Consulting
              </Link>
              <Link
                href="/consultation/sales-marketing"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Sales & Marketing
              </Link>
              <Link
                href="/consultation/strategy"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Strategy Consulting
              </Link>
              <Link
                href="/consultation/financial"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Financial Services
              </Link>
              <Link
                href="/consultation/governance"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Corporate Governance & Leadership
              </Link>
              <Link
                href="/consultation/project-planning"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Project Planning & Management
              </Link>
              <Link
                href="/consultation/monitoring"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Monitoring & Evaluation
              </Link>
              <Link
                href="/consultation/employment-coaching"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Employment Coaching
              </Link>
              <Link
                href="/consultation/recruitment"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Recruitment Consulting
              </Link>
            </div>
          </div>

          {/* Dropdown: Socio-Community Events */}
          <div className="relative group">
            <button className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/50`}>
              Socio-Community Events
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white/70 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/events/family-counselling"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm`}
              >
                Family Relationship Counselling
              </Link>
              <Link
                href="/events/wealth-management"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Family Wealth Management
              </Link>
              <Link
                href="/events/community-awareness"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Family & Extended Community Awareness
              </Link>
              <Link
                href="/events/shared-development"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Community Shared Development
              </Link>
              <Link
                href="/events/happy-hours"
                className={`block px-4 py-3 text-foreground ${LIGHT_HOVER_BG} hover:text-[${PRIMARY_COLOR}] transition-colors text-sm border-t border-border`}
              >
                Family & Community Happy Hours
              </Link>
            </div>
          </div>

          {/* General Links - Text hover color uses the deep green */}
          <a href="/#services" className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2`}>
            Services
          </a>
          <a href="/#about" className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2`}>
            About
          </a>
          <Link href="/contact" className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2`}>
            Contact
          </Link>
          <Link href="/admin/login" className={`text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors font-medium px-3 py-2`}>
            Admin
          </Link>
          {/* Enrollment Button (Using deep green for button background) */}
          <button className={`${BUTTON_BG_COLOR} ${BUTTON_HOVER_BG} text-white backdrop-blur-sm px-6 py-2 rounded-lg transition-colors font-semibold ml-2 shadow-md`}>
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Container (50% Transparent) */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/50 backdrop-blur-md border-b border-border md:hidden max-h-96 overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {/* Mobile Dropdown: Company */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("company")}
                  className={`w-full text-left text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium flex justify-between items-center`}
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
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/company/core-values"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Our Core Values
                    </Link>
                    <Link
                      href="/company/team"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Our People
                    </Link>
                    <Link
                      href="/company/code-of-conduct"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Code of Conduct
                    </Link>
                    <Link
                      href="/company/careers"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
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
                  className={`w-full text-left text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium flex justify-between items-center`}
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
                    <Link
                      href="/training/project-management"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Project Management
                    </Link>
                    <Link
                      href="/training/strategic-marketing"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Strategic Marketing
                    </Link>
                    <Link
                      href="/training/business-health"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Business in Health Science
                    </Link>
                    <Link
                      href="/training/business-engineering"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Business in Engineering
                    </Link>
                    <Link
                      href="/training/innovation"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Creativity & Innovation
                    </Link>
                    <Link
                      href="/training/employability"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Transition Employability
                    </Link>
                    <Link
                      href="/training/career-creation"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Jobs & Career Creation
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Consultation */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("consultation")}
                  className={`w-full text-left text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium flex justify-between items-center`}
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
                    <Link
                      href="/consultation/business-services"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Business Services
                    </Link>
                    <Link
                      href="/consultation/sales-marketing"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Sales & Marketing
                    </Link>
                    <Link
                      href="/consultation/strategy"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Strategy Consulting
                    </Link>
                    <Link
                      href="/consultation/financial"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Financial Services
                    </Link>
                    <Link
                      href="/consultation/governance"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Corporate Governance
                    </Link>
                    <Link
                      href="/consultation/project-planning"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Project Planning
                    </Link>
                    <Link
                      href="/consultation/monitoring"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Monitoring & Evaluation
                    </Link>
                    <Link
                      href="/consultation/employment-coaching"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Employment Coaching
                    </Link>
                    <Link
                      href="/consultation/recruitment"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                      >
                      Recruitment Consulting
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Socio-Community Events */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown("events")}
                  className={`w-full text-left text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium flex justify-between items-center`}
                >
                  Socio-Community Events
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdown === "events" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "events" && (
                  <div className="bg-white/30 backdrop-blur-sm rounded-md pl-4 space-y-1">
                    <Link
                      href="/events/family-counselling"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Family Relationship Counselling
                    </Link>
                    <Link
                      href="/events/wealth-management"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Family Wealth Management
                    </Link>
                    <Link
                      href="/events/community-awareness"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Family & Extended Community Awareness
                    </Link>
                    <Link
                      href="/events/shared-development"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Community Shared Development
                    </Link>
                    <Link
                      href="/events/happy-hours"
                      onClick={handleNavClick}
                      className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 text-sm`}
                    >
                      Family & Community Happy Hours
                    </Link>
                  </div>
                )}
              </div>

              {/* General links */}
              <a
                href="/#services"
                onClick={handleNavClick}
                className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium`}
              >
                Services
              </a>
              <a
                href="/#about"
                onClick={handleNavClick}
                className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium`}
              >
                About
              </a>
              <Link
                href="/contact"
                onClick={handleNavClick}
                className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium`}
              >
                Contact
              </Link>
              <Link
                href="/admin/login"
                onClick={handleNavClick}
                className={`block text-foreground hover:text-[${PRIMARY_COLOR}] transition-colors py-2 font-medium`}
              >
                Admin
              </Link>
              {/* Enrollment Button - Mobile (Transparent, using new green) */}
              <button className={`${BUTTON_BG_COLOR} ${BUTTON_HOVER_BG} text-white backdrop-blur-sm px-6 py-2 rounded-lg transition-colors font-medium mt-4 shadow-md`}>
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}