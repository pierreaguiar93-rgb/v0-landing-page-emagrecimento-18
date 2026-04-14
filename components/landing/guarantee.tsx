"use client"

import { ShieldCheck, Clock, Zap } from "lucide-react"

const guarantees = [
  {
    icon: ShieldCheck,
    title: "7 dias de garantia",
    description: "Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    icon: Zap,
    title: "Acesso imediato",
    description: "Após o pagamento, você recebe acesso instantâneo a todo o conteúdo.",
  },
  {
    icon: Clock,
    title: "Pagamento seguro",
    description: "Seus dados estão protegidos com criptografia de ponta.",
  },
]

export function Guarantee() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Sua compra está <span className="text-primary">100% protegida</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary/30 border border-border text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
