"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [curso, setCurso] = useState("Pendente");
    const [lista, setLista] = useState([]);

    function adicionarAluno(e) {
        e.preventDefault();

        if (!nome || !email || !celular || !curso) {
            alert("Preencha todos os campos!");
            return;
        }

        const nova = {
            id: Date.now(),
            nome,
            email,
            celular,
            curso,
        };

        setLista([...lista, nova]);

        setNome("");
        setEmail("");
        setCelular("");
        setCurso("Pendente");
    }

    function remover(id) {
        setLista(lista.filter((item) => item.id !== id));
    }

    function editar(id) {
        const item = lista.find((i) => i.id === id);

        if (!item) return;

        setNome(item.nome);
        setEmail(item.email);
        setCelular(item.celular);
        setCurso(item.curso);

        remover(id);
    }

    return (
        <main className="min-h-screen bg-black p-6 flex justify-center">
            <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">

                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-2xl text-black items-center justify-center font-bold mb-2">
                        Cadastro de Alunos Competição
                    </h1>
                    <p className="text-blue-500 items-center justify-center mb-6">
                        Etapa escolar Lavras-MG
                    </p>
                </div>

                <form
                    onSubmit={adicionarAluno}
                    className="space-y-6 bg-gray-400 rounded-2xl p-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block font-medium text-black mb-1">Nome</label>
                            <input
                                type="text"
                                placeholder="Descreva o nome..."
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full border p-3 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-black mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Digite o email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border p-3 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-black mb-1">Celular</label>
                            <input
                                type="tel"
                                placeholder="Digite o celular..."
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                className="w-full border p-3 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-black mb-1">Curso</label>
                            <input
                                type="text"
                                placeholder="Digite o curso..."
                                value={curso}
                                onChange={(e) => setCurso(e.target.value)}
                                className="w-full border p-3 rounded"
                            />
                        </div>

                    </div>

                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold">
                        Cadastrar
                    </button>
                </form>

                {lista.length > 0 && (
                    <div className="mt-8 rounded-2xl bg-gray-400 p-4">
                        <h2 className="font-semibold mb-2 text-black">
                            Alunos cadastrados
                        </h2>

                        <table className="w-full text-left border">
                            <thead className="bg-gray-500">
                                <tr>
                                    <th className="p-2 text-black">Nome</th>
                                    <th className="p-2 text-black">Email</th>
                                    <th className="p-2 text-black">Celular</th>
                                    <th className="p-2 text-black">Curso</th>
                                    <th className="p-2 text-black">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {lista.map((item) => (
                                    <tr key={item.id} className="border-t bg-gray-400">
                                        <td className="p-2">{item.nome}</td>
                                        <td className="p-2">{item.email}</td>
                                        <td className="p-2">{item.celular}</td>
                                        <td className="p-2">{item.curso}</td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => remover(item.id)}
                                                className="text-red-700"
                                            >
                                                Excluir
                                            </button>

                                            <button
                                                onClick={() => editar(item.id)}
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
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded absolute bottom-6"
            >
                Voltar à página inicial
            </Link>

        </main>
    );
} 