export default function BaseBotao({
  textoBotao = 'Botão',
  cor = 'bg-blue-600 hover:bg-blue-700',
  funcao,
  type = 'button',
}) {
  return (
    <div className="parent-container">
      <button
        type={type}
        onClick={funcao}
        className={`
          ${cor}
          w-40
          h-12
          rounded-2xl
          text-white
          font-semibold
          transition-all
          duration-200
        `}
      >
        {textoBotao}
      </button>
    </div>
  );
}