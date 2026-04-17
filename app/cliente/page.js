import Link from "next/link"
export default function Cliente() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-blue-500">Cadastro de Clientes</h1>

     <h2>Nome do cliente:</h2>
     <input type="text" placeholder="Digite o nome do cliente" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Email:</h2>
     <input type="email" placeholder="Digite o email do cliente" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Telefone:</h2>
     <input type="text" placeholder="Digite o telefone do cliente" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>CPF:</h2>
    <input type="text" placeholder="Digite o CPF do cliente" className="border border-gray-300 rounded px-4 py-2 mb-4" />
     <h2>Endereço:</h2>
     <input type="text" placeholder="Digite o endereço do cliente" className="border border-gray-300 rounded px-4 py-2 mb-4" />

   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Cadastrar </button>

     <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar </Link>
    <Link href="/produto" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Produto </Link>
    </div>
   
  );
}
