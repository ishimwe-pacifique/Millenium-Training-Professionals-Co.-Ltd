"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

const testimonials = [
  {
    name: "James Mutua",
    role: "HR Director, Tech Solutions Ltd",
    content:
      "Millennium Training transformed our management team's approach to leadership. The practical tools and insights have directly improved our team's performance and engagement.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Sarah Mbatha",
    role: "Managing Partner, Legal Consulting Group",
    content:
      "The customized consulting services provided by Millennium helped us restructure our business strategy. Their expertise in governance and professional development is unmatched.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David Kamanzi",
    role: "CEO, Manufacturing Enterprise",
    content:
      "We've trained over 100 employees with Millennium. The quality of facilitation and relevance of content to our industry needs is exceptional.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Catherine Mwangi",
    role: "Financial Services Manager",
    content:
      "The project management and strategic marketing workshops were eye-opening. Our team now approaches projects with renewed confidence and clarity.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Joseph Okonkwo",
    role: "Senior Executive, Regional Bank",
    content:
      "Millennium's executive coaching program elevated my leadership capabilities. I've seen measurable improvements in team dynamics and organizational outcomes.",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Amelia Foster",
    role: "Founder, Business Development Consulting",
    content:
      "The training programs are professionally designed and flexibly delivered. Whether in-person or virtual, Millennium ensures excellent engagement and results.",
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
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from professionals and organizations who have transformed their excellence through our training and
            consulting services
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden mb-16">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden cursor-pointer" onClick={() => setIsPaused(!isPaused)}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#e5e7eb' }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" style={{ color: ACCENT_COLOR }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: PRIMARY_COLOR }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: PRIMARY_COLOR }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-2xl border p-12" style={{ backgroundColor: `${PRIMARY_COLOR}0D`, borderColor: '#e5e7eb' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>500+</div>
              <p className="text-gray-600">Professionals Trained</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>150+</div>
              <p className="text-gray-600">Corporate Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>15+</div>
              <p className="text-gray-600">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
