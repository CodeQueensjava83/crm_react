import imgHome from '../../assets/img_home.svg';

function Home() {
  return (
    <>

      {/* HERO */}
      <div className="bg-blue-900 flex justify-center">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 text-white py-28 md:py-32 px-6 md:px-10 gap-12">

          {/* Texto */}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.2]">
              Bem-vindo ao <br />
              <span className="text-blue-300">CRMfy</span>
            </h1>

            <p className="text-lg md:text-2xl text-blue-100 max-w-lg">
              Conecte. Gerencie. Venda.
            </p>

            <a
              href="/clientes"
              className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition"
            >
              Acessar Clientes
            </a>
          
           <a
            href="/oportunidades"
            className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition"
          >
            Acessar Oportunidades
          </a>
        </div>

          {/* Imagem */}
          <div className="flex justify-center md:justify-end items-center">
            <img
              src={imgHome}
              alt="Dashboard CRMfy"
              className="w-full md:w-[120%] max-w-[600px] translate-x-4 drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
            />
          </div>

        </div>
      </div>

      {/* CARDS */}
      <div className="bg-blue-900 flex justify-center pb-24 -mt-10 md:-mt-20">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* CARD 1 */}
          <div className="bg-blue-300 shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition">
            <span className="text-blue-600 text-6xl mb-6 block">👥</span>
            <h3 className="text-2xl font-bold text-blue-900">Clientes</h3>
            <p className="text-gray-600 mt-3 text-lg">
              Informações centralizadas e organização completa.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-blue-300 shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition">
            <span className="text-blue-600 text-6xl mb-6 block">📈</span>
            <h3 className="text-2xl font-bold text-blue-900">Oportunidades</h3>
            <p className="text-gray-600 mt-3 text-lg">
              Acompanhe negociações, valores e progresso.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-blue-300 shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition">
            <span className="text-blue-600 text-6xl mb-6 block">⚙️</span>
            <h3 className="text-2xl font-bold text-blue-900">Produtividade</h3>
            <p className="text-gray-600 mt-3 text-lg">
              Visualização moderna e ferramentas práticas.
            </p>
          </div>

        </div>
      </div>

      

    </>
  );
}

export default Home;
