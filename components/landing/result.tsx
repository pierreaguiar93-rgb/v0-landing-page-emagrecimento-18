"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, TrendingDown } from "lucide-react"

interface ResultProps {
  onContinue: () => void
}

export function Result({ onContinue }: ResultProps) {
  const [showContent, setShowContent] = useState(false)
  const [analyzing, setAnalyzing] = useState(true)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnalyzing(false)
    }, 2000)

    const timer2 = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  useEffect(() => {
    if (showContent) {
      const scrollTimer = setTimeout(() => {
        onContinue()
      }, 4000)
      return () => clearTimeout(scrollTimer)
    }
  }, [showContent, onContinue])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background">
      <div className="w-full max-w-2xl mx-auto text-center">
        {analyzing ? (
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <p className="text-xl text-muted-foreground animate-pulse">
              Analisando suas respostas...
            </p>
          </div>
        ) : (
          <div
            className={`transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Alert Icon */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-primary" />
            </div>

            {/* Result Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seu metabolismo está{" "}
              <span className="text-primary">DESACELERADO</span>
            </h2>

            {/* Result Text */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com base nas suas respostas, seu corpo entrou em{" "}
              <strong className="text-foreground">modo de defesa</strong> e está
              impedindo a queima de gordura. Isso explica por que você não
              consegue emagrecer.
            </p>

            {/* Warning Box */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-8">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-left text-foreground font-medium">
                  Se isso não for corrigido agora, seu corpo tende a acumular{" "}
                  <span className="text-primary">ainda mais gordura</span> nas
                  próximas semanas.
                </p>
              </div>
            </div>

            {/* Loading indicator for next section */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">Carregando solução...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
