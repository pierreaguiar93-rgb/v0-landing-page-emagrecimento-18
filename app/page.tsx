"use client"

import { useState, useRef, useEffect } from "react"
import { Hero } from "@/components/landing/hero"
import { Quiz } from "@/components/landing/quiz"
import { Result } from "@/components/landing/result"
import { SocialProof } from "@/components/landing/social-proof"
import { Offer } from "@/components/landing/offer"
import { Guarantee } from "@/components/landing/guarantee"
import { Footer } from "@/components/landing/footer"

type Stage = "hero" | "quiz" | "result" | "offer"

export default function LandingPage() {
  const [stage, setStage] = useState<Stage>("hero")
  const quizRef = useRef<HTMLDivElement>(null)
  const offerRef = useRef<HTMLDivElement>(null)

  const scrollToQuiz = () => {
    setStage("quiz")
  }

  const handleQuizComplete = () => {
    setStage("result")
  }

  const handleResultComplete = () => {
    setStage("offer")
  }

  useEffect(() => {
    if (stage === "quiz" && quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: "smooth" })
    }
    if (stage === "offer" && offerRef.current) {
      offerRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [stage])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero - Always visible */}
      <Hero onStartQuiz={scrollToQuiz} />

      {/* Quiz - Shows after CTA click */}
      {(stage === "quiz" || stage === "result" || stage === "offer") && (
        <div ref={quizRef}>
          {stage === "quiz" && <Quiz onComplete={handleQuizComplete} />}
        </div>
      )}

      {/* Result - Shows after quiz completion */}
      {(stage === "result" || stage === "offer") && stage === "result" && (
        <Result onContinue={handleResultComplete} />
      )}

      {/* Offer sections - Shows after result */}
      {stage === "offer" && (
        <div ref={offerRef}>
          <SocialProof />
          <Offer />
          <Guarantee />
          <Footer />
        </div>
      )}
    </main>
  )
}
