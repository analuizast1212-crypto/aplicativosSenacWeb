"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");

function calcularIMC() {
    if (!peso || !altura) return;
    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));

    //Teste Condicional
    if (imc < 18.5) setClassificacao("Abaixo do peso");
    else if (imc < 25) setClassificacao("Peso normal");
    else if (imc < 30) setClassificacao("Sobrepeso");
    else setClassificacao("Obesidade");
  }

function limparImc() {
    //Some o Resultado abaixo do Botão
    setResultado(null);

    //Zera os Valores
    setClassificacao("");
    setAltura("");
    setPeso("");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4  bg-black-800">
        <h1 className="text-2xl font-bold text-white"> Calculadora de IMC</h1>

      <div className="flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg space-y-4 w-80">
       
        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Altura:</label>
          <input type="number" placeholder="Altura (m) Ex: 1.80"className="p-2 border bg-black rounded"
    value={altura}
    onChange={(e) => setAltura(e.target.value)}  />
        </div>

         <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Peso:</label>
          <input type="number" placeholder="Peso (kg) Ex: 70.5" className="p-2 border bg-black rounded"
    value={peso}
    onChange={(e) => setPeso(e.target.value)}  />
        </div>

        <div className="flex gap-3 w-full justify-center">
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={calcularIMC}>
            Calcular
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={limparImc}>
            Limpar
          </button>
        </div>

        {resultado && (
    <div className="mt-4 p-3 bg-black rounded shadow">
      <p><strong>IMC:</strong> {resultado}</p>
      <p><strong>Classificação:</strong> {classificacao}</p>
    </div>
        )}

      </div>
      <h1 className="text-2xl font-bold text-white">Senac MG</h1>

         <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
        <Link href="/ficha" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Ficha de Aluno </Link>

        
    </div>
  );
}
