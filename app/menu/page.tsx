"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Prato = {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  categoria?: string;
}

type Categoria = {
  id: string
  name: string
  pratos: Prato[]
}

const categoriasPadrao = [
  { id: "entradas", name: "Entradas" },
  { id: "principais", name: "Pratos Principais" },
  { id: "sobremesas", name: "Sobremesas" },
  { id: "bebidas", name: "Bebidas" },
]

export default function MenuPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8080/cardapio")
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar cardápio")
        return res.json()
      })
      .then((data: Prato[]) => {
        // Agrupamento por categoria (simples, baseado no nome do prato)
        const agrupado: { [key: string]: Prato[] } = {
          entradas: [],
          principais: [],
          sobremesas: [],
          bebidas: [],
        }
        data.forEach(prato => {
          const nome = prato.nome.toLowerCase()
          if (nome.includes("feijoada") || nome.includes("lasanha") || nome.includes("moqueca") || nome.includes("picanha") || nome.includes("baião") || nome.includes("bobó") || nome.includes("carne de sol")) {
            agrupado.principais.push(prato)
          } else if (nome.includes("pudim") || nome.includes("brigadeirão") || nome.includes("cocada") || nome.includes("cartola")) {
            agrupado.sobremesas.push(prato)
          } else if (nome.includes("caipirinha") || nome.includes("suco") || nome.includes("água de coco") || nome.includes("refrigerante")) {
            agrupado.bebidas.push(prato)
          } else {
            agrupado.entradas.push(prato)
          }
        })
        const listaCategorias: Categoria[] = categoriasPadrao.map(cat => ({
          ...cat,
          pratos: agrupado[cat.id] ?? []
        }))
        setCategorias(listaCategorias)
        setLoading(false)
      })
      .catch((e) => {
        setErro(e.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-600">Aqui tem sabor</span>
          </Link>
          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Início
            </Link>
            <Link href="/menu" className="text-sm font-medium text-orange-600">
              Cardápio
            </Link>
            <Link href="/sobre" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button variant="default" className="bg-orange-600 hover:bg-orange-700 hidden md:flex">
            Reservar Mesa
          </Button>
          {/* MENU MOBILE */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-b border-orange-200 px-4 py-2">
            <Link href="/" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors">
              Início
            </Link>
            <Link href="/menu" className="block py-2 text-sm font-medium text-orange-600">
              Cardápio
            </Link>
            <Link href="/sobre" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors">
              Contato
            </Link>
            <Button variant="default" className="bg-orange-600 hover:bg-orange-700 w-full mt-2">
              Reservar Mesa
            </Button>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" className="flex items-center gap-1" asChild>
              <Link href="/">
                <ChevronLeft className="h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nosso Cardápio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra os sabores autênticos da culinária brasileira, preparados com ingredientes frescos e muito carinho.
            </p>
          </div>
          {loading ? (
            <p>Carregando cardápio...</p>
          ) : erro ? (
            <p className="text-red-600">{erro}</p>
          ) : (
            <Tabs defaultValue={categorias[0]?.id || ""} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {categorias.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categorias.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  {category.pratos.length === 0 ? (
                    <p className="text-center text-orange-600">Nenhum item nessa categoria.</p>
                  ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.pratos.map((item) => (
                      <Card key={item.id} className="overflow-hidden flex flex-col md:flex-row">
                        <img
                          src={`/placeholder.svg?height=200&width=200&query=${encodeURIComponent(item.nome)}`}
                          alt={item.nome}
                          className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                        />
                        <CardContent className="p-6 flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold">{item.nome}</h3>
                            <span className="font-bold text-orange-600">
                              R$ {item.preco.toFixed(2)}
                            </span>
                          </div>
                          {item.descricao && (
                            <p className="text-muted-foreground">{item.descricao}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </main>
      <footer className="bg-orange-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aqui tem sabor</h3>
              <p className="text-orange-200 mb-4">
                Trazendo o verdadeiro sabor da comida caseira brasileira para sua mesa desde 2008.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-300">
                  <span className="sr-only">Facebook</span>
                  {/* ...icon svg... */}
                </a>
                <a href="#" className="text-white hover:text-orange-300">
                  <span className="sr-only">Instagram</span>
                  {/* ...icon svg... */}
                </a>
                <a href="#" className="text-white hover:text-orange-300">
                  <span className="sr-only">WhatsApp</span>
                  {/* ...icon svg... */}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-orange-200 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-orange-200 hover:text-white transition-colors">
                    Cardápio
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-orange-200 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-orange-200 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/reservas" className="text-orange-200 hover:text-white transition-colors">
                    Reservas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-orange-200">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>7:00h às 20:00h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>7:00h às 20:00h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos e Feriados:</span>
                  <span>7:00h às 16:00h</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-300">
            <p>© {new Date().getFullYear()} Aqui tem sabor. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}