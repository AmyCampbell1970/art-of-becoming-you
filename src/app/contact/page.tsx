"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    router.push("/contact/thank-you");
  }

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
            Contact
          </p>
          <h1 className="font-display text-6xl font-light text-forest leading-tight mb-6">
            Let&apos;s start the conversation.
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed">
            No pressure. No pitch. Just reach out and let Amy know where you
            are — she&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="bg-ivory rounded-2xl p-10 border border-sage/20">
            <h2 className="font-display text-3xl text-forest font-medium mb-8">
              Send a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-muted mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className="w-full bg-cream border border-sage/30 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-muted mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    className="w-full bg-cream border border-sage/30 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-cream border border-sage/30 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted mb-2 block">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full bg-cream border border-sage/30 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted mb-2 block">
                  What brings you here?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Share what's on your mind. What are you hoping coaching can help with?"
                  className="w-full bg-cream border border-sage/30 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-forest text-cream py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

              <p className="font-body text-xs text-muted text-center">
                Amy typically responds within 24–48 hours.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8 pt-4">
            <div>
              <h2 className="font-display text-3xl text-forest font-medium mb-4">
                Other ways to reach Amy
              </h2>
              <p className="font-body text-base text-muted leading-relaxed">
                Feel free to call, email, or find her on TikTok. She&apos;s
                real, she&apos;s approachable, and she&apos;s happy to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone size={20} className="text-gold" />,
                  label: "Phone",
                  value: "804-536-7612",
                  note: "Call or text anytime",
                },
                {
                  icon: <Mail size={20} className="text-gold" />,
                  label: "Email",
                  value: "theartofbecomingyou@gmail.com",
                  note: "Response within 24–48 hours",
                },
                {
                  icon: <MessageCircle size={20} className="text-gold" />,
                  label: "TikTok",
                  value: "@AmyCampbell680",
                  note: "Follow along for inspiration",
                },
              ].map(({ icon, label, value, note }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-muted mb-1">
                      {label}
                    </p>
                    <p className="font-body text-base text-charcoal">{value}</p>
                    <p className="font-body text-xs text-muted mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Discovery call callout */}
            <div className="bg-forest rounded-2xl p-8 mt-4">
              <p className="font-body text-xs uppercase tracking-widest text-gold mb-3">
                Not Sure Where to Start?
              </p>
              <h3 className="font-display text-2xl text-cream font-medium mb-3">
                Just reach out.
              </h3>
              <p className="font-body text-sm text-cream/70 leading-relaxed">
                If you&apos;re not sure which session is right for you —
                or whether coaching is even the right move — send Amy a message
                and she&apos;ll help you figure it out. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
