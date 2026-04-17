"use client";
import { useState } from "react";
import Link from "next/link"

export default function Celsius() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  function converter() {
    if (celsius !== "") {
      const valor = parseFloat(celsius);
      const fahrenheit = (valor * 9 / 5) + 32;
      setResultado(fahrenheit.toFixed(2));
      console.log("Valor em Fahrenheit:", fahrenheit);
    } else {
      setResultado("Valor inválido");
    }
  }

  function limpar() {
    setCelsius("");
    setResultado("");
  }

  return (
    <div className="flex flex-col items-center mt-10 justify-center min-h-screen bg-black p-4">
      <div className="bg-blue-500 p-6 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Conversor de Celsius</h1>

        <input type="number"placeholder="Valor de Celsius" mt-4 className="w-full p-2 mb-2 border rounded text-white" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        <button onClick={converter}className="w-full mt-4 bg-blue-700 text-white m-2 rounded p-2" > Converter</button>
        <button onClick={limpar} className="w-full mt-4 bg-gray-500 text-white m-2 p-2 rounded">Limpar</button>

        {resultado && (
          <p className="text-center text-black mt-4">
            Resultado: {resultado} °F
          </p>
        )}

      </div>

      <Link href="/" className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
    </div>
  );
}

