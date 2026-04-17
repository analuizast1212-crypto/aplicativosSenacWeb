'use server';
 
export async function dividir(A, B) {
    console.log("Estou Dividindo A com B veja abaixo....");
    if (A != "" && B != "") {
        const divisao = parseFloat(A) / parseFloat(B)
        console.log("Resultado da Divisao:" + divisao.toString())
        return { divisao: divisao.toString() };
    }
 
    return { error: "Erro ao Dividir" };
}
 
// teste
async function executarTeste() {
    const resultado = await dividir(30, 10);
    console.log(resultado);
}
 
// chama para testar
executarTeste()