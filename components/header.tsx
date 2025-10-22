import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Home } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Início</Link>
            <Link href="/payment" className="text-sm font-medium text-muted-foreground hover:text-foreground">Pagamento</Link>
            <Link href="/merchant" className="text-sm font-medium text-muted-foreground hover:text-foreground">Dashboard do Lojista</Link>
            <Link href="/demo" className="text-sm font-medium text-muted-foreground hover:text-foreground">Demonstração</Link>
            <Link href="/documentation" className="text-sm font-medium text-muted-foreground hover:text-foreground">Documentação</Link>
            <Link href="/xrpl-tools" className="text-sm font-medium text-muted-foreground hover:text-foreground">XRPL Tools</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon-sm" asChild className="mr-1">
              <Link href="/" aria-label="Página Inicial">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/payment">Conectar Carteira</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/demo-simple">Começar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
