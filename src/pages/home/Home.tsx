import imgHome from '../../assets/img_home.svg';
import { useEffect } from 'react';
import Sobregrupo from '../sobregrupo/Sobregrupo';
import Sobreprojeto from '../sobreprojeto/Sobreprojeto';

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // anima só 1 vez e não buga
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <>

      {/* HERO */}
      <div className="bg-blue-900 flex justify-center">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 text-white py-16 md:py-20 px-6 md:px-10 gap-12">

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
              className="w-[90%] md:w-[110%] max-w-[520px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] animate-slide-up animate-float"
            />
          </div>

        </div>
      </div>

      {/* CARDS */}
      <div className="bg-blue-900 flex justify-center pb-24 -mt-10 md:-mt-20">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* CARD 1 */}
          <div className="reveal bg-blue-300 border border-blue-400/20 
        shadow-lg rounded-2xl p-10 text-center transition-all 
        duration-300 hover:-translate-y-2 hover:shadow-2xl 
        hover:border-blue-400 hover:shadow-blue-400/30">


            {/* Ícone Clientes */}
            <div className="flex justify-center mb-6">
              <svg width="60" height="60" fill="#dbeafe" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-blue-900">Clientes</h3>
            <p className="text-blue-900 mt-3 text-lg">
              Informações centralizadas e organização completa.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="reveal bg-blue-300 border border-blue-400/20 
      shadow-lg rounded-2xl p-10 text-center transition-all 
      duration-300 hover:-translate-y-2 hover:shadow-2xl 
      hover:border-blue-400 hover:shadow-blue-400/30">


            {/* Ícone Oportunidades */}
            <div className="flex justify-center mb-6">
              <svg width="60" height="60" fill="#dbeafe" viewBox="0 0 24 24">
                <path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V4h-2v13zm4 2H3v2h18v-2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-blue-900">Oportunidades</h3>
            <p className="text-blue-900 mt-3 text-lg">
              Acompanhe negociações, valores e progresso.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="reveal bg-blue-300 border border-blue-400/20 
      shadow-lg rounded-2xl p-10 text-center transition-all 
      duration-300 hover:-translate-y-2 hover:shadow-2xl 
      hover:border-blue-400 hover:shadow-blue-400/30">


            {/* Ícone Produtividade */}
            <div className="flex justify-center mb-6">
              <svg width="60" height="60" fill="#dbeafe" viewBox="0 0 24 24">
                <path d="M19.14,12.94a7.17,7.17,0,0,0,0-1.88l2.11-1.65a.38.38,0,0,0,.09-.49l-2-3.46a.38.38,0,0,0-.48-.17l-2.49,1a7.28,7.28,0,0,0-1.62-.94L14.5,2.5a.37.37,0,0,0-.37-.34H9.87A.37.37,0,0,0,9.5,2.5L9.13,5.38a7.52,7.52,0,0,0-1.62.94l-2.49-1a.38.38,0,0,0-.48.17l-2,3.46a.38.38,0,0,0,.09.49L4.7,11.06a7.17,7.17,0,0,0,0,1.88L2.61,14.59a.38.38,0,0,0-.09.49l2,3.46a.38.38,0,0,0,.48.17l2.49-1a7.28,7.28,0,0,0,1.62.94L9.5,21.5a.37.37,0,0,0,.37.34h4.26a.37.37,0,0,0,.37-.34l.37-2.88a7.52,7.52,0,0,0,1.62-.94l2.49,1a.38.38,0,0,0,.48-.17l2-3.46a.38.38,0,0,0-.09-.49ZM12,15.6A3.6,3.6,0,1,1,15.6,12,3.6,3.6,0,0,1,12,15.6Z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-blue-900">Produtividade</h3>
            <p className="text-blue-900 mt-3 text-lg">
              Visualização moderna e ferramentas práticas.
            </p>
          </div>

        </div>
      </div>

      {/* BARRA DIVISÓRIA */}
      <section className="bg-blue-600 text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Com o CRMfy, equipes podem ver um aumento médio de 29% nas vendas
        </h1>
      </section>


      {/* SEÇÃO EQUIPE */}
      <section id="equipe" className="bg-blue-900 py-24">
        <Sobregrupo />
      </section>

      {/* SEÇÃO PROJETO */}
      <section id="projeto" className="bg-blue-900 py-24">
        <Sobreprojeto />
      </section>




    </>
  );
}

export default Home;



