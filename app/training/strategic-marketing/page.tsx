import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, TrendingUp, Target, BarChart3 } from "lucide-react"

const PRIMARY_COLOR = "#004D40";

export default function StrategicMarketingPage() {
  const features = [
    "Market Research & Analysis",
    "Brand Strategy Development", 
    "Digital Marketing Campaigns",
    "Customer Segmentation",
    "Marketing ROI Measurement",
    "Competitive Analysis"
  ];

  const benefits = [
    { icon: TrendingUp, title: "Market Growth", description: "Drive sustainable market expansion and revenue growth" },
    { icon: Target, title: "Brand Recognition", description: "Build strong brand identity and market positioning" },
    { icon: BarChart3, title: "Data-Driven Decisions", description: "Make informed marketing decisions based on analytics" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
                Strategic Marketing Excellence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Master modern marketing strategies and build powerful brand presence in competitive markets. 
                Learn data-driven marketing techniques and customer engagement strategies.
              </p>
              <button className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold" style={{ backgroundColor: PRIMARY_COLOR }}>
                Enroll Now
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden" style={{ backgroundColor: `${PRIMARY_COLOR}20` }}>
              <img
                src="/images/strategic-marketing-training.jpg"
                alt="Strategic Marketing Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#e5e7eb' }}>
                <CheckCircle className="w-8 h-8 mb-4" style={{ color: PRIMARY_COLOR }} />
                <h3 className="font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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