import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black p-20 min-h-screen">

      <div className="flex flex-col items-center p-10">      
        <h1 className="text-4xl font-bold text-blue-300">
          Olá, Seja Bem-vindo!
        </h1>
        <h2 className="text-xl font-semibold text-white">
          Aplicativos Web do Curso Senac 2026
        </h2>
        <h3 className="text-xl font-semibold text-white">
          Turma 027
        </h3>
      </div>

      {/* Container dos botões */}
      <div className="flex flex-col items-center space-y-4 bg-black p-10 rounded-lg shadow-lg">

        <Link href="/cliente">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Cadastro de cliente
          </button>
        </Link>

        <Link href="/produto">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Produto
          </button>
        </Link>

        <Link href="/fornecedor">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Fornecedor
          </button>
        </Link>

        <Link href="/IMC">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            IMC
          </button>
        </Link>

        <Link href="/ficha">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Ficha
          </button>
        </Link>

        <Link href="/crud">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            CRUD
          </button>
        </Link>

        <Link href="/crud2">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            CRUD 2
          </button>
        </Link>

        <Link href="/idade">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Calculadora Idade
          </button>
        </Link>

        <Link href="/abc">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Calculadora
          </button>
        </Link>

        <Link href="/bhaskara">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Fórmula de Bhaskara
          </button>
        </Link>

        <Link href="/Celsius">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Conversor de Temperatura
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Login
          </button>
        </Link>

        <Link href="/tarefas">
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-48 font-bold py-2 rounded">
            Tarefas
          </button>
        </Link>

      </div>

    </div>
  );
}