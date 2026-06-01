export default function BaseCard({ titulo, valor }) {
  return (
    <div className="flex w-full  flex-col justify-center gap-3 rounded bg-slate-900/95 p-6 shadow-md shadow-slate-950/20">
      <div>
        <h3 className="text-xl font-semibold text-white">{titulo}</h3>
        <p className="mt-2 text-3xl font-bold text-sky-400">{valor}</p>
      </div>
    </div>
  );
}
 