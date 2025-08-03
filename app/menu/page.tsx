import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  const menuCategories = [
    {
      id: "entradas",
      name: "Entradas",
      items: [
        {
          name: "Bolinho de Bacalhau",
          description: "Bolinhos crocantes de bacalhau, servidos com molho especial da casa.",
          price: "R$ 32,90",
          image: "bolinho+de+bacalhau",
        },
        {
          name: "Coxinha de Frango",
          description: "Coxinhas de frango com catupiry, massa leve e crocante.",
          price: "R$ 28,90",
          image: "coxinha+brasileira",
        },
        {
          name: "Dadinho de Tapioca",
          description: "Cubinhos de tapioca com queijo coalho, servidos com geleia de pimenta.",
          price: "R$ 26,90",
          image: "dadinho+de+tapioca",
        },
        {
          name: "Pastel de Carne",
          description: "Pastéis crocantes recheados com carne moída temperada.",
          price: "R$ 24,90",
          image: "pastel+brasileiro",
        },
      ],
    },
    {
      id: "principais",
      name: "Pratos Principais",
      items: [
        {
          name: "Feijoada Completa",
          description: "Nossa tradicional feijoada com carnes selecionadas, acompanha arroz, couve, farofa e laranja.",
          price: "R$ 45,90",
          image: "feijoada+brasileira",
        },
        {
          name: "Moqueca de Peixe",
          description: "Deliciosa moqueca preparada com peixe fresco, leite de coco, pimentões e temperos especiais.",
          price: "R$ 52,90",
          image: "moqueca+de+peixe",
        },
        {
          name: "Picanha na Brasa",
          description: "Suculenta picanha grelhada na brasa, acompanha vinagrete, farofa e batatas rústicas.",
          price: "R$ 68,90",
          image: "picanha+brasileira",
        },
        {
          name: "Baião de Dois",
          description: "Arroz com feijão de corda, queijo coalho, carne seca e linguiça calabresa.",
          price: "R$ 42,90",
          image: "baiao+de+dois",
        },
        {
          name: "Bobó de Camarão",
          description: "Camarões em delicioso creme de mandioca, leite de coco e dendê.",
          price: "R$ 58,90",
          image: "bobo+de+camarao",
        },
        {
          name: "Carne de Sol com Mandioca",
          description: "Carne de sol grelhada com mandioca frita, cebola e manteiga de garrafa.",
          price: "R$ 49,90",
          image: "carne+de+sol+com+mandioca",
        },
      ],
    },
    {
      id: "sobremesas",
      name: "Sobremesas",
      items: [
        {
          name: "Pudim de Leite",
          description: "Clássico pudim de leite condensado com calda de caramelo.",
          price: "R$ 18,90",
          image: "pudim+de+leite",
        },
        {
          name: "Brigadeirão",
          description: "Torta cremosa de chocolate com granulado.",
          price: "R$ 16,90",
          image: "brigadeirao",
        },
        {
          name: "Cocada Cremosa",
          description: "Cocada mole servida quente com sorvete de creme.",
          price: "R$ 22,90",
          image: "cocada+cremosa",
        },
        {
          name: "Cartola",
          description: "Banana frita com queijo coalho, açúcar e canela.",
          price: "R$ 19,90",
          image: "cartola+sobremesa+brasileira",
        },
      ],
    },
    {
      id: "bebidas",
      name: "Bebidas",
      items: [
        {
          name: "Caipirinha",
          description: "Clássica caipirinha de limão, também disponível em outros sabores.",
          price: "R$ 24,90",
          image: "caipirinha",
        },
        {
          name: "Suco de Frutas Naturais",
          description: "Diversos sabores: laranja, abacaxi, maracujá, limão e mais.",
          price: "R$ 12,90",
          image: "suco+natural+brasileiro",
        },
        {
          name: "Água de Coco",
          description: "Água de coco natural e gelada.",
          price: "R$ 9,90",
          image: "agua+de+coco",
        },
        {
          name: "Refrigerante",
          description: "Diversas opções de refrigerantes.",
          price: "R$ 7,90",
          image: "refrigerante",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-600">Aqui tem sabor</span>
          </Link>
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
          <Button variant="outline" size="icon" className="md:hidden bg-transparent">
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
              Descubra os sabores autênticos da culinária brasileira, preparados com ingredientes frescos e muito
              carinho.
            </p>
          </div>

          <Tabs defaultValue="entradas" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="overflow-hidden flex flex-col md:flex-row">
                      <img
                        src={`/placeholder.svg?height=200&width=200&query=${item.image}`}
                        alt={item.name}
                        className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                      />
                      <CardContent className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <span className="font-bold text-orange-600">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-300">
                  <span className="sr-only">Instagram</span>
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-300">
                  <span className="sr-only">WhatsApp</span>
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
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                    <path d="M20.52 3.449a12.826 12.826 0 0 0-9.097-3.449c-7.11 0-12.9 5.79-12.9 12.9 0 2.269.584 4.49 1.689 6.445l-1.79 6.533 6.694-1.757a12.836 12.836 0 0 0 6.135 1.562c7.11 0 12.901-5.79 12.901-12.9 0-3.459-1.336-6.698-3.76-9.134zm-9.097 19.861a10.69 10.69 0 0 1-5.458-1.495l-.393-.233-4.055 1.064 1.083-3.952-.25-.396a10.742 10.742 0 0 1-1.657-5.75c0-5.92 4.817-10.737 10.737-10.737s10.737 4.817 10.737 10.736-4.817 10.737-10.737 10.737z" />
                  </svg>
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
                  <span>11h às 15h | 18h às 23h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>11h às 23h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos e Feriados:</span>
                  <span>11h às 22h</span>
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
