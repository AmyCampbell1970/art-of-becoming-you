"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Work With Me" },
  { href: "/quiz", label: "Take the Quiz" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-sage/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-medium text-forest tracking-wide">
          The Art of Becoming You
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm tracking-wide transition-colors ${
                pathname === href
                  ? "text-gold font-medium"
                  : "text-charcoal hover:text-forest"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/services"
            className="bg-forest text-cream text-sm px-5 py-2 rounded-full tracking-wide hover:bg-forest-light transition-colors"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory border-t border-sage/30 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-body text-base tracking-wide ${
                pathname === href ? "text-gold font-medium" : "text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="bg-forest text-cream text-sm px-5 py-3 rounded-full text-center tracking-wide"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
