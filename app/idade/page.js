"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function ABC() {
  const [anoNascimento, setNascimento] = useState("");
  const [anoAtual, setAtual] = useState("");
  const [idade, setIdade] = useState("");   
  const [resultado, setResultado] = useState("");


function calcularIdade() {
  if (!anoNascimento) return;

  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - parseInt(anoNascimento);

  setResultado(idade);
}

function limparIdade() {
    //Some o Resultado abaixo do Botão
    setResultado();

    //Zera os Valores
    setNascimento("");
    setAtual("");
    setIdade("");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4  bg-black-800">
        <h1 className="text-2xl font-bold text-white"> Calculadora Idade</h1>

      <div className="flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg space-y-4 w-80">
       
        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Ano de Nascimento</label>
          <input type="number" placeholder="Ano de Nascimento"className="p-2 border bg-black rounded"
    value={anoNascimento}
    onChange={(e) => setNascimento(e.target.value)}  />
        </div>

         <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Ano Atual</label>
          <input type="number" placeholder="Ano Atual" className="p-2 border bg-black rounded"
    value={anoAtual}
    onChange={(e) => setAtual(e.target.value)}  />
        </div>


        <div className="flex gap-3 w-full justify-center">
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={calcularIdade}>
            Calcular
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={limparIdade}>
            Limpar
          </button>
        </div>

        {resultado && (
    <div className="mt-4 p-3 bg-black rounded shadow">
      <p><strong>Resultado:</strong> {resultado}</p>
    </div>
        )}

      </div>
      <h1 className="text-2xl font-bold text-white">Senac MG</h1>

         <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
          <Link href="/abc" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para calculadora </Link>
    </div>
  );
}
