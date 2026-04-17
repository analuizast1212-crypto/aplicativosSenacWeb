"use server";
let contador =0;
export async function ChamaServidor() {
    try {

    console.clear()
    console.log("\n\n")
    console.log("Console limpo e ação executada no Back END")
    console.log("Estou no Servidor....: " + contador++);
    console.log("Só funciono no Servidor Back-End meu amigo....");
    console.log("\n\n")
    //return {msg: "Olá amigo sou seu Servidor"}

} catch {

    console.log("Deu erro no Servidor");

} finally {

    console.log("Ação Concluída no Servidor");
    console.log("\n\n");

}
}