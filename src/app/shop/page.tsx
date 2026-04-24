import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const books = [
  {
    title: "Heaven Is A State Of Mind",
    subtitle: "A Roadmap to Create Your Own Heaven On Earth",
    cover: "/heaven-cover.png",
    description:
      "Heaven isn't a distant place — it's a state of mind you can access today. Amy Campbell guides you through the frequencies of love, joy, and awareness, offering tools to transform thought patterns, release limitations, and awaken your authentic self.",
    bullets: [
      "Cultivate inner peace and clarity",
      "Create heaven in your everyday life",
      "Align your thoughts, emotions, and actions with your highest self",
      "Ripple your personal heaven into relationships, community, and the world",
    ],
    formats: [
      { label: "Kindle", price: "$9.99", asin: "B0FR2PQLLH" },
      { label: "Paperback", price: "$19.99", asin: "B0FR38PL7F" },
      { label: "Hardcover", price: "$29.99", asin: "B0FR39GDGZ" },
    ],
  },
  {
    title: "The Siren Codes",
    subtitle: "Deconstructing the Language of Illusion",
    cover: "/siren-cover.jpg",
    description:
      "A piercing, powerful unraveling of the illusions woven into modern spirituality. This book is not here to fix you — it's here to help you remember yourself. The Siren Codes calls out the manipulation, bypassing, and spiritual performance that keep us tangled in false paths and endless seeking.",
    bullets: [
      "Cut through spiritual distortion and reclaim your truth",
      "Stop seeking what's already alive in you",
      "Return to inner authority and sovereignty",
      "Feel your truth again — with clarity, not confusion",
    ],
    formats: [
      { label: "Kindle", price: "$9.99", asin: "B0FP6TH6FB" },
      { label: "Paperback", price: "$19.99", asin: "B0FPCLKN4M" },
      { label: "Hardcover", price: "$29.99", asin: "B0FPCL2X31" },
    ],
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Shop
          </p>
          <h1 className="font-display text-6xl font-light text-forest leading-tight mb-6">
            Books by Amy Campbell
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed">
            Written to help you remember who you are. Available on Amazon in
            Kindle, paperback, and hardcover.
          </p>
        </div>
      </section>

      {/* Books */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-20">
          {books.map((book, i) => (
            <div
              key={book.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Cover */}
              <div className="flex justify-center">
                <div className="w-64 shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={256}
                    height={384}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">
                  {book.subtitle}
                </p>
                <h2 className="font-display text-4xl font-light text-forest mb-6 leading-tight">
                  {book.title}
                </h2>
                <p className="font-body text-base text-muted leading-relaxed mb-5">
                  {book.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {book.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-body text-sm text-muted">
                      <span className="text-gold mt-0.5">·</span> {b}
                    </li>
                  ))}
                </ul>

                {/* Format buttons */}
                <div className="flex flex-wrap gap-3">
                  {book.formats.map(({ label, price, asin }) => (
                    <a
                      key={label}
                      href={`https://www.amazon.com/dp/${asin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col items-center px-6 py-3 rounded-full border border-forest text-forest font-body text-sm hover:bg-forest hover:text-cream transition-colors"
                    >
                      <span className="font-medium">{label}</span>
                      <span className="text-xs opacity-70">{price}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coaching upsell */}
      <section className="py-20 bg-forest">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Go Deeper
          </p>
          <h2 className="font-display text-5xl font-light text-cream mb-6">
            Ready for one-on-one support?
          </h2>
          <p className="font-body text-base text-cream/70 leading-relaxed mb-10">
            Books open the door. Coaching walks you through it. Sessions start
            at $20 and are done entirely by phone.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gold text-forest px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            View Sessions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
