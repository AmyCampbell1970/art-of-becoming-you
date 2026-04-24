import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg text-cream font-medium mb-2">
            The Art of Becoming You
          </p>
          <p className="font-body text-sm leading-relaxed">
            Coaching that helps you come home to yourself — with clarity,
            confidence, and courage.
          </p>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Navigate
          </p>
          <ul className="space-y-2 font-body text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Work With Me" },
              { href: "/shop", label: "Shop" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Connect
          </p>
          <p className="font-body text-sm leading-relaxed">
            Ready to begin? Reach out and let&apos;s talk about what&apos;s
            possible for you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 border border-gold text-gold text-sm px-5 py-2 rounded-full hover:bg-gold hover:text-forest transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center">
        <p className="font-body text-xs text-cream/40">
          &copy; {new Date().getFullYear()} The Art of Becoming You. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
