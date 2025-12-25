const testimonials = [
  {
    quote:
      "They transformed our outdated platform into a cutting-edge digital experience. Our conversion rates doubled within the first month of launch.",
    name: "James Wilson",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "The attention to detail in the UI/UX design was phenomenal. The team truly understood our brand vision and executed it flawlessly.",
    name: "Sarah Chen",
    role: "Director, Creative Co.",
    avatar: "https://i.pravatar.cc/100?img=32",
    featured: true,
  },
  {
    quote:
      "Professional, responsive, and incredibly talented. The app they built for us has received glowing reviews from our user base.",
    name: "Marcus Johnson",
    role: "Product Lead, Appify",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
]

const Testimonials = () => {
  return (
  <section className="relative w-full px-8 py-28 bg-[#0b0614] overflow-hidden">

  <div className="pointer-events-none absolute inset-0 
    bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18),_rgba(11,6,20,0.95)_70%)]">
  </div>

  <div className="relative max-w-7xl mx-auto">
    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
      Trusted by Industry Leaders
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 backdrop-blur border border-white/10
                ${item.featured
                  ? "bg-white/10 scale-105"
                  : "bg-white/5"}
              `}
            >
              <div className="text-purple-500 text-4xl mb-4">!</div>

              <p className="text-gray-300 leading-relaxed">
                {item.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500"
                />
                <div>
                  <p className="text-white font-semibold">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials;
