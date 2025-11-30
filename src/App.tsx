import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sobregrupo from './pages/sobregrupo/Sobregrupo';
import Sobreprojeto from './pages/sobreprojeto/Sobreprojeto';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Equipe" element={<Sobregrupo />} />
        <Route path="/Projeto" element={<Sobreprojeto />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
