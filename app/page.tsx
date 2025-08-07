"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link href="/menu" className="text-sm font-medium hover:text-orange-600 transition-colors">
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
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
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
        {menuOpen && (
          <nav className="md:hidden absolute left-0 top-16 w-full bg-background border-b z-50 shadow-lg">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 rounded hover:bg-orange-100 text-orange-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="block py-2 px-4 rounded hover:bg-orange-100 text-orange-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="block py-2 px-4 rounded hover:bg-orange-100 text-orange-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="block py-2 px-4 rounded hover:bg-orange-100 text-orange-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Button
                  variant="default"
                  className="w-full bg-orange-600 hover:bg-orange-700 mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Reservar Mesa
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Restaurante Aqui tem sabor"
            className="w-full h-[500px] object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-[500px] text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Aqui tem sabor</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experimente o verdadeiro sabor da comida caseira com ingredientes frescos e receitas tradicionais
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/menu" className="flex items-center">
                Cardápio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
                Fazer Reserva
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Destaques</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos pratos mais amados pelos nossos clientes, preparados com carinho e ingredientes
              selecionados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Frango grelhado",
                description:
                  "Nosso peito de frango grelhado no ponto certo, temperado com ervas e especiarias, acompanha arroz branco e salada fresca.",
                price: "R$ 20,00",
                image: "feijoada+brasileira",
              },
              {
                name: "Parmegiana de carne",
                description:
                  "Clássica parmegiana de carne com molho caseiro de tomate, queijo gratinado, servida com arroz branco e batata frita crocante.",
                price: "R$ 25,00",
                image: "moqueca+de+peixe",
              },
              {
                name: "Baião de dois",
                description: "Tradicional baião de dois nordestino com arroz, feijão verde, carne seca desfiada e queijo coalho derretido.",
                price: "R$ 25,00",
                image: "picanha+brasileira",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=500&query=${item.image}`}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="font-bold text-orange-600">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Pedir Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="default" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/menu" className="flex items-center">
                Ver Cardápio Completo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-orange-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O Aqui tem sabor nasceu em 2025, com uma cozinheira experiente e uma coordenadora que cuida de cada detalhe. Servimos pratos cheios de sabor, feitos com carinho e uma apresentação que dá água na boca!
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Nossa equipe"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
                <p className="mb-4">
                  Tudo começou em 2025, quando uma cozinheira apaixonada pela cozinha e uma coordenadora cheia de experiência decidiram unir forças para criar algo especial.
                </p>
                <p className="mb-4">
                  Assim nasceu o Aqui tem sabor, um lugar onde cada prato é feito com cuidado, sabor de verdade e aquele capricho que a gente não abre mão.
                </p>
                <p className="mb-6">
                  Desde então, seguimos com o mesmo propósito: oferecer refeições que marcam pelo sabor e pela beleza. Cada detalhe do nosso cardápio foi pensado para trazer conforto, tradição e aquele gostinho de comida feita com amor.
                </p>
                <Button variant="default" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/sobre">
                    Conheça Nossa História
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-100 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Localização</h3>
                <p className="text-muted-foreground">
                  R. Pirajibe - N° 346
                  <br />
                  Vila Itaberaba, São Paulo - SP
                  <br />
                  CEP: 02847-001
                </p>
                <Button variant="link" className="text-orange-600 mt-2">
                  Ver no Mapa
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-100 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 7:00h às 20:00h | 7:00h às 20:00h
                  <br />
                  Sábados: 7:00h às 20:00h
                  <br />
                  Domingos e Feriados: 7:00h às 16:00h
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-100 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contato</h3>
                <p className="text-muted-foreground">
                  Telefone: (11) 94580-0353
                  <br />
                  WhatsApp: (11) 93272-9126
                  <br />
                  Email: sqbebe@gmail.com
                </p>
                <Button variant="link" className="text-orange-600 mt-2">
                  Fale Conosco
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-orange-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aqui tem sabor</h3>
              <p className="text-orange-200 mb-4">
                Trazendo o verdadeiro sabor da comida caseira brasileira para sua mesa.
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
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-orange-200 mb-4">
                Inscreva-se para receber nossas novidades, promoções e eventos especiais.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 rounded-md flex-1 text-black"
                  required
                />
                <Button className="bg-orange-600 hover:bg-orange-700">Inscrever</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-300">
            <p>© {new Date().getFullYear()} Aqui tem sabor. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}