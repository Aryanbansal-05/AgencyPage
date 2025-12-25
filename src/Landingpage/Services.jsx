const services = [
  {
    title: "Web Design",
    description:
      "UI/UX, Prototyping, and Design Systems that scale seamlessly with your business needs.",
    icon: "🖥️",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile apps built with React Native and Swift for peak performance.",
    icon: "📱",
  },
  {
    title: "Branding",
    description:
      "Identity design, logo creation, and voice development for modern brands standing out.",
    icon: "✨",
  },
  {
    title: "Growth Strategy",
    description:
      "SEO, content strategy, and analytics to ensure your digital product reaches the right audience.",
    icon: "🚀",
  },
]

const Services = () => {
  return (
    <section className="w-full px-8 py-24 bg-[#160a22]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-purple-500 text-sm font-semibold tracking-wider">
            OUR EXPERTISE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Services <br /> tailored for growth
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
            We don’t just build websites; we build business solutions.
            From initial concept to final deployment, we handle every
            step of the digital journey.
          </p>

          <button className="mt-8 text-white font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all services <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 text-xl">
                {service.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
