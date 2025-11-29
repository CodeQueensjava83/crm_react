function Sobreprojeto() {
  return (
    <div className="min-h-screen bg-blue-200 text-gray-800 flex flex-col">

      {/* Header */}
      <header className="bg-blue-600 text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          CRMfy — Conectando empresas e pessoas
        </h1>
        <p className="mt-6 text-4xl md:text-xl max-w-2xl mx-auto text-blue-100">
          A solução completa para equipes que precisam organizar clientes, tarefas e resultados.
        </p>
      </header>

      {/* GRID DOS CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CARD 1 — Proposta */}
        <div className="bg-white rounded-2xl shadow-xl p-6 h-150 inline-flex flex-col items-center justify-start w-fit mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4 text-center">
            Proposta do sistema
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center max-w-md">
            Um CRM projetado para gerar resultados do primeiro contato ao fechamento:
            tudo em um só lugar — simples, intuitivo e eficiente.
          </p>

          <img
            src="https://ik.imagekit.io/codequeens/CRM/proposta.png"
            alt="Dashboard principal do CRMfy"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>

        {/* CARD 2 — Soluções */}
        <div className="bg-white rounded-2xl shadow-xl p-6 h-auto inline-flex flex-col items-center justify-start w-fit mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4 text-center">
            Soluções oferecidas
          </h2>

          <p className="text-lg text-slate-700 mb-6 text-center max-w-md">
            Criado especialmente para empresas prestadoras de serviço que desejam
            acompanhar clientes, equipe e processos de forma profissional.
          </p>

          <img
            src="https://ik.imagekit.io/codequeens/CRM/solucoes.png"
            alt="Soluções do CRMfy"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>

      </section>
    </div>
  );
}

export default Sobreprojeto;




