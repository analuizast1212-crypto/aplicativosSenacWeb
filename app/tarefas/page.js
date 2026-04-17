"use client";
import { useState } from "react";
import Link from "next/link";
 
export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [status, setStatus] = useState("Pendente");
  const [lista, setLista] = useState([]);
 
  function adicionarTarefa(e) {
    e.preventDefault();
 
    if (!tarefa || !data || !hora) {
      alert("Preencha todos os campos!");
      return;
    }
 
    const nova = {
      id: Date.now(),
      tarefa,
      data,
      hora,
      status,
    };
 
    setLista([...lista, nova]);
 
    // limpar
    setTarefa("");
    setData("");
    setHora("");
    setStatus("Pendente");
  }
 
  function remover(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  }
 
  return (
    <main className="min-h-screen bg-gray-500 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">
 
        {/* Título */}
        <h1 className="text-2xl text-black font-bold mb-2">Minhas Tarefas</h1>
        <p className="text-gray-500 mb-6">
          Gerencie suas tarefas de forma simples
        </p>
 
         

        <form onSubmit={adicionarTarefa} className="space-y-4 bg-gray-400 rounded-2xl">
            <div className="mt-8 rounded-3xl bg-gray-400 p-4">
            <h1  className="text-2xl text-black font-bold mb-2">Nova tarefa</h1>

            <div>
            <label className="block font-medium text-black">Tarefa</label>
            <input
              type="text"
              placeholder="Descreva a tarefa..."
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
              className="w-full border  p-2 rounded"
            />
          </div>
 
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-black">Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
 
            <div>
              <label className="text-black">Horário</label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
 
          <div>
            <label className="text-black">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option className="text-black">Pendente</option>
              <option className="text-black">Em andamento</option>
              <option className="text-black">Concluído</option>
            </select>
          </div>
 
          <button className="bg-blue-700 mt-4 text-white px-4 py-2 rounded">
            + Adicionar
          </button>
        </div>
        </form>
 
        {lista.length > 0 && (
         <div className="mt-8 rounded-2xl bg-gray-400 p-4">
           <h2 className="font-semibold rounded mb-2 text-black">Tarefas cadastradas</h2>

          <table className="w-full text-left border rounded">
            <thead className="bg-gray-500 rounded">
              <tr className="text-black rounded">
                <th className="p-2 text-black">Tarefa</th>
                <th className="p-2 text-black">Data</th>
                <th className="p-2 text-black">Hora</th>
                <th className="p-2 text-black">Status</th>
                <th className="p-2 text-black">Ações</th>
              </tr>
            </thead>
 
            <tbody>
              {lista.map((item) => (
                <tr key={item.id} className="border-t bg-gray-400">
                  <td className="p-2">{item.tarefa}</td>
                  <td className="p-2">{item.data}</td>
                  <td className="p-2">{item.hora}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">
                    <button
                      onClick={() => remover(item.id)}
                      className="text-blue-700"
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
      </div>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-6">
        Voltar à página inicial
      </Link>
    </main>
  );
}
