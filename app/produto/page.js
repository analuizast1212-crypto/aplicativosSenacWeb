import Link from "next/link"
export default function Produto() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-blue-500">Cadastro de Produtos</h1>

     <h2>Nome do produto:</h2>
     <input type="text" placeholder="Digite o nome do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2> Código do produto:</h2>
     <input type="text" placeholder="Digite o código do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Preço:</h2>
     <input type="text" placeholder="Digite o preço do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Quantidade:</h2>
     <input type="text" placeholder="Digite a quantidade do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Descrição:</h2>
     <input type="text" placeholder="Digite a descrição do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Cadastrar </button>
     <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar </Link>
    <Link href="/fornecedor" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Fornecedor </Link>
    </div>
    
  );
}