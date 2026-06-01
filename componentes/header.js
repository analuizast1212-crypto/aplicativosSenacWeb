import BaseModal from "@/componentes/BaseModal";
export default function Header() {
    return (
        <header className="flex flex-col gap-4 rounded-[28px] border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 shadow-lg shadow-slate-950/30">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-white">Gestão de Pessoas</h1>
                    <p className="text-sm text-slate-300">Bem-vindo ao sistema de gestão de pessoas</p>
                </div>
                <BaseModal titulo="Sobre o Projeto" textoBotao="Sobre">
                    <p>Conteúdo do modal sobre o projeto.</p>
                </BaseModal>
            </div>
        </header>
    );
}