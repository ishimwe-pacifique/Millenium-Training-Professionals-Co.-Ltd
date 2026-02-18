"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight, X } from "lucide-react"

const PRIMARY_COLOR = "#004D40";
const ACCENT_COLOR = "#66BB6A";

const blogPosts = [
  {
    id: 1,
    title: "Building High-Performance Teams in Rwanda's Growing Economy",
    excerpt: "Discover proven strategies for developing cohesive, productive teams that drive organizational success in East Africa's dynamic business landscape.",
    image: "/professional-team-meeting-in-rwanda-office-confere.jpg",
    category: "Leadership",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Millennium Training Team",
    content: "Rwanda's economy is experiencing unprecedented growth, creating new opportunities and challenges for organizations across all sectors. In this dynamic environment, high-performance teams have become the cornerstone of organizational success.\n\nBuilding effective teams requires more than just assembling talented individuals. It demands a strategic approach that considers cultural context, clear communication channels, and shared objectives. Successful teams in Rwanda's business landscape demonstrate strong collaboration, mutual accountability, and adaptability to rapid market changes.\n\nOur research shows that organizations investing in team development see 40% higher productivity and 35% better employee retention. Key strategies include establishing psychological safety, promoting diverse perspectives, and creating systems for continuous feedback and improvement.\n\nAt Millennium Training Professionals, we've developed comprehensive team-building programs specifically designed for East African organizations. Our approach combines international best practices with deep understanding of local business culture, ensuring sustainable results that drive organizational excellence."
  },
  {
    id: 2,
    title: "The Future of Corporate Training: Digital Transformation",
    excerpt: "How modern organizations are leveraging technology to enhance employee development and create lasting competitive advantages.",
    image: "/Thambnail.png",
    category: "Innovation",
    date: "2024-01-10",
    readTime: "7 min read",
    author: "Millennium Training Team",
    content: "The corporate training landscape is undergoing a fundamental transformation. Digital technologies are revolutionizing how organizations develop their workforce, creating unprecedented opportunities for personalized, scalable, and measurable learning experiences.\n\nModern learning platforms leverage artificial intelligence, data analytics, and interactive content to deliver training that adapts to individual learning styles and pace. This shift from one-size-fits-all approaches to personalized learning journeys has proven to increase knowledge retention by up to 60% and accelerate skill acquisition significantly.\n\nHowever, successful digital transformation in training isn't just about technology adoption. It requires strategic planning, change management, and a clear understanding of organizational learning objectives. Companies must balance digital innovation with human-centered design to create engaging, effective learning experiences.\n\nOur digital training solutions combine cutting-edge technology with proven instructional design principles. We help organizations navigate the digital transformation journey, ensuring technology enhances rather than replaces the human elements that make training truly transformative."
  },
  {
    id: 3,
    title: "Effective Communication Strategies for Modern Workplaces",
    excerpt: "Master the art of professional communication to boost collaboration, reduce conflicts, and enhance organizational productivity.",
    image: "/professional-team-meeting-in-rwanda-office-confere.jpg",
    category: "Communication",
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Millennium Training Team",
    content: "Effective communication stands as the foundation of every successful organization. In today's complex business environment, the ability to communicate clearly, persuasively, and empathetically has become a critical competitive advantage.\n\nPoor communication costs organizations significantly—through misunderstandings, conflicts, reduced productivity, and missed opportunities. Conversely, companies with strong communication cultures report 47% higher returns to shareholders and significantly better employee engagement scores.\n\nKey communication competencies include active listening, emotional intelligence, clear articulation of ideas, and the ability to adapt messaging to different audiences and contexts. In multicultural environments like Rwanda's business landscape, cross-cultural communication skills become even more crucial.\n\nOur communication training programs focus on practical, immediately applicable skills. Participants learn to navigate difficult conversations, deliver compelling presentations, write persuasively, and build relationships that drive organizational success. We emphasize real-world application through role-playing, case studies, and personalized feedback."
  },
  {
    id: 4,
    title: "Leadership Development: From Manager to Strategic Leader",
    excerpt: "Transform your leadership approach with proven methodologies that elevate management skills to strategic organizational impact.",
    image: "/Thambnail.png",
    category: "Leadership",
    date: "2023-12-28",
    readTime: "8 min read",
    author: "Millennium Training Team",
    content: "The transition from operational manager to strategic leader represents one of the most challenging yet rewarding career progressions. While managers focus on executing plans and optimizing processes, strategic leaders shape organizational direction, culture, and long-term success.\n\nStrategic leadership requires a fundamental shift in mindset—from doing to enabling, from controlling to empowering, from short-term results to sustainable impact. Effective strategic leaders demonstrate vision, inspire commitment, make difficult decisions with incomplete information, and create environments where innovation thrives.\n\nResearch indicates that organizations with strong strategic leadership outperform competitors by 3-5 times in revenue growth and profitability. These leaders excel at connecting daily operations to long-term strategy, developing future leaders, and navigating complexity with confidence.\n\nOur leadership development programs are designed to accelerate this transformation. Through executive coaching, strategic simulations, and peer learning, we help managers develop the capabilities, confidence, and perspective needed to lead at the highest organizational levels and drive sustainable competitive advantage."
  },
  {
    id: 5,
    title: "Project Management Excellence in African Markets",
    excerpt: "Navigate unique challenges and opportunities in project delivery across Rwanda and East Africa with expert insights.",
    image: "/professional-team-meeting-in-rwanda-office-confere.jpg",
    category: "Project Management",
    date: "2023-12-20",
    readTime: "6 min read",
    author: "Millennium Training Team",
    content: "Project management in African markets presents unique opportunities and challenges that require both global expertise and local insight. Rwanda's ambitious development agenda has created unprecedented demand for skilled project managers who can deliver complex initiatives successfully.\n\nSuccessful project delivery in this context requires understanding local stakeholder dynamics, resource constraints, regulatory environments, and cultural considerations. Project managers must balance international standards with practical adaptation to local realities.\n\nKey success factors include robust stakeholder engagement, realistic planning that accounts for local conditions, proactive risk management, and flexible execution strategies. Organizations that invest in project management capability see dramatic improvements in on-time delivery, budget adherence, and stakeholder satisfaction.\n\nOur project management training combines PMI standards with practical insights from hundreds of successful projects across East Africa. We equip professionals with frameworks, tools, and real-world strategies to deliver projects that create lasting value for organizations and communities."
  },
  {
    id: 6,
    title: "Building Organizational Culture That Drives Results",
    excerpt: "Learn how to cultivate a workplace culture that attracts top talent, boosts engagement, and delivers sustainable growth.",
    image: "/Thambnail.png",
    category: "Culture",
    date: "2023-12-15",
    readTime: "5 min read",
    author: "Millennium Training Team",
    content: "Organizational culture—the shared values, beliefs, and behaviors that shape how work gets done—is the invisible force that determines organizational success or failure. Strong cultures attract top talent, drive engagement, and create sustainable competitive advantages.\n\nBuilding a high-performance culture requires intentional effort. It starts with clearly defining core values, but success depends on consistent leadership behavior, aligned systems and processes, and ongoing reinforcement through recognition and accountability.\n\nResearch shows that companies with strong cultures outperform competitors by 200% in stock returns and experience significantly lower turnover. Employees in strong-culture organizations report higher job satisfaction, greater commitment, and stronger alignment with organizational goals.\n\nOur culture transformation programs help organizations assess their current culture, define their desired culture, and implement practical strategies to close the gap. We work with leadership teams to embed values into daily operations, create accountability systems, and build cultures where both people and organizations thrive."
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Header />

      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#004D40]/5 -skew-x-12 transform origin-top translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight leading-none" style={{ color: PRIMARY_COLOR }}>
              Insights & <span style={{ color: ACCENT_COLOR }}>Expertise</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Discover actionable insights, proven strategies, and expert guidance to transform your organization's performance and unlock your team's full potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gray-50/50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: ACCENT_COLOR }} />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} style={{ color: ACCENT_COLOR }} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-extrabold font-display uppercase tracking-tight leading-tight line-clamp-2" style={{ color: PRIMARY_COLOR }}>
                    {post.title}
                  </h2>

                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="w-full bg-[#004D40] hover:bg-[#004D40]/90 text-white font-bold uppercase tracking-widest text-[10px] py-3 rounded-xl transition-all shadow-lg shadow-[#004D40]/20 active:scale-95 flex items-center justify-center gap-2"
                    >
                      View Article
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-80 flex-shrink-0">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-all shadow-xl" style={{ color: PRIMARY_COLOR }}
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}>
                  {selectedPost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight leading-tight text-white">
                  {selectedPost.title}
                </h1>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <Calendar size={14} style={{ color: ACCENT_COLOR }} />
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <Clock size={14} style={{ color: ACCENT_COLOR }} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="space-y-5">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                  By {selectedPost.author}
                </p>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-gray-50"
                  style={{ color: PRIMARY_COLOR }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
