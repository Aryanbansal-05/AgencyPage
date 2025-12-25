const Footer = () => {
  return (
    <footer className="relative w-full px-8 pt-24 pb-8 bg-[#0b0614] overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15),_transparent_60%)]">
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-sm"></div>
              <span className="text-white text-xl font-semibold">
                Agency
              </span>
            </div>

            <p className="mt-4 text-gray-400 max-w-sm">
              Crafting digital experiences that empower brands
              and engage users.
            </p>

            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="hover:text-white cursor-pointer transition">
                X
              </span>
              <span className="hover:text-white cursor-pointer transition">
                In
              </span>
              <span className="hover:text-white cursor-pointer transition">
                Ig
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Services</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Web Design</li>
              <li className="hover:text-white transition cursor-pointer">App Development</li>
              <li className="hover:text-white transition cursor-pointer">Branding</li>
              <li className="hover:text-white transition cursor-pointer">Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex items-center justify-center gap-4 text-gray-400 text-sm text-center">
          
          <p>
            © 2025 Agency Design Inc. All rights reserved.
          </p>


        </div>

      </div>
    </footer>
  )
}

export default Footer
