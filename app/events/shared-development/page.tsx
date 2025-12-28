import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Users, Zap, Target } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function SharedDevelopmentPage() {
  const initiatives = [
    { icon: Building, title: "Infrastructure Projects", description: "Community-led infrastructure development initiatives" },
    { icon: Users, title: "Skill Sharing", description: "Knowledge and skill exchange programs within communities" },
    { icon: Zap, title: "Innovation Hubs", description: "Community innovation and entrepreneurship centers" },
    { icon: Target, title: "Sustainable Development", description: "Environmental and economic sustainability projects" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: PRIMARY_COLOR }}>
            Community Shared Development
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Collaborative community development programs that bring people together for shared progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <Icon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}