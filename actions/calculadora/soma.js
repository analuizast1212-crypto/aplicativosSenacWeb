'use server';
 
export async function somar(A, B) {
    console.log("Estou Somando A com B veja abaixo....");
    if (A != "" && B != "") {
        const soma = parseFloat(A) + parseFloat(B)
        console.log("Resultado da Soma....:" + soma.toString())
        return { soma: soma.toString() };
    }
 
    return { error: "Erro ao Somar" };
}
 
// teste
async function executarTeste() {
    const resultado = await somar(10, 30);
    console.log(resultado);
}
 
// chama para testar
executarTeste()