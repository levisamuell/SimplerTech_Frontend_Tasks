export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/" className="hover:text-gray-200 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200 transition">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200 transition">Contact</a>
          </li>
        </ul>
        <button className="md:hidden bg-white text-blue-600 px-3 py-1 rounded font-semibold">
          ☰
        </button>
      </div>
    </nav>
  );
}
