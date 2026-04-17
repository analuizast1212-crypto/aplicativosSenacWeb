"use client";
import { useState } from "react";
import Link from "next/link"

export default function Baskara() {
const [a, setA] = useState("");
const [b, setB] = useState("");
const [c, setC] = useState("");
const [passos, setPassos] = useState([]);

function calcular() {
 if (a === "" || b === "" || c === "") {
 setPassos(["Preencha todos os campos!"]);
 return;
}

const A = Number(a);
const B = Number(b);
const C = Number(c);

if (A === 0) {
setPassos(["O valor de 'a' não pode ser 0"]);
return;
 }

 const delta = (B * B) - (4 * A * C);
     let lista = [];
     lista.push(`Equação: ${A}x² + (${B})x + (${C}) = 0`);
     lista.push(`Δ = ${B}² - 4·${A}·${C}`);
     lista.push(`Δ = ${delta}`);

     if (delta < 0) {
        lista.push("Não existem raízes reais");
        setPassos(lista);
        return;
}
    const raizDelta = Math.sqrt(delta);
    lista.push(`x₁ = (-(${B}) + √${delta}) / (2·${A})`);
    lista.push(`x₂ = (-(${B}) - √${delta}) / (2·${A})`);
   
    const x1 = (-B + raizDelta) / (2 * A);
    const x2 = (-B - raizDelta) / (2 * A);

    lista.push(`x₁ = ${x1.toFixed(2)}`);
    lista.push(`x₂ = ${x2.toFixed(2)}`);
    setPassos(lista);
    }

    function limpar() {
    setA("");
    setB("");
    setC("");
    setPassos([]);
    }

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 rounded">
            <div className="bg-blue-400 p-6 rounded-2xl shadow-xl w-80">
                <h1 className="text-2xl font-bold text-center mb-4 text-black">Bhaskara</h1>

            <input
                    type="number"
                    placeholder="Valor de A"
                    className="w-full p-2 mb-2 border rounded text-black"
                    value={a}
                    onChange={(e) => setA(e.target.value)}

             />
           <input

                    type="number"
                    placeholder="Valor de B"
                    className="w-full p-2 mb-2 border rounded text-black"
                    value={b}
                    onChange={(e) => setB(e.target.value)}

            />
            <input
                    type="number"
                    placeholder="Valor de C"
                    className="w-full p-2 mb-4 border rounded text-black"
                    value={c}
                    onChange={(e) => setC(e.target.value)}

            />
           <button onClick={calcular} className="w-full bg-blue-500 hover:bg-blue-700 text-white m-4 rounded mb-2 p-2">Calcular</button>

            <button onClick={limpar} className="w-full bg-gray-500 text-white m-4 p-2 rounded">Limpar</button>
                <div className="mt-4 text-sm text-white">
                    {passos.map((p, i) => (
                        <p key={i}> {p}</p>
                    ))}

                </div>
     </div>

         <Link href="/" className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
          <Link href="/Celsius" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Conversor de Celsius </Link>

     </div>
 );
}


