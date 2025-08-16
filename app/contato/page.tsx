"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, MapPin, Phone, Clock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
            <Link href="/sobre" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-orange-600 transition-colors text-orange-600">
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
            <Link href="/sobre" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="block py-2 text-sm font-medium hover:text-orange-600 transition-colors text-orange-600">
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
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos à disposição para atender você. Entre em contato conosco para reservas, dúvidas ou sugestões.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Brasil, 1500
                        <br />
                        Centro, São Paulo - SP
                        <br />
                        CEP: 01000-000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Telefones</h3>
                      <p className="text-muted-foreground">
                        Telefone: (11) 3333-4444
                        <br />
                        WhatsApp: (11) 99999-8888
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">E-mail</h3>
                      <p className="text-muted-foreground">
                        contato@aquitemsabor.com.br
                        <br />
                        reservas@aquitemsabor.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Horário de Funcionamento</h3>
                      <ul className="text-muted-foreground space-y-1">
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
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
            <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=1200"
                alt="Mapa de localização do restaurante"
                className="w-full h-full object-cover"
              />
            </div>
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
  )
}
