'use client';
import link from "next/link";
import BaseCard from "@/componentes/BaseCard";
import HeaderCopa from "@/componentes/headercopa";
import FooterCopa from "@/componentes/footercopa";
import Jogadores from "@/componentes/cardscopa";

export default function Copa() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-green-900 via-green-900 to-blue-900 min-h-screen w-full">
      <HeaderCopa />


      {/*Conteúdo*/}
      <div className="max-w-5xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-6 p-15">

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
              🌎 Onde Será?
            </h3>
            <p className="text-gray-200">
              A Copa do Mundo de 2026 acontecerá nos Estados Unidos,
              Canadá e México, reunindo seleções de todo o planeta em
              uma edição histórica da competição.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
              ⏰ Jogos e Horários
            </h3>
            <p className="text-gray-200">
              Aqui você poderá acompanhar os jogos, datas, horários e
              resultados atualizados para não perder nenhum momento da
              maior competição do futebol mundial.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
              🇧🇷  Seleção Brasileira
            </h3>
            <p className="text-gray-200">
              Conheça os jogadores convocados para representar o Brasil,
              além de informações, estatísticas e curiosidades sobre a
              nossa seleção rumo ao hexacampeonato.
            </p>
          </div>

        </div>
      </div>

      {/*Cards*/}
      <Jogadores />

      <FooterCopa />
    </main>
  );
}