import Link from "next/link"
export default function Fornecedor() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-blue-500">Cadastro de Fornecedores</h1>

     <h2>Nome do fornecedor:</h2>
     <input type="text" placeholder="Digite o nome do fornecedor" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2> CNPJ:</h2>
     <input type="text" placeholder="Digite o CNPJ do fornecedor" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Endereço:</h2>
     <input type="text" placeholder="Digite o endereço do fornecedor" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Telefone:</h2>
     <input type="text" placeholder="Digite o telefone do fornecedor" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Preço:</h2>
     <input type="text" placeholder="Digite o preço do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Quantidade:</h2>
     <input type="text" placeholder="Digite a quantidade do produto" className="border border-gray-300 rounded px-4 py-2 mb-4" />

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Cadastrar </button>
     <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar </Link>
    <Link href="/IMC" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Imc </Link>
    </div>
  );
}