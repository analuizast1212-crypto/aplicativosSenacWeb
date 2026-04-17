"use client"
import Link from "next/link"
let contador = 0;
export default function ServerAction() {

   async function ChamaServidor() {
    try {
      await servidor();
      console.log("Chamou o Servidor")
    } catch {
      //roda onde?
      console.log("Erro ao Tentar Logar 2")
    } finally {
      //roda onde?
      console.log("Login Terminou")
    }
  }

  function ChamaCliente() {
    try {
      console.log.clear();
      console.log("\n\n");
      console.log("Console limpp e ação executada no Front-End");

      console.log("Estou no Cliente...:" + contador++);
      console.log("Funciono apenas no front-end...");
      console.log("\n\n");
    } catch {

      console.log("Erro ao tentar logar");
    }
    finally {
      console.log("Ação do cliente terminou");
    }

  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4  bg-black-800">

      <div className="flex flex-col items-center border-8 border-blue-500 bg-gray-300 p-8 rounded-lg shadow-lg space-y-4 w-80">
        <h1 className="text-2xl font-bold text-black"> Server Action</h1>

        <button onClick={ChamaServidor}
          type="button"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Ações do Servidor(Back-END)</button>

        <button onClick={ChamaCliente}
          type="button"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Ações do Cliente(Front-END)</button>


        <button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Dashbord</button>
      </div>

    </div>

  );
};