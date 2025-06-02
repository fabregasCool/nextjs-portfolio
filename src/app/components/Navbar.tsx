"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900">
      <div className="text-xl font-bold">Mon Portfolio</div>

      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
        </li>
          <li>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
        </li>
          <li>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>

      <button
        onClick={() => setDark(!dark)}
        className="text-lg focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
