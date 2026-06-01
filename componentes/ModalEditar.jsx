'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { atualizarRegistro } from '@/modulos/alunosActions/editarRegistro';

export default function ModalEditar({ aluno }) {
    const [open, setOpen] = useState(false);

    const router = useRouter();

    function handleClose() {
        setOpen(false);
    }

    // Função responsável por editar o aluno
    async function handleEditar(e) {
        try {
            // Impede reload da página
            e.preventDefault();
            // Pega todos os dados do formulário
            const formData = new FormData(e.target);
            // Chama a Server Action
            //const res = await atualizaAlunoAction(aluno.id, formData);
            const res = await atualizarRegistro(aluno.id, formData);
            if (res.success) {
                router.refresh();
                toast.success(res.message);
                setOpen(false);
            } else {
                toast.error(res.error);
            }

        } catch (error) {

            console.error('Erro ao editar aluno:', error);
            toast.error('Erro interno ao editar aluno');
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
                Editar
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-full max-w-2xl relative">

                        {/* Botão fechar */}
                        <button
                            onClick={handleClose}
                            className="absolute right-3 top-3 font-extrabold text-gray-600"
                        >
                            x
                        </button>

                        {/* Título */}
                        <h2 className="text-2xl text-black font-bold mb-4">
                            Editar Registro (Modal Isolado)
                        </h2>

                        {/* Formulário */}
                        <form
                            onSubmit={handleEditar}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 border-none my-2 p-0"
                        >
                            {/* Nome */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">
                                    Nome Completo
                                </label>

                                <input
                                    name="nome"
                                    defaultValue={aluno.nome}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={aluno.email}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    required
                                />
                            </div>

                            {/* Matrícula */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">
                                    Matrícula
                                </label>

                                <input
                                    name="matricula"
                                    defaultValue={aluno.matricula}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    required
                                />
                            </div>

                            {/* Turno */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-600">
                                    Turno
                                </label>

                                <div className="flex gap-4 flex-wrap">
                                    <label className="flex items-center gap-2 text-sm text-black">
                                        <input
                                            type="radio"
                                            name="turno"
                                            value="Manhã"
                                            defaultChecked={
                                                aluno.turno === 'Manhã'
                                            }
                                        />

                                        Manhã
                                    </label>

                                    <label className="flex items-center gap-2 text-sm text-black">
                                        <input
                                            type="radio"
                                            name="turno"
                                            value="Tarde"
                                            defaultChecked={
                                                aluno.turno === 'Tarde'
                                            }
                                        />

                                        Tarde
                                    </label>

                                    <label className="flex items-center gap-2 text-sm text-black">
                                        <input
                                            type="radio"
                                            name="turno"
                                            value="Noite"
                                            defaultChecked={
                                                aluno.turno === 'Noite'
                                            }
                                        />

                                        Noite
                                    </label>
                                </div>
                            </div>

                            {/* Curso */}
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-sm text-gray-600">
                                    Curso
                                </label>

                                <select
                                    name="curso"
                                    defaultValue={aluno.curso || ''}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                                    required
                                >
                                    <option value="">
                                        Selecione um curso
                                    </option>

                                    <option value="ADS">
                                        ADS - Análise e Desenvolvimento de
                                        Sistemas
                                    </option>

                                    <option value="ADM">
                                        ADM - Administração
                                    </option>

                                    <option value="ENF">
                                        ENF - Enfermagem
                                    </option>

                                    <option value="TST">
                                        TST - Técnico em Segurança do Trabalho
                                    </option>

                                    <option value="RH">
                                        RH - Recursos Humanos
                                    </option>
                                </select>
                            </div>

                            {/* Botão salvar */}
                            <div className="md:col-span-2 flex flex-col justify-center items-center m-2 gap-2">
                                <button
                                    type="submit"
                                    className="px-3 py-3 rounded-md bg-blue-800 hover:opacity-70 w-[80%] text-white text-md font-medium transition"
                                >
                                    Salvar Alterações
                                </button>
                            </div>
                        </form>

                        {/* Botão cancelar */}
                        <section className="w-full flex justify-center items-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-3 py-3 rounded-md bg-red-800 hover:opacity-70 w-[78%] text-white text-md font-medium transition"
                            >
                                Cancelar
                            </button>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}