"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function AB() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState("");


function soma() {
    if (a==="" || b==="") return;
    const soma = parseFloat(a) + parseFloat(b);
    setResultado(soma.toFixed());
  }

function subtrair() {
    if (a==="" || b==="") return;
    const subtracao = parseFloat(a) - parseFloat(b);
    setResultado(subtracao.toFixed());
  }

function multiplicar() {
    if (a==="" || b==="") return;
    const produto = parseFloat(a) * parseFloat(b);
    setResultado(produto.toFixed());
  }

function dividir() {
    if (a==="" || b==="") return;
    const divisao = parseFloat(a) / parseFloat(b);
    setResultado(divisao.toFixed());
  }

function limparAB() {
    //Some o Resultado abaixo do Botão
    setResultado();

    //Zera os Valores
    setA("");
    setB("");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4  bg-black-800">
        <h1 className="text-2xl font-bold text-white"> Calculadora</h1>

      <div className="flex flex-col items-center bg-blue-400 p-8 rounded-lg shadow-lg space-y-4 w-80 h-200px">
       
        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">A</label>
          <input type="number" placeholder="Valor de A"className="p-2 border bg-black rounded"
    value={a}
    onChange={(e) => setA(e.target.value)}  />
        </div>

         <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">B</label>
          <input type="number" placeholder="Valor de B" className="p-2 border bg-black rounded"
    value={b}
    onChange={(e) => setB(e.target.value)}  />
        </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={soma}>
            Somar
          </button>
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={subtrair}>
            Subtrair
          </button>
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={multiplicar}>
            Multiplicar
          </button>
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={dividir}>
            Dividir
          </button> 
          </div>

          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-4 py-2 rounded" onClick={limparAB}>
            Limpar
          </button>
 

        {resultado && (
    <div className="mt-4 p-3 bg-black rounded shadow">
      <p><strong>Resultado:</strong> {resultado}</p>
    </div>
        )}

      </div>
      <h1 className="text-2xl font-bold text-white">Senac MG</h1>

         <Link href="/" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
          <Link href="/bhaskara" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Formulário de Bhaskara </Link>
    </div>
  );
}
