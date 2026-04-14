"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

interface QuizProps {
  onComplete: () => void
}

const questions = [
  {
    question: "Qual seu principal objetivo?",
    options: ["Perder peso rápido", "Secar barriga", "Melhorar saúde"],
  },
  {
    question: "Você já tentou emagrecer antes?",
    options: ["Sim, várias vezes", "Sim, mas desisti", "Nunca tentei"],
  },
  {
    question: "Qual sua maior dificuldade?",
    options: ["Dieta não funciona", "Falta de disciplina", "Metabolismo lento"],
  },
  {
    question: "Quanto você quer perder em 30 dias?",
    options: ["3kg", "5kg", "7kg+"],
  },
  {
    question: "Você sente que seu corpo não responde?",
    options: ["Sim", "Muito", "Com certeza"],
  },
]

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOptionSelect = (option: string) => {
    if (isAnimating) return
    
    setSelectedOption(option)
    setIsAnimating(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        onComplete()
      }
      setIsAnimating(false)
    }, 600)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section id="quiz" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-card">
      <div className="w-full max-w-xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          className={cn(
            "transition-all duration-300",
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnimating}
                className={cn(
                  "w-full p-5 rounded-xl border-2 text-left text-lg font-medium transition-all duration-300",
                  "hover:border-primary hover:bg-primary/5",
                  selectedOption === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedOption === option && (
                    <CheckCircle2 className="w-6 h-6 text-primary animate-in zoom-in" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
