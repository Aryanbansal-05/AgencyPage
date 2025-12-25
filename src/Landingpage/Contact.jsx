const Contact = () => {
  return (
    <section className="relative w-full px-8 py-28 bg-[#0b0614] overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 
       bg-[#140c1c]">
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div>
          <span className="text-purple-500 text-sm font-semibold tracking-wider">
            CONTACT US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to start your <br /> project?
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
            Let’s collaborate to build something extraordinary.
            Fill out the form and we’ll get back to you within
            24 hours.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                ✉️
              </div>
              <div>
                <p className="text-gray-400 text-sm">EMAIL US</p>
                <p className="text-white font-medium">
                  aryanbansalpvt@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                📍
              </div>
              <div>
                <p className="text-gray-400 text-sm">VISIT US</p>
                <p className="text-white font-medium">
                  Bathinda, Punjab
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-white text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-white text-sm">Email</label>
                <input
                  type="email"
                  placeholder="@example.com"
                  className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm">
                Service Interest
              </label>
              <select
                className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              >
                <option>Web Design</option>
                <option>App Development</option>
                <option>Branding</option>
                <option>Growth Strategy</option>
              </select>
            </div>

            <div>
              <label className="text-white text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project goals..."
                className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            <button
              
              className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-lg font-medium"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
