import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import SelecaoPerfil from './SelecaoPerfil';
import Dashboard from './Dashboard';
import GuiaCompostagem from './GuiaCompostagem';
import RedeComposta from './RedeComposta';
import DiarioCompostagem from './DiarioCompostagem';
import MeuImpacto from './MeuImpacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/selecao-perfil" element={<SelecaoPerfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guia" element={<GuiaCompostagem />} />
        <Route path="/conexao" element={<RedeComposta />} />
        <Route path="/diario" element={<DiarioCompostagem />} />
        <Route path="/impacto" element={<MeuImpacto />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;