import Link from "next/link";
import { CheckCircle, Calendar } from "lucide-react";

export const metadata = {
  title: "Thank You | The Art of Becoming You",
};

const CALENDLY_URL = "https://calendly.com/theartofbecomingyou/scheduled-session";

export default function SuccessPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-ivory py-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <CheckCircle size={56} className="text-forest mx-auto mb-6" />
        <h1 className="font-display text-5xl font-light text-forest mb-4">
          You&apos;re booked!
        </h1>
        <p className="font-body text-base text-muted leading-relaxed mb-10">
          Your payment is confirmed. The last step is to pick a time for your
          call with Amy — click below and choose whatever works best for you.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-forest text-cream px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors mb-6"
        >
          <Calendar size={16} /> Schedule Your Call
        </a>

        <p className="font-body text-xs text-muted">
          You&apos;ll receive a confirmation email once your time is booked.
          If you have any questions, reach Amy at{" "}
          <a
            href="mailto:theartofbecomingyou@gmail.com"
            className="text-forest hover:text-gold transition-colors"
          >
            theartofbecomingyou@gmail.com
          </a>
        </p>

        <div className="mt-10 pt-10 border-t border-sage/30">
          <Link
            href="/"
            className="font-body text-sm text-muted hover:text-forest transition-colors"
          >
            Return to home
          </Link>
        </div>
      </div>
    </section>
  );
}
