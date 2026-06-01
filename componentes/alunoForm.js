'use client';
import { cadastrar_Aluno } from '@/modulos/alunos/controller/alunosActions';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import  Btncadastrar  from './btnCadastrar';
import { GravarRegistro } from '@/modulos/alunosActions/gravarRegistro';
import { toast } from 'sonner';

export default function AlunoForm() {
  const router = useRouter();
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const selector = 'input[name], select[name], textarea[name]';
    const elements = Array.from(form.querySelectorAll(selector));

    const toggle = (el) => {
      const val = (el.value || '').toString().trim();
      if (val !== '') {
        el.classList.remove('bg-gray-600', 'text-white');
        el.classList.add('bg-white', 'text-black');
      } else {
        el.classList.remove('bg-white', 'text-black');
        el.classList.add('bg-gray-600', 'text-white');
      }
    };

    elements.forEach((el) => {
      const handler = () => toggle(el);
      // store handler for cleanup
      el.__toggleHandler = handler;
      // initial state
      toggle(el);
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });

    return () => {
      elements.forEach((el) => {
        if (el.__toggleHandler) {
          el.removeEventListener('input', el.__toggleHandler);
          el.removeEventListener('change', el.__toggleHandler);
          delete el.__toggleHandler;
        }
      });
    };
  }, [formRef]);

  async function handleAction(formData) {
    const res = await GravarRegistro(formData);
    if (res.sucess) {
      toast.success(res.message);
      formRef.current?.reset();
      } else {
        toast.error(res.message);
      }  
       router.refresh();
    }
  

  return (
    <form ref={formRef}//mostra oq foi digitado 
      action={handleAction}
      className="bg-gray-500 p-6 rounded-xl">

      <div className="grid grid-cols-1 bg-gray-500 mt-2 md:grid-cols-2 gap-6">
        <h2 className="text-xl bg-gray-500 text-white font-semibold">
          Cadastro do Aluno
        </h2>
      </div>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-6">

        <div>
          <label className="text-gray-200 text-sm">Nome</label>
          <input
            id="idnome"
            name="nome"
            type="text"
            placeholder="Digite o nome completo"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ex: aluno@gmail.com"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Matrícula</label>
          <input
            id="matricula"
            name="matricula"
            type="text"
            placeholder="Ex: 0000000"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Curso</label>
          <input
            id="curso"
            name="curso"
            type="text"
            placeholder="Ex: Ads"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Data de Nascimento</label>
          <input
            id="nascimento"
            name="nascimento"
            type="date"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <div>
          <label className="text-gray-200 text-sm">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>

        <div>
          <label className="text-gray-200 text-sm">Turno</label>
          <select
            id="turno"
            name="turno"
            className="w-full mt-1 p-3 rounded-xl bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">Selecione</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>


        {/* Botão */}
        <div className="md:col-span-2 flex justify-end">
          <Btncadastrar />

      
        </div>
      
      </div>
    </form>


  );
}

