<<<<<<< HEAD
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sobregrupo from './pages/sobregrupo/Sobregrupo';
import Sobreprojeto from './pages/sobreprojeto/Sobreprojeto';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    <Sobregrupo />
    <Sobreprojeto />
    </>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import ListaClientes from "./components/clientes/listaclientes/ListaClientes";
import ListaOportunidades from "./components/oportunidades/ListaOportunidades/ListaOportunidades";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/oportunidades" element={<ListaOportunidades />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
>>>>>>> feature/components-01
  );
}

export default App;
