const Hero = () => {
  return (
    <section className="w-full bg-[#160a22] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">

        <div
          className="
            relative min-h-[520px] sm:min-h-[560px]
            overflow-hidden rounded-3xl
            bg-cover bg-center
            px-6 sm:px-10
            py-16 sm:py-20
          "
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBX-leRVKw1IobuGlTkEIGIQfJG1Y-e4Qpw0ImYdTwuvYaB20oL9TWabh3UoKTJ0z-oB3GubbDYXrKnkDjVkHhgwiqFPiXwxNlE0w8vSco-XMBW4rSClbrMNQsPQuqJf0dFPiAk7r5zLHMfKRv6y2pl3O9Sq7gKCvTv0OT8cd7oI23q5TaufK1KsdPTa_0HlM1ycDklN6BjdCskMBgpQ0ii727XzS7qiwYuJPhO338vY7D4P_rBUXvYvrgjVtFGX6e4YcErXm2G-C45")`,
          }}
        >
          {/* Purple glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.35),_transparent_60%)]"></div>

          {/* Content */}
          <div className="relative max-w-3xl">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold
                text-white
                leading-tight
              "
            >
              Digital Experiences <br />
              <span className="text-gray-300">That Matter</span>
            </h1>

            <p
              className="
                mt-6
                text-sm sm:text-base md:text-lg
                text-gray-300
                max-w-xl
              "
            >
              We combine strategy, design, and technology to build
              high-performance websites and apps for brands ready
              to scale.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-medium">
                Start Project
              </button>

              <button className="bg-white/10 hover:bg-white/20 transition text-white px-6 py-3 rounded-lg font-medium backdrop-blur">
                View Work
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
