"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

const testimonials = [
  {
    name: "James Mutua",
    role: "HR Director, Tech Solutions Ltd",
    content: "Millennium Training transformed our management team's approach to leadership. The practical tools and insights have directly improved our team's performance and engagement.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Sarah Mbatha",
    role: "Managing Partner, Legal Consulting Group",
    content: "The customized consulting services provided by Millennium helped us restructure our business strategy. Their expertise in governance and professional development is unmatched.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David Kamanzi",
    role: "CEO, Manufacturing Enterprise",
    content: "We've trained over 100 employees with Millennium. The quality of facilitation and relevance of content to our industry needs is exceptional.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Catherine Mwangi",
    role: "Financial Services Manager",
    content: "The project management and strategic marketing workshops were eye-opening. Our team now approaches projects with renewed confidence and clarity.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Joseph Okonkwo",
    role: "Senior Executive, Regional Bank",
    content: "Millennium's executive coaching program elevated my leadership capabilities. I've seen measurable improvements in team dynamics and organizational outcomes.",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Amelia Foster",
    role: "Founder, Business Development Consulting",
    content: "The training programs are professionally designed and flexibly delivered. Whether in-person or virtual, Millennium ensures excellent engagement and results.",
    rating: 5,
    initials: "AF",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-20 bg-white font-sans">
      {/* Font Loading */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-display uppercase tracking-tight" style={{ color: PRIMARY_COLOR }}>
            What Our Clients Say
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto font-medium">
            Hear from professionals who have transformed their excellence through our services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden mb-12">
          <div ref={scrollRef} className="flex gap-4 overflow-x-hidden cursor-pointer py-4" onClick={() => setIsPaused(!isPaused)}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderColor: '#f3f4f6' }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-current" style={{ color: ACCENT_COLOR }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs text-gray-600 mb-5 leading-relaxed italic font-medium">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[10px] text-white shadow-inner" style={{ backgroundColor: PRIMARY_COLOR }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold font-display uppercase tracking-wide" style={{ color: PRIMARY_COLOR }}>{testimonial.name}</p>
                    <p className="text-[10px] text-gray-400 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}