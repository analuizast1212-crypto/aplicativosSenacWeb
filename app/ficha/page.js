"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function Ficha() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setidade] = useState("");

function gerarFicha() {
    if (!nome || !email || !telefone || !idade) return;
    setResultado({ nome, email, telefone, idade });
  }

function limparFicha() {
    //Some o Resultado abaixo do Botão
    setResultado(null);

    //Zera os Valores
    setNome("");
    setEmail("");
    setTelefone("");
    setidade("");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4  bg-black-800">
        <h1 className="text-2xl font-bold text-white"> Ficha de Aluno</h1>

      <div className="flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg space-y-4 w-80">
       
        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Nome:</label>
          <input type="text" placeholder="Nome completo" className="p-2 border bg-black rounded"
    value={nome}
    onChange={(e) => setNome(e.target.value)}  />
        </div>

         <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Email:</label>
          <input type="email" placeholder="Email" className="p-2 border bg-black rounded"
    value={email}
    onChange={(e) => setEmail(e.target.value)}  />
        </div>

        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Telefone:</label>
          <input type="text" placeholder="Telefone" className="p-2 border bg-black rounded"
    value={telefone}
    onChange={(e) => setTelefone(e.target.value)}  />
        </div>

        <div className="w-full flex flex-col space-y-2">
          <label className="font-semibold text-white">Idade:</label>
          <input type="number" placeholder="Idade" className="p-2 border bg-black rounded"
    value={idade}
    onChange={(e) => setidade(e.target.value)}  />
        </div>

        <div className="flex gap-3 w-full justify-center">
          <button className="bg-orange-400 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={gerarFicha}>
            Gerar Ficha
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded" onClick={limparFicha}>
            Limpar
          </button>
        </div>

      </div>

      <div className="ficha text-black">
            {nome && (
            <div className="mt-4 p-3 bg-blue-100 rounded shadow">
          <h2><strong>Nome:</strong> {nome}</h2>
          </div> )}

           {email && (
            <div className="mt-4 p-3 bg-blue-100 rounded shadow">
          <h2><strong>Email:</strong> {email}</h2>
          </div> )}

           {telefone && (
            <div className="mt-4 p-3 bg-blue-100 rounded shadow">
          <h2><strong>Telefone:</strong> {telefone}</h2>
          </div> )}

           {idade && (
            <div className="mt-4 p-3 bg-blue-100 rounded shadow">
          <h2><strong>Idade:</strong> {idade}</h2>
          </div> )}

      </div>

      <h1 className="text-2xl font-bold text-white">Senac MG</h1>

         <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
          <Link href="/crud" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para CRUD </Link>
          
    </div>
  );
  }