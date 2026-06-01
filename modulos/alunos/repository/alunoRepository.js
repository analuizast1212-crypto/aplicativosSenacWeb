// alunosRepository.js
 "use server"; // indica que esse arquivo roda no servidor (Server Actions)
// Importa o client do Prisma (responsável por conversar com o banco)
import { prisma } from '@/lib/prisma';
import { atualizaAluno } from '../controller/alunosActions';
 
/**
 * Buscar todos os alunos
 *
 * - Retorna uma lista com todos os alunos do banco
 * - Ordena do mais recente para o mais antigo (criadoEm DESC)
 * - Usado normalmente para listagem em tabelas
 */
export async function get_AllAlunos() {
  const result= await prisma.aluno.findMany({
    orderBy: { nome: 'asc' },
  });
  return result;
}
/**
 * Criar novo aluno
 *
 * - Recebe um objeto com os dados do aluno
 * - Ex: { nome, email, matricula }
 * - Retorna o aluno criado
 */
export async function post_Aluno(data) {
  const{ nome, email, matricula, curso, nascimento } = data;
  const result = await prisma.aluno.create({
    data: {
      nome,
      email,
      matricula,
      curso,
      nascimento
    }
  });
  return result;
}
 
/**
 * Deletar aluno
 *
 * - Remove o aluno do banco pelo ID
 * - Cuidado: operação irreversível
 */
export async function delete_Aluno(id) {
  const result = await prisma.aluno.delete({
    where: { id },
  });
  return result;
}

export async function atualizaAlunoById(id, data) {
  console.log("Atualizando aluno com ID:", id, "Dados:", data);

  const Aluno_atualizado = await prisma.aluno.update({
    where: { id },
    data, 
  });

  console.log("Aluno atualizado:", Aluno_atualizado);
  return Aluno_atualizado;
}
