export function Footer() {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Projeto Corpo 30D. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </div>
    </footer>
  )
}
