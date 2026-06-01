'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { atualizaAlunoAction } from '@/modulos/alunos/controller/alunosActions';
import { delete_Aluno } from '@/modulos/alunos/repository/alunoRepository';

export default function EditarForm({ aluno }) {
  const router = useRouter();
  const formRef = useRef(null);

  async function handleEditar(formData) {
    try {
      const res = await atualizaAlunoAction(aluno.id, formData);
      if (res.success) {
        router.refresh(); // Atualiza a página para mostrar as alterações
       // toast.success(res.message);
      } else {
       // toast.error(res.message);
         console.log('Erro ao atualizar aluno:', res.message);
      }
    } catch (error) {
      console.log('Erro ao atualizar aluno:', error);
    }
  }

  return (
    <form ref={formRef} action={handleEditar}
      className="bg-gray-500 p-6 rounded-xl">

      <div className="flex flex-col mt-4 md:grid-cols-1 gap-4">
        <div>
          <label className="text-gray-200 text-sm font-bold">Nome</label>
          <input
            id="idnome"
            name="nome"
            type="text"
            placeholder="Digite o nome completo"
            defaultValue={aluno.nome}
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ex: aluno@gmail.com"
            defaultValue={aluno.email}
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm font-bold">Curso</label>
          <input
            id="curso"
            name="curso"
            type="text"
            placeholder="Ex: Ads"
            defaultValue={aluno.curso}
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* Botão */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg  ">Salvar Alterações </button>

            <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition text-sm font-medium ml-2">Cancelar</button>
        </div>

      </div>
    </form>
  );
}

