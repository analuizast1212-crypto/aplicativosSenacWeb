"use server";
import { redirect } from "next/navigation";
 
export async function login(usuário, senha) {
    console.log("Estou no servidor");
    if (usuário === "admin" && senha === "1234") {
        console.log("Login bem-sucedido");
        redirect("/login1");
    }
    
    return{error: "Usuário ou senha inválidos"};
}