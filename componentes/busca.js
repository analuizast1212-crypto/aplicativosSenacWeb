export default function Relatorio() {
  return (
    <div className="w-full rounded-[28px] border border-slate-700 bg-slate-900/90 p-6 shadow-md shadow-slate-950/20">
      <h1 className="text-xl font-semibold text-white">Relatório de Registro</h1>
      <p className="mt-1 text-sm text-slate-400">Pesquise registros e visualize o conteúdo de forma rápida.</p>
      <input
        type="text"
        placeholder="Buscar por nome..."
        className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
      />
    </div>
  );
}