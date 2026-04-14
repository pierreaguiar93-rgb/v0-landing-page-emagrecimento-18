"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onStartQuiz: () => void
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Método validado por +2.500 pessoas</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
          Seu metabolismo está travado… e isso está te{" "}
          <span className="text-primary">impedindo de emagrecer</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty">
          Descubra em menos de 1 minuto o que está bloqueando seu corpo
        </p>
        
        {/* CTA Button */}
        <Button
          onClick={onStartQuiz}
          size="lg"
          className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
        >
          FAZER DIAGNÓSTICO GRATUITO
        </Button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
