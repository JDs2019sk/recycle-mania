import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-bold text-xl">♻️ Recycle Mania</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Início
              </a>
              <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Como Funciona
              </a>
              <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Pontos
              </a>
              <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Prêmios
              </a>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-green-700 p-2 rounded-md"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-3">
              <a
                href="#"
                className="block hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Início
              </a>
              <a
                href="#"
                className="block hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Como Funciona
              </a>
              <a
                href="#"
                className="block hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Pontos
              </a>
              <a
                href="#"
                className="block hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Prêmios
              </a>
              <button className="w-full mt-2 bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transforme reciclagem em recompensas
              </h1>
              <p className="text-lg mb-8">
                Junte-se a nós na missão de tornar o mundo mais sustentável
                enquanto ganha pontos e prêmios incríveis.
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 shadow-lg">
                Começar Agora
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Placeholder para uma ilustração */}
              <div className="bg-green-500 h-64 rounded-lg shadow-xl flex items-center justify-center">
                <span className="text-6xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">Recicle</h3>
              <p className="text-gray-600">
                Separe seus resíduos e leve-os aos pontos de coleta parceiros.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Acumule Pontos</h3>
              <p className="text-gray-600">
                Ganhe pontos por cada item reciclado corretamente.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Ganhe Prêmios</h3>
              <p className="text-gray-600">
                Troque seus pontos por produtos e descontos exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a milhares de pessoas que já estão fazendo a diferença.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 shadow-lg">
            Criar Conta Grátis
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Recycle Mania</h3>
              <p className="text-gray-400">
                Transformando o mundo, um resíduo de cada vez.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Parceiros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  📱
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Recycle Mania. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
