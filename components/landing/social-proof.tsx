"use client"

import { Star, Users, Target, ThumbsUp, Quote } from "lucide-react"

const stats = [
  { icon: Users, value: "+2.500", label: "alunos transformados" },
  { icon: Target, value: "-6kg", label: "em média em 30 dias" },
  { icon: ThumbsUp, value: "97%", label: "de satisfação" },
]

const testimonials = [
  {
    text: "Depois de anos tentando, finalmente consegui emagrecer. O método é simples e funciona de verdade!",
    author: "Maria S.",
    result: "-8kg em 30 dias",
  },
  {
    text: "Perdi 6kg em 30 dias sem sofrimento. Melhor investimento que já fiz na minha saúde.",
    author: "Ana P.",
    result: "-6kg em 30 dias",
  },
  {
    text: "Achei que meu metabolismo estava morto. O projeto me provou o contrário!",
    author: "Carla M.",
    result: "-5kg em 30 dias",
  },
]

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-secondary/50 border border-border text-center"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          O que dizem nossos <span className="text-primary">alunos</span>
        </h3>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-secondary/30 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-primary">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
