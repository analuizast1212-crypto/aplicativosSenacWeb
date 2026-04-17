'use server';
 
export async function subtrair(A, B) {
    console.log("Estou Subtraindo A com B veja abaixo....");
    if (A != "" && B != "") {
        const subtracao = parseFloat(A) - parseFloat(B)
        console.log("Resultado da Subtracao:" + subtracao.toString())
        return { subtracao: subtracao.toString() };
    }
 
    return { error: "Erro ao Subtrair" };
}
 
// teste
async function executarTeste() {
    const resultado = await subtrair(30, 10);
    console.log(resultado);
}
 
// chama para testar
executarTeste()