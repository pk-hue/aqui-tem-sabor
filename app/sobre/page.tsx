"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSobreDropdownOpen(false);
      }
    }
    if (sobreDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sobreDropdownOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-600">Aqui tem sabor</span>
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors ">
              Início
            </Link>
            <Link href="/menu" className="text-sm font-medium ">
              Cardápio
            </Link>
            <Link href="/sobre" className="text-sm font-medium hover:text-orange-600 transition-colors text-orange-600">
              Sobre
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button variant="default" className="bg-orange-600 hover:bg-orange-700 hidden md:flex">
            Reservar Mesa
          </Button>
          {/* Mobile Menu Button */}
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
        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-b border-orange-200 px-4 py-2">
            <Link href="/" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors">
              Início
            </Link>
            <Link href="/menu" className="block py-2 text-sm font-medium ">
              Cardápio
            </Link>
            <Link href="/sobre" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors text-orange-600">
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
            <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça a história do restaurante Aqui tem sabor e nossa paixão pela culinária brasileira.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Fachada do restaurante"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg mb-4">
                Fundado em 2008 pela família Silva, o restaurante "Aqui tem sabor" nasceu do sonho de compartilhar
                receitas tradicionais passadas de geração em geração.
              </p>
              <p className="text-lg mb-4">
                Tudo começou quando Dona Maria, matriarca da família, decidiu transformar seu talento na cozinha em um
                negócio que pudesse levar a autêntica comida caseira brasileira para mais pessoas.
              </p>
              <p className="text-lg mb-4">
                O que começou como um pequeno estabelecimento com apenas 5 mesas, hoje é um dos restaurantes mais
                queridos da cidade, reconhecido pela qualidade dos pratos e pelo ambiente acolhedor.
              </p>
              <p className="text-lg">
                Mantemos viva a tradição e o carinho em cada prato que servimos, sempre com ingredientes frescos e
                receitas que carregam a história e a cultura do nosso país.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossa Missão e Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os princípios que guiam nosso trabalho todos os dias.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-orange-600"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Missão</h3>
                  <p className="text-muted-foreground">
                    Proporcionar uma experiência gastronômica autêntica, valorizando ingredientes locais e técnicas
                    culinárias que preservam o verdadeiro sabor da comida caseira brasileira.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-orange-600"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecido como referência em gastronomia brasileira, levando o sabor autêntico da nossa
                    culinária para cada vez mais pessoas, preservando nossas tradições e inovando com responsabilidade.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-orange-600"
                    >
                      <path d="M12 22v-5" />
                      <path d="M9 7V2" />
                      <path d="M15 7V2" />
                      <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-2a3 3 0 0 0-6 0v2a3 3 0 0 1-3 3h12a3 3 0 0 0 3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Valores</h3>
                  <p className="text-muted-foreground">
                    Qualidade, autenticidade, respeito às tradições culinárias, valorização dos produtores locais,
                    sustentabilidade e compromisso com a satisfação dos nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os profissionais apaixonados que fazem parte da família Aqui tem sabor.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Carlos Silva",
                  role: "Chef Executivo",
                  image: "chef+brasileiro+homem",
                },
                {
                  name: "Ana Oliveira",
                  role: "Chef de Cozinha",
                  image: "chef+brasileiro+mulher",
                },
                {
                  name: "Roberto Santos",
                  role: "Gerente",
                  image: "gerente+restaurante+homem",
                },
                {
                  name: "Juliana Costa",
                  role: "Sommelier",
                  image: "sommelier+mulher+brasileira",
                },
              ].map((person, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300&query=${person.image}`}
                    alt={person.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-lg">{person.name}</h3>
                    <p className="text-muted-foreground">{person.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">O que nossos clientes dizem sobre nós.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Mariana Alves",
                  text: "A comida é simplesmente incrível! Cada prato traz aquele gostinho de comida caseira que só encontramos na casa da vovó. Recomendo demais!",
                  rating: 5,
                },
                {
                  name: "Pedro Mendes",
                  text: "Ambiente acolhedor, atendimento impecável e pratos deliciosos. A feijoada de sábado é a melhor da cidade, sem dúvidas!",
                  rating: 5,
                },
                {
                  name: "Luciana Ferreira",
                  text: "Frequento o Aqui tem sabor há anos e nunca me decepcionei. Os pratos são sempre frescos e saborosos, e o atendimento é sempre atencioso.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#FFA500"
                          stroke="#FFA500"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Venha nos Conhecer</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Estamos esperando por você para proporcionar uma experiência gastronômica inesquecível.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="bg-orange-900 text-white py-12 mt-12">
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
