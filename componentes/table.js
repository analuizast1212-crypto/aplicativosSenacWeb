export default function Table({ alunos }) {
  return (
    <div className="w-full overflow-hidden rounded-[28px] border border-slate-700 bg-slate-900/90 shadow-lg shadow-slate-950/20">
      <table className="min-w-full table-auto text-left text-white">
        <thead className="bg-slate-950/80">
          <tr>
            <th className="p-4 text-sm font-medium uppercase tracking-[0.12em] text-slate-400">Nome</th>
            <th className="p-4 text-sm font-medium uppercase tracking-[0.12em] text-slate-400">Email</th>
            <th className="p-4 text-sm font-medium uppercase tracking-[0.12em] text-slate-400">Curso</th>
            <th className="p-4 text-right text-sm font-medium uppercase tracking-[0.12em] text-slate-400">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-900/95">
          {alunos.map((aluno) => (
            <tr key={aluno.id} className="transition hover:bg-slate-800/80">
              <td className="p-4 text-sm text-slate-100">{aluno.nome}</td>
              <td className="p-4 text-sm text-slate-300">{aluno.email}</td>
              <td className="p-4 text-sm text-slate-300">{aluno.curso}</td>
              <td className="flex justify-end gap-2 p-4">
                <button className="rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">Editar</button>
                <button className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 