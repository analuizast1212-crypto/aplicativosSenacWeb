const jogadores = [
  {
    nome: "Alisson Becker",
    idade: 33,
    time: "Liverpool",
    posicao: "Goleiro",
    imagem: "alisson.webp",
  },
  {
    nome: "Ederson",
    idade: 32,
    time: "Manchester City",
    posicao: "Goleiro",
    imagem: "ederson.webp",
  },
  {
    nome: "Weverton",
    idade: 38,
    time: "Palmeiras",
    posicao: "Goleiro",
    imagem: "everton.webp",
  },
  {
    nome: "Danilo",
    idade: 35,
    time: "Flamengo",
    posicao: "Lateral Direito",
    imagem: "danilo.webp",
  },
  {
    nome: "Wesley",
    idade: 23,
    time: "Flamengo",
    posicao: "Lateral Direito",
    imagem: "wesley.webp",
  },
  {
    nome: "Alex Sandro",
    idade: 35,
    time: "Flamengo",
    posicao: "Lateral Esquerdo",
    imagem: "alexsandro.webp",
  },
  {
    nome: "Douglas Santos",
    idade: 32,
    time: "Zenit",
    posicao: "Lateral Esquerdo",
    imagem: "douglassantos.webp",
  },
  {
    nome: "Marquinhos",
    idade: 32,
    time: "Paris Saint-Germain",
    posicao: "Zagueiro",
    imagem: "marquinhos.webp",
  },
  {
    nome: "Gabriel Magalhães",
    idade: 28,
    time: "Arsenal",
    posicao: "Zagueiro",
    imagem: "magalhaes.webp",
  },
  {
    nome: "Bremer",
    idade: 29,
    time: "Juventus",
    posicao: "Zagueiro",
    imagem: "bremer.webp",
  },
  {
    nome: "Léo Pereira",
    idade: 30,
    time: "Flamengo",
    posicao: "Zagueiro",
    imagem: "leopereira.webp",
  },
  {
    nome: "Casemiro",
    idade: 34,
    time: "Manchester United",
    posicao: "Volante",
    imagem: "casemiro.webp",
  },
  {
    nome: "Bruno Guimarães",
    idade: 28,
    time: "Newcastle United",
    posicao: "Meio-Campo",
    imagem: "bruno guimaraes.webp",
  },
  {
    nome: "Lucas Paquetá",
    idade: 29,
    time: "West Ham",
    posicao: "Meio-Campo",
    imagem: "paqueta.webp",
  },
  {
    nome: "Danilo Santos",
    idade: 24,
    time: "Nottingham Forest",
    posicao: "Meio-Campo",
    imagem: "danilo.webp",
  },
  {
    nome: "Fabinho",
    idade: 32,
    time: "Al-Ittihad",
    posicao: "Volante",
    imagem: "fabinho.webp",
  },
  {
    nome: "Neymar Jr",
    idade: 34,
    time: "Santos",
    posicao: "Atacante",
    imagem: "ney.webp",
  },
  {
    nome: "Vinícius Júnior",
    idade: 26,
    time: "Real Madrid",
    posicao: "Atacante",
    imagem: "vinijr.webp",
  },
  {
    nome: "Rodrygo",
    idade: 25,
    time: "Real Madrid",
    posicao: "Atacante",
    imagem: "rodrygo.webp",
  },
  {
    nome: "Rafinha",
    idade: 29,
    time: "Barcelona",
    posicao: "Atacante",
    imagem: "rafinha.webp",
  },
  {
    nome: "Endrick",
    idade: 20,
    time: "Real Madrid",
    posicao: "Atacante",
    imagem: "endrick.webp",
  },
  {
    nome: "Gabriel Martinelli",
    idade: 25,
    time: "Arsenal",
    posicao: "Atacante",
    imagem: "martinelli.webp",
  },
  {
    nome: "Matheus Cunha",
    idade: 27,
    time: "Manchester United",
    posicao: "Atacante",
    imagem: "cunha.webp",
  },
  {
    nome: "Luiz Henrique",
    idade: 25,
    time: "Zenit",
    posicao: "Atacante",
    imagem: "luizh.webp",
  },
  {
    nome: "Igor Thiago",
    idade: 25,
    time: "Brentford",
    posicao: "Centroavante",
    imagem: "igor.webp",
  },
  {
    nome: "Rayan",
    idade: 19,
    time: "Vasco da Gama",
    posicao: "Atacante",
    imagem: "rayan.webp",
  },
];


export default function Jogadores() {
  return (
    <section className="w-full py-10 px-6 bg-gradient-to-b from-green-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-4">
          Jogadores da Seleção Brasileira
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Conheça alguns dos craques que representam o Brasil na busca
          pelo tão sonhado hexacampeonato.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jogadores.map((jogador, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={jogador.imagem}
                alt={jogador.nome}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-500">
                  {jogador.nome}
                </h3>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Idade:</span> {jogador.idade} anos
                  </p>

                  <p>
                    <span className="font-semibold">Clube Atual:</span> {jogador.time}
                  </p>

                  <p>
                    <span className="font-semibold">Posição:</span> {jogador.posicao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}