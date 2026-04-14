"use client"

import { Clock, ShieldCheck, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const CHECKOUT_URL = "https://pay.kirvano.com/6ce53285-1e58-43a6-983a-92ada15f6cfc"

export function Offer() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight text-balance">
          Você pode continuar como está…{" "}
          <span className="text-primary">ou mudar seu corpo em 30 dias</span>
        </h2>

        {/* Urgency Text */}
        <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
          Enquanto você pensa, outras pessoas estão começando agora e já vendo
          resultados. A diferença entre quem muda e quem continua frustrado é{" "}
          <strong className="text-foreground">uma decisão</strong>.
        </p>

        {/* Pain Point Box */}
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-8 text-center">
          <p className="text-lg font-medium">
            Se você continuar adiando, tudo vai continuar igual…{" "}
            <span className="text-primary">ou pior.</span>
          </p>
        </div>

        {/* Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-secondary/50 border border-border">
            <div className="text-muted-foreground text-sm mb-2">Continuar sozinho:</div>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✗</span> Tentativas frustradas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✗</span> Efeito sanfona
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✗</span> Sem direção clara
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-primary/10 border border-primary/30">
            <div className="text-primary text-sm mb-2 font-medium">Com o Projeto Corpo 30D:</div>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Método validado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Resultados em 30 dias
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Suporte completo
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="p-8 rounded-2xl bg-card border-2 border-primary shadow-xl shadow-primary/10 text-center mb-8">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">
            <Clock className="w-4 h-4" />
            Essa condição pode sair do ar a qualquer momento
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="text-muted-foreground line-through text-xl mb-1">
              De R$97,00
            </div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              R$37<span className="text-3xl">,90</span>
            </div>
            <div className="text-muted-foreground mt-2">
              Pagamento único • Acesso vitalício
            </div>
          </div>

          {/* CTA Button */}
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full text-xl py-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <Zap className="w-6 h-6 mr-2" />
              DESBLOQUEAR AGORA POR R$37,90
            </Button>
          </a>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Pagamento seguro
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Dados protegidos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
