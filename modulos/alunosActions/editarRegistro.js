"use server";

import { prisma } from "../../lib/prisma.js";

/**
 * Atualizar aluno
 *
 * - Recebe o ID do aluno e os novos dados
 * - Atualiza apenas os campos enviados
 * - Retorna o aluno atualizado
 */

export async function atualizarRegistro(id, data) {
  try {
    // garante ID numérico
    const alunoId = Number(id);

    console.log(
      "\x1b[36m%s\x1b[0m",
      `Atualizando aluno ID: ${alunoId}`
    );

    const alunoAtualizado = await prisma.aluno.update({
      where: {
        id: alunoId,
      },
      data,
    });

    console.log(
      "\x1b[32m%s\x1b[0m",
      "Aluno atualizado com sucesso!"
    );

    return {
      success: true,
      message: "Aluno atualizado com sucesso!",
      registro: alunoAtualizado,
    };
  } catch (error) {
    console.log(error);

    console.log(
      "\x1b[31m%s\x1b[0m",
      `Erro ao atualizar aluno ID: ${id}`
    );

    return {
      success: false,
      error: "Não foi possível atualizar o aluno.",
    };
  }
}