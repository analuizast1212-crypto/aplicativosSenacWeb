'use server'; // indica que esse arquivo roda no servidor (Server Actions)
import {
  deletarAluno,
  gravarAluno,
  pegar_Alunos,
  atualizaAluno
} from '../services/alunosService';

export async function get_Alunos() {
 
  const dados = await pegar_Alunos();
  // Atualiza os dados da rota (refaz cache do Next.js)
  return dados;
}
// Server Action para criar um novo aluno
export async function cadastrar_Aluno(formData) {
  // Extração e limpeza dos dados
  const nome = formData.get('nome')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const matricula = formData.get('matricula')?.toString().trim();
  const curso = formData.get('curso')?.toString().trim();
  const nascimento = formData.get('nascimento')?.toString();
 
  console.log('Dados recebidos do aluno:', { nome, email, matricula, curso, nascimento });

try {
  await gravarAluno(nome, email, matricula, curso, nascimento);
  return { success: true, message: 'Aluno criado com sucesso!' };

}
 catch (error){
  return { success: false, message: error.message || 'Erro ao criar aluno' };
 }

};

export async function deletar_Aluno(id) {
  try {
    await deletarAluno(Number(id));
    return { success: true, message: 'Aluno deletado com sucesso!' };
  } catch (error) {
    return { success: false, message: error.message || 'Erro ao deletar aluno' };
  }
}

export async function atualizaAlunoAction(id, formData) {

  const nome = formData.get('nome')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const curso = formData.get('curso')?.toString().trim();
  const matricula = formData.get('matricula')?.toString().trim();

  try {
    const alunoAtualizado = await atualizaAluno(id, { nome, email, curso });
    return { success: true, message: 'Aluno atualizado com sucesso!', aluno: alunoAtualizado };
  } catch (error) {
    return { success: false, message: error.message || 'Erro ao atualizar aluno' };
  }
}
