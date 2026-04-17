'use server';
 
export async function multiplicar(A, B) {
    console.log("Estou Multiplicando A com B veja abaixo....");
    if (A != "" && B != "") {
        const produto = parseFloat(A) * parseFloat(B)
        console.log("Resultado da Multiplicacao:" + produto.toString())
        return { produto: produto.toString() };
    }
 
    return { error: "Erro ao Multiplicar" };
}
 
// teste
async function executarTeste() {
    const resultado = await multiplicar(10, 30);
    console.log(resultado);
}
 
// chama para testar
executarTeste()