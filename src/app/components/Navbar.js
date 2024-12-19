"use client";

export default function Navbar() {
  const navItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-dark text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">Jake&apos;s Salon</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-brand-pink transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
