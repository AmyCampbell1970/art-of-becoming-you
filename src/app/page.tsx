import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Star, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-ivory">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-6">
              Life Coaching
            </p>
            <h1 className="font-display text-6xl lg:text-7xl font-light text-forest leading-tight mb-8">
              I help you reconnect with yourself, find clarity, and move
              forward.
            </h1>
            <p className="font-body text-lg text-muted leading-relaxed mb-10 max-w-lg">
              Real conversations. Honest reflection. Support that helps you see
              yourself differently so you can make better choices for your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors"
              >
                Find Your Path <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-forest text-forest px-8 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest hover:text-cream transition-colors"
              >
                Work With Me
              </Link>
            </div>
            <p className="font-body text-xs text-muted mt-3">
              Not sure where to start? Take the free 2-minute quiz.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/amy-hero.jpg"
              alt="Amy Campbell, life coach"
              width={420}
              height={560}
              className="rounded-3xl w-[420px] h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Leaf size={28} className="text-gold" />,
              title: "Clarity",
              body: "Cut through the noise and reconnect with what's actually true for you.",
            },
            {
              icon: <Star size={28} className="text-gold" />,
              title: "Confidence",
              body: "Trust yourself again — your instincts, your choices, your direction.",
            },
            {
              icon: <Heart size={28} className="text-gold" />,
              title: "Sovereignty",
              body: "Step into a version of yourself that feels grounded, real, and fully yours.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center gap-4">
              {icon}
              <h3 className="font-display text-2xl text-cream font-medium">
                {title}
              </h3>
              <p className="font-body text-sm text-cream/70 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center">
            <div className="w-[380px] h-[460px] rounded-3xl overflow-hidden relative">
              <Image
                src="/amy-about.jpg"
                alt="Amy Campbell, life coach"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
              About
            </p>
            <h2 className="font-display text-5xl font-light text-forest leading-tight mb-6">
              Amy Campbell
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-4">
              I&apos;m Amy Campbell, and the work I do is really about helping
              people slow down and hear themselves again.
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              Most people aren&apos;t confused because they don&apos;t know
              anything — they&apos;re overwhelmed, disconnected, or carrying too
              much at once. My role is to help you sort through that noise so
              you can see what&apos;s actually yours, and what isn&apos;t.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-forest font-body text-sm tracking-wide border-b border-gold pb-0.5 hover:text-gold transition-colors"
            >
              Read my full story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Work With Me
          </p>
          <h2 className="font-display text-5xl font-light text-forest mb-6">
            How I can support you
          </h2>
          <p className="font-body text-base text-muted max-w-xl mx-auto leading-relaxed">
            Every session is by phone — no video, no setup, just an honest
            conversation that helps you move forward.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Guided Reset Session",
              price: "$20",
              desc: "A simple space to slow down and reset your energy when things feel overwhelming.",
            },
            {
              title: "Soul Insight Session",
              price: "$111",
              desc: "A deeper session where we look at what patterns you're in and what's actually driving your experience.",
            },
            {
              title: "Life Guidance Session",
              price: "$122",
              desc: "A grounded, one-on-one conversation where you bring what's going on and get real reflection and direction back.",
            },
          ].map(({ title, price, desc }) => (
            <div
              key={title}
              className="bg-cream rounded-2xl p-8 border border-sage/20 hover:border-gold/40 transition-colors flex flex-col"
            >
              <p className="font-display text-3xl text-gold font-light mb-1">
                {price}
              </p>
              <h3 className="font-display text-2xl text-forest font-medium mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-6">
                {desc}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm text-forest font-body hover:text-gold transition-colors"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-5xl font-light text-cream">
            What clients are saying
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Akeem C.",
              text: "Sometimes what you want isn't what you need. I got what I needed and I'm going to run with it. I highly recommend speaking and getting a reading. You'll be amazed at what she talks to you about. I know I was. Understanding and an open mind and heart takes you a long way! Thank you! I will definitely talk with you again!",
            },
            {
              name: "Ivonne A.",
              text: "Was extremely depressed and out of sorts!! Something lead me to look for readings and decided to call this number!! She was excellent!! Divine intervention!! She really calmed me down and talked things over with me!! Best thing I've done in a long time is to dial this number!! Feel a total peace has come over me and she will be hearing from me for sure! Thank you for listening and for being so in tune with my problems!!",
            },
            {
              name: "Kayla D.",
              text: "She's great! She told me things I didn't think anyone knew. Her first question caught me off guard because she was able to pick up on something I had been holding back but was weighing heavily on my mind and heart. None of this information is on any of my social media so it's not like she could look me up real quick to dig up info — she just KNEW! 10/10, would recommend, give her a call!!",
            },
            {
              name: "InnaDreme I.",
              text: "I am SO glad I came to see Amy. I moved to a new city to pursue a dream and was dedicated to using the Law of Attraction to do it. Amy was able to give me insights into what I was actually doing energetically versus what I wanted to be doing. Now I have learned to trust my intuition and remove energetic blocks. I am experiencing the life in the way I always wanted. Book an appointment and go! Worth. Every. Dollar.",
            },
          ].map(({ name, text }) => (
            <div key={name} className="bg-forest-light/40 rounded-2xl p-8">
              <p className="font-display text-base text-cream/90 italic leading-relaxed mb-6">
                &ldquo;{text}&rdquo;
              </p>
              <p className="font-body text-sm text-gold">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl font-light text-forest mb-6">
            Ready to become you?
          </h2>
          <p className="font-body text-base text-muted leading-relaxed mb-10">
            If you&apos;re at a point where you know something needs to change,
            but you&apos;re not sure how to move forward — this space is for
            you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest text-cream px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
