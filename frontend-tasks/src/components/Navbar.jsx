import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden bg-white text-black px-3 py-1 rounded font-semibold"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-white flex flex-col gap-4 p-4">
          <li><a href="/" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
