import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | The Art of Becoming You",
  description:
    "Learn about Amy Campbell, the life coach behind The Art of Becoming You.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-24 pb-16 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            About
          </p>
          <h1 className="font-display text-6xl font-light text-forest leading-tight">
            Amy Campbell
          </h1>
        </div>
      </section>

      {/* Main bio */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden relative">
              <Image
                src="/amy-short-hair.jpg"
                alt="Amy Campbell, life coach"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="pt-4">
            <h2 className="font-display text-4xl font-light text-forest mb-6">
              I help you slow down and hear yourself again.
            </h2>
            <div className="space-y-5 font-body text-base text-muted leading-relaxed">
              <p>
                I&apos;m Amy Campbell, and the work I do is really about helping
                people slow down and hear themselves again.
              </p>
              <p>
                Most people aren&apos;t confused because they don&apos;t know
                anything — they&apos;re overwhelmed, disconnected, or carrying
                too much at once. My role is to help you sort through that noise
                so you can see what&apos;s actually yours, and what isn&apos;t.
              </p>
              <p>
                Over time, I&apos;ve found that when people are given space to
                be honest with themselves — without judgment — they naturally
                start to shift. They start making clearer choices, feeling more
                grounded, and trusting themselves again.
              </p>
              <p>
                This work isn&apos;t about fixing you. It&apos;s about helping
                you understand yourself in a way that makes life feel less heavy
                and more clear.
              </p>
              <p>
                If you&apos;re at a point where you know something needs to
                change, but you&apos;re not sure how to move forward — this
                space is for you.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors"
              >
                Work With Me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="py-20 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
              Philosophy
            </p>
            <h2 className="font-display text-5xl font-light text-cream">
              What I believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                heading: "You are not broken.",
                body: "Most people aren't stuck because something is wrong with them. They're overwhelmed, disconnected, or carrying more than they should be carrying alone.",
              },
              {
                heading: "Clarity comes from stillness.",
                body: "When you're given real space to be honest with yourself — without judgment — something shifts. You start to hear yourself again.",
              },
              {
                heading: "This isn't about fixing you.",
                body: "The goal of coaching isn't to correct you. It's to help you understand yourself in a way that makes life feel less heavy and more clear.",
              },
              {
                heading: "Your answers already live in you.",
                body: "My role isn't to tell you what to do. It's to help you sort through the noise so you can see what's actually yours — and trust it.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="bg-forest-light/30 rounded-2xl p-8 border border-cream/10"
              >
                <h3 className="font-display text-2xl text-gold font-medium mb-3">
                  {heading}
                </h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl font-light text-forest mb-6">
            Ready to start your journey?
          </h2>
          <p className="font-body text-base text-muted leading-relaxed mb-10">
            If something in you is ready to move — even if you&apos;re not sure
            where — reach out. That&apos;s where we start.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest text-cream px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Let&apos;s Connect <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
