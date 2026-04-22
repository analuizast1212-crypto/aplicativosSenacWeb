"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);

  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [status, setStatus] = useState("Pendente");

  const [editId, setEditId] = useState(null);

  // ADICIONAR OU EDITAR
  function handleSubmit(e) {
    e.preventDefault();

    const novaTarefa = { tarefa, data, hora, status };

    if (editId !== null) {
      const novasTarefas = [tarefas];
      novasTarefas[editId] = novaTarefa;
      setTarefas(novasTarefas);
      setEditId(null);
    } else {
      setTarefas([...tarefas, novaTarefa]);
    }

    limparCampos();
  }

  // EDITAR
  function handleEdit(index) {
    const t = tarefas[index];
    setTarefa(t.tarefa);
    setData(t.data);
    setHora(t.hora);
    setStatus(t.status);
    setEditId(index);
  }

  // REMOVER
  function handleDelete(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  // LIMPAR
  function limparCampos() {
    setTarefa("");
    setData("");
    setHora("");
    setStatus("Pendente");
  }

  return (
    <main className="min-h-screen bg-black p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl text-black font-bold mb-2">
          Minhas Tarefas
        </h1>
        <p className="text-gray-500 mb-6">
          Gerencie suas tarefas de forma simples
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-400 rounded-2xl">
          <div className="mt-8 rounded-3xl bg-gray-400 p-4">
            <h1 className="text-2xl text-black font-bold mb-2">
              {editId !== null ? "Editar tarefa" : "Nova tarefa"}
            </h1>

            <div>
              <label className="block font-medium text-black">Tarefa</label>
              <input
                type="text"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                className="w-full text-black border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-black">Data</label>
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="w-full text-black border p-2 rounded"
                />
              </div>

              <div>
                <label className="text-black">Horário</label>
                <input
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  className="w-full text-black border p-2 rounded"
                />
              </div>
            </div>

            <div>
              <label className="text-black">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full text-black border p-2 rounded"
              >
                <option>Pendente</option>
                <option>Em andamento</option>
                <option>Concluído</option>
              </select>
            </div>

            <button className="bg-blue-700 mt-4 text-white px-4 py-2 rounded">
              {editId !== null ? "Atualizar" : "+ Adicionar"}
            </button>
          </div>
        </form>

        {tarefas.length > 0 && (
          <div className="mt-8 rounded-2xl bg-gray-400 p-4">
            <h2 className="font-semibold mb-2 text-black">
              Tarefas cadastradas
            </h2>

            <table className="w-full text-left border rounded">
              <thead className="bg-gray-500">
                <tr className="text-black">
                  <th className="p-2">Tarefa</th>
                  <th className="p-2">Data</th>
                  <th className="p-2">Hora</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Ações</th>
                </tr>
              </thead>

              <tbody>
                {tarefas.map((item, index) => (
                  <tr key={index} className="border-t bg-gray-400">
                    <td className="p-2">{item.tarefa}</td>
                    <td className="p-2">{item.data}</td>
                    <td className="p-2">{item.hora}</td>
                    <td className="p-2">{item.status}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-blue-700"
                      >
                        Excluir
                      </button>

                      <button
                        onClick={() => handleEdit(index)}
                        className="text-orange-500 ml-2"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-6"
      >
        Voltar à página inicial
      </Link>
    </main>
  );
}