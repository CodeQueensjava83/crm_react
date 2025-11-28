
function Sobreprojeto() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl font-bold">CRMfy — Conectando empresas e pessoas</h1>
      </header>

      {/* Conteúdo */}
      <main className="max-w-4xl mx-auto p-6 space-y-10">
        {/* Descrição */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600">1. Descrição</h2>
          <div className="bg-white rounded-2xl p-6 mt-4 shadow-md">
            <p>
              A CRMfy nasceu para conectar empresas e pessoas de forma inteligente.
              Com tecnologia, dados e IA, transformamos cada interação em uma
              oportunidade de crescimento. Mais que um CRM, somos o elo entre o
              humano e o digital — o futuro dos relacionamentos.
            </p>

            <p className="mt-4 font-medium">Entre os principais recursos que um CRM oferece, destacam-se:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>
                <strong>Usuário:</strong> representa vendedores e gestores que utilizam
                o sistema.
              </li>
              <li>
                <strong>Cliente:</strong> centraliza dados de pessoas e empresas.
              </li>
              <li>
                <strong>Oportunidade:</strong> registra negociações em andamento, com
                valor, prazo e status.
              </li>
              <li>Arquitetura pensada para simplicidade e eficiência.</li>
            </ul>
          </div>
        </section>

        {/* Sobre a API */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600">2. Sobre esta API</h2>
          <div className="bg-white rounded-2xl p-6 mt-4 shadow-md">
            <p>
              A API do CRMfy foi desenvolvida em Java, utilizando o framework
              Spring, e segue os princípios da Arquitetura MVC e REST. Ela
              disponibiliza endpoints para o gerenciamento dos recursos Cliente,
              Oportunidades e Usuário, com testes de CRUD (Create, Read, Update e
              Delete) realizados por meio do Insomnia.
            </p>

            <h3 className="text-xl font-semibold mt-6">2.1. Principais Funcionalidades</h3>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Organizar informações de clientes e negociações.</li>
              <li>
                Gerenciar oportunidades no funil de vendas, com acompanhamento dos
                status das propostas.
              </li>
              <li>Potencializar o atendimento e o fechamento de negócios.</li>
            </ul>
          </div>
        </section>

        {/* Área de ícones */}
        <section>
          <div className="bg-blue-600 text-white rounded-2xl p-10 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h3>
            <p className="opacity-90">(Área para colocar os ícones)</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Sobreprojeto;