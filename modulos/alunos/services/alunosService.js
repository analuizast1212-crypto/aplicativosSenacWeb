"use server";

import {
  delete_Aluno,
  get_AllAlunos,
  post_Aluno,
  atualizaAlunoById
} from "../repository/alunoRepository";

export async function pegar_Alunos() {
  const result = await get_AllAlunos();
  return result;
}


export async function gravarAluno(
  nome,
  email,
  matricula,
  curso,
  nascimento
) 

{
  // Regra 1: campos obrigatórios
  if (!nome || !email || !matricula || !curso || !nascimento) {
    throw new Error('Todos os campos são obrigatórios');
  }
  return await post_Aluno({nome, email, matricula, curso, nascimento});
}

export async function deletarAluno(id) {
  return await delete_Aluno(Number(id));
}

export async function atualizaAluno(id, data) {
  const alunoAtualizado = await atualizaAlunoById(Number(id), data);
  return alunoAtualizado;
}