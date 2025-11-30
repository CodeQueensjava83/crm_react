import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(id: string) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full flex justify-center py-8 bg-blue-700 text-white">
      <div className="container flex justify-between text-lg mx-8 font-bold tracking-wide">

        {/* LOGO/NOME */}
        <span
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          CRMfy
        </span>

        {/* MENU */}
        <div className="flex gap-4 divide-x divide-white/40">

          {/* CLIENTES */}
          <span
            className="px-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate("/clientes")}
          >
            Clientes
          </span>

          {/* OPORTUNIDADES */}
          <span
            className="px-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate("/oportunidades")}
          >
            Oportunidades
          </span>

          {/* EQUIPE — rolagem */}
          <span
            className="px-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => goToSection("equipe")}
          >
            Equipe
          </span>

          {/* PROJETO — rolagem */}
          <span
            className="px-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => goToSection("projeto")}
          >
            Projeto
          </span>

          {/* SAIR / LOGIN */}
          <span
            className="px-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate("/login")}
          >
            Sair
          </span>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
