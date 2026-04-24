"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";

const questions = [
  {
    q: "Do you feel mentally or emotionally overwhelmed most days?",
    answers: [
      { text: "Yes, almost daily", scores: [2, 0, 0] },
      { text: "Sometimes", scores: [1, 0, 0] },
      { text: "Not really", scores: [0, 1, 0] },
    ],
  },
  {
    q: "Do you feel disconnected from yourself or unsure what you really want?",
    answers: [
      { text: "Yes, constantly", scores: [0, 0, 2] },
      { text: "Sometimes", scores: [0, 1, 0] },
      { text: "No, I feel mostly clear", scores: [0, 1, 0] },
    ],
  },
  {
    q: "What describes you best right now?",
    answers: [
      { text: "I feel stuck and don't know why", scores: [2, 0, 0] },
      { text: "I feel lost but I'm trying to figure it out", scores: [0, 2, 0] },
      { text: "I know I need change but haven't acted yet", scores: [0, 0, 2] },
    ],
  },
  {
    q: "When you feel overwhelmed, what do you usually do?",
    answers: [
      { text: "Overthink everything", scores: [0, 0, 1] },
      { text: "Shut down or distract myself", scores: [1, 0, 0] },
      { text: "Try to push through it alone", scores: [0, 1, 0] },
    ],
  },
  {
    q: "What are you most needing right now?",
    answers: [
      { text: "Emotional relief and calm", scores: [3, 0, 0] },
      { text: "Clarity about my direction", scores: [0, 3, 0] },
      { text: "Deep understanding of myself", scores: [0, 0, 3] },
    ],
  },
  {
    q: "How open are you to receiving intuitive or energetic insight?",
    answers: [
      { text: "Very open", scores: [0, 0, 1] },
      { text: "Somewhat open", scores: [0, 1, 0] },
      { text: "I prefer practical guidance only", scores: [0, 1, 0] },
    ],
  },
  {
    q: "Do you feel like you're at a turning point in your life?",
    answers: [
      { text: "Yes", scores: [0, 0, 1] },
      { text: "Maybe", scores: [0, 1, 0] },
      { text: "No", scores: [1, 0, 0] },
    ],
  },
];

const results = [
  {
    id: 1,
    label: "You need grounding + emotional reset",
    tagline: "You are emotionally overloaded and need to reset your system.",
    meaning:
      "You are carrying too much mentally and emotionally, and it's blocking clarity. Before anything else can shift, you need space to slow down and come back to yourself.",
    offer: "Guided Reset Session",
    price: "$20",
    cta: "Start here. You don't need more thinking — you need a reset back into yourself.",
    accent: "text-gold",
    border: "border-gold/40",
    button: "bg-forest text-cream hover:bg-forest-light",
  },
  {
    id: 2,
    label: "You need clarity and direction",
    tagline: "You are in a transition phase and need clarity on your path.",
    meaning:
      "You are not stuck — you are between versions of yourself. What you need isn't more time to figure it out alone. You need a clear, honest conversation that helps you see where you actually are.",
    offer: "Life Guidance Session",
    price: "$122",
    cta: "This session will help you understand where you are, what's shifting, and what your next step actually is.",
    accent: "text-forest",
    border: "border-forest/40",
    button: "bg-forest text-cream hover:bg-forest-light",
  },
  {
    id: 3,
    label: "You are in a deep identity shift",
    tagline: "You are going through a deeper internal awakening or identity change.",
    meaning:
      "Old ways of thinking or living are no longer fitting. This isn't a problem to fix — it's a transformation unfolding. What you need is someone who can help you understand what's actually happening beneath the surface.",
    offer: "Soul Insight Session",
    price: "$111",
    cta: "This gives you a deeper reflection of your current energetic and internal patterns so you can understand what is unfolding.",
    accent: "text-gold",
    border: "border-gold/40",
    button: "bg-forest text-cream hover:bg-forest-light",
  },
];

type Screen = "start" | "questions" | "results";

export default function QuizPage() {
  const [screen, setScreen] = useState<Screen>("start");
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState([0, 0, 0]);

  function handleAnswer(answerScores: number[]) {
    const updated = scores.map((s, i) => s + answerScores[i]);
    setScores(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setScreen("results");
    }
  }

  function handleBack() {
    if (step === 0) {
      setScreen("start");
    } else {
      setStep(step - 1);
    }
  }

  function restart() {
    setScreen("start");
    setStep(0);
    setScores([0, 0, 0]);
  }

  const resultIndex = scores.indexOf(Math.max(...scores));
  const result = results[resultIndex];
  const progress = ((step) / questions.length) * 100;

  if (screen === "start") {
    return (
      <StartScreen onStart={() => setScreen("questions")} />
    );
  }

  if (screen === "results") {
    return (
      <ResultScreen result={result} onRestart={restart} />
    );
  }

  const current = questions[step];

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-sage/30">
        <div
          className="h-1 bg-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">
          {/* Step counter */}
          <p className="font-body text-xs uppercase tracking-widest text-muted text-center mb-8">
            Question {step + 1} of {questions.length}
          </p>

          {/* Question */}
          <h2 className="font-display text-3xl sm:text-4xl font-light text-forest text-center leading-snug mb-12">
            {current.q}
          </h2>

          {/* Answers */}
          <div className="flex flex-col gap-4">
            {current.answers.map(({ text, scores: answerScores }) => (
              <button
                key={text}
                onClick={() => handleAnswer(answerScores)}
                className="w-full text-left px-6 py-5 rounded-2xl border border-sage/30 bg-cream font-body text-base text-charcoal hover:border-forest hover:bg-forest hover:text-cream transition-all duration-200 cursor-pointer"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Back */}
          <button
            onClick={handleBack}
            className="mt-10 flex items-center gap-1 text-muted font-body text-sm hover:text-forest transition-colors mx-auto cursor-pointer"
          >
            <ChevronLeft size={16} /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <p className="font-body text-xs uppercase tracking-widest text-gold mb-6">
          Free Quiz
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-light text-forest leading-tight mb-6">
          What are you actually stuck in right now?
        </h1>
        <p className="font-body text-lg text-muted leading-relaxed mb-12">
          Find out what&apos;s blocking you — and what kind of support will
          actually help you move forward.
        </p>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 bg-forest text-cream px-10 py-4 rounded-full font-body text-sm tracking-wide hover:bg-forest-light transition-colors cursor-pointer"
        >
          Start Quiz <ArrowRight size={16} />
        </button>
        <p className="font-body text-xs text-muted mt-6">
          7 questions · takes about 2 minutes
        </p>
      </div>
    </div>
  );
}

function ResultScreen({
  result,
  onRestart,
}: {
  result: (typeof results)[number];
  onRestart: () => void;
}) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full">
        <p className="font-body text-xs uppercase tracking-widest text-gold mb-4 text-center">
          Your Result
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-forest leading-tight mb-4 text-center">
          {result.label}
        </h2>
        <p className={`font-body text-base font-medium text-center mb-8 ${result.accent}`}>
          {result.tagline}
        </p>

        <div className={`bg-cream rounded-2xl p-8 border ${result.border} mb-8`}>
          <p className="font-body text-base text-muted leading-relaxed mb-8">
            {result.meaning}
          </p>

          <div className="border-t border-sage/30 pt-8">
            <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">
              Recommended for you
            </p>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display text-2xl text-forest font-medium">
                {result.offer}
              </h3>
              <span className="font-display text-2xl text-gold font-light">
                {result.price}
              </span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              {result.cta}
            </p>
            <Link
              href="/contact"
              className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-body text-sm tracking-wide transition-colors ${result.button}`}
            >
              Book This Session <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="font-body text-sm text-muted hover:text-forest transition-colors cursor-pointer"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    </div>
  );
}
