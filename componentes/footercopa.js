
export default function FooterCopa() {
    return (

<footer className="w-full bg-green-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-400">
          Copa 2026
        </h2>
        <p className="mt-4 text-gray-300">
          Acompanhe notícias, jogos, seleções, estatísticas e tudo sobre a maior competição de futebol do planeta.
        </p>
      </div>

      {/* Navegação */}
      <div>
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">
          Navegação
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Jogos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Seleções
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Classificação
            </a>
          </li>
        </ul>
      </div>

    
    {/* Linha divisória */}
    <div className="border-t border-white/20 mt-10 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-300 text-sm">
          © 2026 Copa do Mundo. Todos os direitos reservados.
        </p>

        <p className="text-sm text-gray-400">
          Desenvolvido para os apaixonados por futebol ⚽
        </p>
      </div>
    </div>
    </div>
  </div>
</footer>
)}