export default function TestModeBanner() {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.startsWith("pk_test_")) {
    return null;
  }

  return (
    <div className="w-full bg-amber-400 text-amber-900 text-center py-2 px-4 font-body text-xs tracking-wide font-medium">
      ⚠ TEST MODE — Stripe payments are simulated. Use card number{" "}
      <span className="font-mono font-bold">4242 4242 4242 4242</span> with any
      future expiry and any CVC.
    </div>
  );
}
