'use client';

import { deletar_Aluno } from '@/modulos/alunos/controller/alunosActions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { deletarRegistro } from '@/modulos/alunosActions/deletarregistro';

export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deletarRegistro(id);

title: "Deseja eletar"
    if (res.sucess) {
      toast.success(res.message);
      router.refresh(); // atualização real

    } else {
      toast.error(res.error);
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1.5 rounded-lg text-sm"
    >
      Deletar
    </button>
  );
}