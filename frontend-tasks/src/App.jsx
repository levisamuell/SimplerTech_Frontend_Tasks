import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="text-center py-12 bg-gray-200">
        <h1 className="text-3xl font-bold text-black">Welcome to MyApp</h1>
        <p className="mt-2 text-gray-600">A simple app styled with Tailwind</p>
      </header>

      {/* Sign Up Section */}
      <section className="py-12 bg-gray-100">
        <SignUpPage />
      </section>
      
      {/* User Cards Section */}
      <section className="container mx-auto py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserCard name="Levi Samuel" email="levi@example.com" />
        <UserCard name="John Doe" email="john@example.com" />
        <UserCard name="Jane Smith" email="jane@example.com" />
      </section>

    </div>
  );
}
