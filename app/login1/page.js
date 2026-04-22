import Link from "next/link"
export default function Login1() {
      return (
    <div class="h-screen">
  <div class="grid h-full grid-cols-[1fr_200px] grid-rows-[80px_1fr_60px]">

    <header class="col-span-2 flex items-center justify-center bg-blue-500 text-xl font-bold text-white">
      Senac - Curso de Aplicativos Web  </header>

    <main class="bg-gray-400 flex p-4">
      
      <h1 class="mb-4 text-white items-center justify-center text-2xl font-bold">Ana Luiza Souza Tomaz </h1>
    </main>

    <aside class="row-span-2 bg-gray-800 p-4 text-white">
      <nav class="flex flex-col gap-2">
      <Link href="/cliente" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Cadastro de cliente</Link>
      <Link href="/produto" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Cadastro de produto</Link>
      <Link href="/fornecedor" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center">Cadastro de fornecedor</Link>
      <Link href="/IMC" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calculadora de IMC</Link>
      <Link href="/ficha" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Ficha de Aluno</Link>
      <Link href="/idade" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calculadora Idade</Link>
      <Link href="/crud" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> CRUD</Link>
      <Link href="/crud2" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> CRUD 2</Link>
      <Link href="/abc" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calculadora</Link>
      <Link href="/bhaskara" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Calculadora de Bhaskara</Link>
      <Link href="/celcius" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Conversor de Celsius</Link>  
      <Link href="/tarefas" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-center"> Minhas Tarefas</Link>      
      </nav>
    </aside>

    <footer class="col flex items-center justify-center bg-gray-900 text-white">
      <Link href="/login" className=" text-white font-bold py-2 px-4 rounded"> Voltar </Link>
    </footer>

  </div>
</div>
  );
}