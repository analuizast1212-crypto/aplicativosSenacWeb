"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/login";

export default function Login() {
  const [usuario, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(usuario, senha);

    try {
      setLoading(true);

      if (usuario && senha) {
        console.log("Estou no Cliente em Lavras....");

        const res = await login(usuario, senha);
        console.log(res);

        if (res?.success) {
          router.push("/dashboard");
        } else {
          setErro("Usuário ou senha inválidos");
        }

      } else {
        setErro("Preencha todos os campos");
      }

    } catch (err) {
      console.log(err);
      setErro("Erro ao fazer login");
    } finally {
      setLoading(false);
      console.log("Login Terminou");
    }
  }

  return (
    <div className="grid grid-cols-2 h-screen">
      
      <div className="flex flex-col bg-black items-center justify-center gap-4 p-8">
        <h1 className="text-4xl font-bold text-blue-300">Meu Sistema</h1>
        <h3 className="text-white text-center max-w-md">
          Gerencie sua vida, vendas e resultados de forma simples e eficiente
        </h3>
      </div>

      <div className="flex flex-col bg-blue-400 items-center justify-center gap-4 p-8">
        <form 
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-2"
        >
          <h1 className="text-2xl font-bold text-white">
            Acesso à plataforma
          </h1>

          <label className="text-white">Usuário:</label>
          <input
            type="text"
            placeholder="Digite o usuário"
            value={usuario}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          />

          <label className="text-white">Senha:</label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          />

          {erro && <p className="text-red-500">{erro}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>

    </div>
  );
}