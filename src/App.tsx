import { Route, Routes } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Sobregrupo from "./pages/sobregrupo/Sobregrupo";
import Sobreprojeto from "./pages/sobreprojeto/Sobreprojeto";
import ListaClientes from "./components/clientes/listaclientes/ListaClientes";
import ListaOportunidades from "./components/oportunidades/listaoportunidades/ListaOportunidades";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Equipe" element={<Sobregrupo />} />
          <Route path="/Projeto" element={<Sobreprojeto />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/oportunidades" element={<ListaOportunidades />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;