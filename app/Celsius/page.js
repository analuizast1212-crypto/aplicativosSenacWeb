"use client";
import { useState } from "react";
import Link from "next/link";

export default function Celsius() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  function converter() {
    if (celsius !== "") {
      const valor = parseFloat(celsius);
      const fahrenheit = (valor * 9 / 5) + 32;
      setResultado(fahrenheit.toFixed(2));
    } else {
      setResultado("Valor inválido");
    }
  }

  function limpar() {
    setCelsius("");
    setResultado("");
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 gap-6">
      
      {/* CARD */}
      <div className="bg-blue-500 p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">
          Conversor de Celsius
        </h1>

        <input
          type="number"
          placeholder="Valor de Celsius"
          className="w-full p-2 mb-2 border rounded text-black"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />

        {/* BOTÕES */}
        <div className="flex flex-col gap-2 mt-3">
          <button
            onClick={converter}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded p-2"
          >
            Converter
          </button>

          <button
            onClick={limpar}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
          >
            Limpar
          </button>
        </div>

        {/* RESULTADO */}
        {resultado && (
          <p className="text-center text-black mt-4 bg-white p-2 rounded">
            Resultado: {resultado} °F
          </p>
        )}
      </div>

      {/* LINK */}
      <div className="flex flex-col items-center gap-3 w-full max-w-sm">
        <Link
          href="/"
          className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Voltar à página inicial
        </Link>

        <Link
          href="/tarefas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ir para Tarefas
        </Link>
      </div>
    </div>
  );
}

