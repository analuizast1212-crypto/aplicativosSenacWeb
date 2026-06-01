import BaseBotao from "@/componentes/BaseBotao";
import BaseCard from "@/componentes/BaseCard";
import Header from "@/componentes/header";
import Relatorio from "@/componentes/busca";
import Table from "@/componentes/table";

export default async function PageComponentes() {
  const alunos = [
    { id: 1, nome: 'João Silva', email: 'joao.silva@example.com', curso: 'Engenharia' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', curso: 'Medicina' },
    { id: 3, nome: 'Pedro Santos', email: 'pedro.santos@example.com', curso: 'Direito' }
  ];

  return (
    <main className="grid  w-full items-center justify-center bg-[#0f172a] px-6 py-10">
      <div className="w-[88%] mx-auto space-y-6 rounded-[34px] border border-slate-700 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/45 backdrop-blur-xl">

        <Header />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <BaseBotao textoBotao="Cadastrar" cor="bg-blue-600 hover:bg-blue-700" />
            <BaseBotao textoBotao="Baixar Pdf" cor="bg-green-600 hover:bg-green-700" />
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-4 text-slate-300 shadow-inner shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Resumo rápido</p>
            <p className="mt-1 text-base text-white">Painel com informações de desempenho e ações comuns.</p>
          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <BaseCard titulo="Masculino" valor="10" />
          <BaseCard titulo="Feminino" valor="15" />
          <BaseCard titulo="Outros" valor="5" />
          <BaseCard titulo="Total de registros" valor="30" />
        </div>

        <Relatorio />

        <Table alunos={alunos} />
      </div>
    </main>
  );
}
 