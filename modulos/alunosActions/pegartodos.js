"use server";
 
import { prisma } from '../../lib/prisma.js'; 
export async function Get_All_Registros() {
 
    // Debug
    console.log(
        "\x1b[36m%s\x1b[0m",
        ` Server Action pegando todos os registros…  ${new Date().toLocaleString()}`
    );
 
    //Prisma ORM funcionando - veja a Documentação do Prisma
    const todosRegistros = await prisma.aluno.findMany({
        orderBy: { nome: 'asc', },
    });
 
    return todosRegistros;
}
 