import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Message Received | The Art of Becoming You",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-ivory py-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <CheckCircle size={56} className="text-forest mx-auto mb-6" />
        <h1 className="font-display text-5xl font-light text-forest mb-4">
          Message received.
        </h1>
        <p className="font-body text-base text-muted leading-relaxed mb-10">
          Thank you for reaching out. Amy will be in touch within 24–48 hours.
          In the meantime, feel free to look around.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-forest text-forest px-8 py-3 rounded-full font-body text-sm tracking-wide hover:bg-forest hover:text-cream transition-colors"
          >
            View Sessions
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 bg-forest text-cream px-8 py-3 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
