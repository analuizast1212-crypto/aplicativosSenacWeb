"use client";
import { useState } from "react";
import Link from "next/link"
 
export default function CRUD() {
  const [alunos, setAlunos] = useState([]);
 
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");
  const [idade, setIdade] = useState("");
 
  const [editandoIndex, setEditandoIndex] = useState(null);
 
  function cadastrar() {
    if (!nome || !email || !celular || !cidade || !idade) {
      alert("Preencha tudo!");
      return;
    }
 
    if (editandoIndex !== null) {
      // ATUALIZAR
      const lista = [...alunos];
      lista[editandoIndex] = { nome, email, celular, cidade, idade };
      setAlunos(lista);
      setEditandoIndex(null);
    } else {
      // CADASTRAR
      const novo = { nome, email, celular, cidade, idade };
      setAlunos([...alunos, novo]);
    }
 
    limpar();
  }
 
  function excluir(index) {
    const listaNova = alunos.filter((_, i) => i !== index);
    setAlunos(listaNova);
  }
 
  function editar(index) {
    const aluno = alunos[index];
    setNome(aluno.nome);
    setEmail(aluno.email);
    setCelular(aluno.celular);
    setCidade(aluno.cidade);
    setIdade(aluno.idade);
 
    setEditandoIndex(index);
  }
 
  function limpar() {
    setNome("");
    setEmail("");
    setCelular("");
    setCidade("");
    setIdade("");
    setEditandoIndex(null);
  }
 
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
 <h1 className="text-2xl font-bold text-blue-500 mb-4">CRUD de Alunos</h1>
 
      {/* FORM */}
      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-md">
 
        <div className="flex flex-col gap-2">
          <input className="border p-2 rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
 
          <input className="border p-2 rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
 
          <input className="border p-2 rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
 
          <input className="border p-2 rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
 
          <input className="border p-2 rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
 
          {/* BOTÕES */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={cadastrar}
              className="bg-blue-500 hover:bg-blue-500 text-white p-2 rounded w-full"
            >
              {editandoIndex !== null ? "Atualizar" : "Cadastrar"}
            </button>
 
            <button
              onClick={limpar}
              className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded w-full"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
 
      {/* TABELA */}
      {alunos.length > 0 && (
        <div className="font-bold bg-black shadow-md rounded-xl p-5 w-full max-w-4xl mt-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-3 text-blue-500">
            Lista de Alunos
          </h2>
 
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2">Celular</th>
              <th className="p-2">Cidade</th>
              <th className="p-2">Idade</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
 
          <tbody>
            {alunos.map((a, i) => (
              <tr key={i} className="border-b hover:bg-black-100">
                <td className="p-2">{a.nome}</td>
                <td className="p-2">{a.email}</td>
                <td className="p-2">{a.celular}</td>
                <td className="p-2">{a.cidade}</td>
                <td className="p-2">{a.idade}</td>
 
                <td className="p-2 flex gap-2 justify-center">
                  <button
                    onClick={() => editar(i)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Editar
                  </button>
 
                  <button
                    onClick={() => excluir(i)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
               <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white m-5 font-bold py-2 px-4 rounded">
          Voltar à página inicial </Link>
          <Link href="/idade" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir para Calculadora de idade </Link>
    </div>
  );
}