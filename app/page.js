import AlunoForm from "@/componentes/alunoForm";
import DeleteButton from "@/componentes/btnExcluir";
import Modal from "@/componentes/BaseModal";
import EditarForm from "@/componentes/frmEditar";
import Dashboard from "@/componentes/dashboard";
import Relatorio from "@/componentes/relatorio";
import Adicionar from "@/componentes/adicionar";
import { Get_All_Registros } from "@/modulos/alunosActions/pegartodos";
import ModalEditar from "@/componentes/ModalEditar";


export default async function Home() {
  const alunos = await Get_All_Registros();
  return (
    <main className="min-h-screen bg-black p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-gray-750 p-6 rounded-2xl shadow-xl">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6 bg-gray-500 p-6 rounded-xl">
          <h1 className="text-2xl text-white font-bold"> CRUD de Alunos </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition">   Sobre o projeto </button>
        </div>

        {/* Botao */}
        <div className="flex items-center justify-between w-full mb-4 font-bold font-">
        <Relatorio />
        <Adicionar />
        </div>

        {/* DASHBOARD */}
        
        <Dashboard />

        {/* FORM */}
        <section> <AlunoForm /> </section>

        {/* TABELA */}
        {alunos.length > 0 && (
          <div className="mt-8 bg-gray-500 p-6 rounded-xl">
            <h2 className="text-white font-semibold mb-4"> Alunos cadastrados </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-200">
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th className="p-3">Nome</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Matrícula</th>
                    <th className="p-3">Curso</th>
                    <th className="p-3">Nascimento</th>
                    <th className="p-3">Sexo</th>
                    <th className="p-3">Turno</th>
                    <th className="p-3 text-center">Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {alunos.map((aluno) => (
                    <tr key={aluno.id} className="bg-gray-700 border-b border-gray-500 hover:bg-gray-500 transition" >
                      <td className="p-3">{aluno.nome}</td>
                      <td className="p-3">{aluno.email}</td>
                      <td className="p-3">{aluno.matricula}</td>
                      <td className="p-3">{aluno.curso}</td>
                      <td className="p-3">{aluno.nascimento}</td>
                      <td className="p-3">{aluno.sexo}</td>
                      <td className="p-3">{aluno.turno}</td>

                      <td className="p-3">
                        <div className="flex justify-center items-center gap-2">

                         <ModalEditar aluno={aluno} /> 

                         <DeleteButton id={aluno.id} />

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}