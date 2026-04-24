"use client";

import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Guided Reset Session",
    tagline: "For when things feel overwhelming",
    price: "$20",
    period: "/ session",
    description:
      "A simple space to help you slow down and reset your energy when things feel overwhelming.",
    includes: [
      "One-on-one phone session",
      "Space to slow down and come back to yourself",
      "Gentle guidance through what feels heavy",
    ],
    highlight: false,
    priceId: "price_1TPXxKICAOLAcmj7awWssL5Y",
    isFor: [
      "Your mind feels full or scattered",
      "You feel stuck emotionally or mentally",
      "You just need to come back to yourself",
    ],
  },
  {
    name: "Soul Insight Session",
    tagline: "For when you keep hitting the same wall",
    price: "$111",
    period: "/ session",
    description:
      "A deeper session where we look at what patterns you're in and what's actually driving what you're experiencing.",
    includes: [
      "One-on-one phone session",
      "Pattern and cycle exploration",
      "Clarity on what's underneath the surface",
      "Real, honest reflection — no fluff",
    ],
    highlight: true,
    priceId: "price_1TPXxYICAOLAcmj7sCsUFHQf",
    isFor: [
      "You keep repeating the same cycles",
      "You feel like you're in transition",
      "You want clarity on what's really going on",
    ],
  },
  {
    name: "Life Guidance Session",
    tagline: "For when you're at a turning point",
    price: "$122",
    period: "/ session",
    description:
      "A grounded, one-on-one conversation where you can bring what's going on in your life and get real reflection and direction back.",
    includes: [
      "One-on-one phone session",
      "Open conversation on any area of your life",
      "Real reflection and practical direction",
      "Support in making decisions with clarity",
    ],
    highlight: false,
    priceId: "price_1TPXxqICAOLAcmj7WYz4fmOk",
    isFor: [
      "You're at a turning point",
      "You're trying to make a decision",
      "You need clarity and support, not more confusion",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Work With Me
          </p>
          <h1 className="font-display text-6xl font-light text-forest leading-tight mb-6">
            Your transformation starts here.
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed">
            Real conversations. Honest reflection. Support that helps you see
            yourself differently so you can make better choices for your life.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
              The Process
            </p>
            <h2 className="font-display text-5xl font-light text-forest">
              How coaching works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Reach Out",
                body: "Send a message or book a session. No pressure — just let Amy know what's going on and what you're hoping to work through.",
              },
              {
                step: "02",
                title: "Choose Your Session",
                body: "Pick the session that fits where you are right now. Not sure which? Start with the Guided Reset and go from there.",
              },
              {
                step: "03",
                title: "Show Up by Phone",
                body: "All sessions are by phone. You bring what's real. Amy helps you sort through it — honestly, without judgment.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <p className="font-display text-6xl text-gold/30 font-light mb-4">
                  {step}
                </p>
                <h3 className="font-display text-2xl text-forest font-medium mb-3">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
              Sessions
            </p>
            <h2 className="font-display text-5xl font-light text-forest">
              Choose your session
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col border ${
                  pkg.highlight
                    ? "bg-forest text-cream border-forest"
                    : "bg-cream border-sage/20"
                }`}
              >
                {pkg.highlight && (
                  <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
                    Most Popular
                  </p>
                )}
                <h3
                  className={`font-display text-2xl font-medium mb-1 ${
                    pkg.highlight ? "text-cream" : "text-forest"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`font-body text-sm mb-6 ${
                    pkg.highlight ? "text-cream/60" : "text-muted"
                  }`}
                >
                  {pkg.tagline}
                </p>
                <div className="mb-6">
                  <span
                    className={`font-display text-5xl font-light ${
                      pkg.highlight ? "text-gold" : "text-forest"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`font-body text-sm ml-1 ${
                      pkg.highlight ? "text-cream/60" : "text-muted"
                    }`}
                  >
                    {pkg.period}
                  </span>
                </div>
                <p
                  className={`font-body text-sm leading-relaxed mb-4 ${
                    pkg.highlight ? "text-cream/70" : "text-muted"
                  }`}
                >
                  {pkg.description}
                </p>

                <p
                  className={`font-body text-xs uppercase tracking-widest mb-2 ${
                    pkg.highlight ? "text-gold" : "text-gold"
                  }`}
                >
                  This is for you if…
                </p>
                <ul className="space-y-1 mb-6">
                  {pkg.isFor.map((item) => (
                    <li
                      key={item}
                      className={`font-body text-sm ${
                        pkg.highlight ? "text-cream/70" : "text-muted"
                      }`}
                    >
                      · {item}
                    </li>
                  ))}
                </ul>

                <p
                  className={`font-body text-xs uppercase tracking-widest mb-2 ${
                    pkg.highlight ? "text-gold" : "text-gold"
                  }`}
                >
                  Includes
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          pkg.highlight ? "text-gold" : "text-forest"
                        }`}
                      />
                      <span
                        className={`font-body text-sm ${
                          pkg.highlight ? "text-cream/80" : "text-muted"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <form action="/api/checkout" method="POST">
                  <input type="hidden" name="priceId" value={pkg.priceId} />
                  <button
                    type="submit"
                    className={`w-full text-center px-6 py-3 rounded-full font-body text-sm tracking-wide transition-colors cursor-pointer ${
                      pkg.highlight
                        ? "bg-gold text-forest hover:bg-gold-light"
                        : "bg-forest text-cream hover:bg-forest-light"
                    }`}
                  >
                    Book This Session
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone call note */}
      <section className="py-16 bg-sage/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Phone size={32} className="text-forest mx-auto mb-4" />
          <h2 className="font-display text-4xl font-light text-forest mb-4">
            All sessions are by phone.
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            No video calls. No tech setup. Just a real phone call where you can
            speak freely, think out loud, and actually be heard. Sometimes the
            best conversations happen when you don&apos;t have to worry about
            how you look.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
              FAQ
            </p>
            <h2 className="font-display text-5xl font-light text-forest">
              Common questions
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "What happens in a session?",
                a: "You bring what's real — whatever is heavy, unclear, or stuck. Amy listens without judgment and reflects back what she's hearing so you can see it more clearly. Sessions are conversational, not scripted.",
              },
              {
                q: "How do I know which session to choose?",
                a: "If you're overwhelmed and just need to reset, start with the Guided Reset. If you keep hitting the same patterns, the Soul Insight Session goes deeper. If you're at a crossroads or need direction, the Life Guidance Session is designed for that.",
              },
              {
                q: "What if I'm not sure what I need yet?",
                a: "That's completely okay — and actually pretty common. Reach out via the contact page and Amy can help you figure out the right fit before you commit to anything.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-sage/30 pb-8">
                <h3 className="font-display text-xl text-forest font-medium mb-3">
                  {q}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl font-light text-cream mb-6">
            Not sure where to start?
          </h2>
          <p className="font-body text-base text-cream/70 leading-relaxed mb-10">
            Reach out and Amy will help you find the right fit. No pressure —
            just a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-forest px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
