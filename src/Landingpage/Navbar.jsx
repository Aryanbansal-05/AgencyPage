const Navbar = () => {
  return (
    <nav className="w-full bg-[#140c1c] px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-sm"></div>
          <span className="text-white text-xl font-semibold">
            Agency
          </span>
        </div>

        <div className="ml-auto flex items-center gap-8">
          
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <li className="hover:text-white cursor-pointer transition">Work</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>

          <button className="bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-2 rounded-lg font-medium">
            Let’s Talk
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
