import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/autenticacao/Login';
import Cadastro from './pages/autenticacao/Cadastro';
import SelecaoPerfil from './pages/selecao-perfil/SelecaoPerfil';
import Dashboard from './pages/dashboard/Dashboard';
import GuiaCompostagem from './pages/guia-compostagem/GuiaCompostagem';
import RedeComposta from './pages/rede-composta/RedeComposta';
import DiarioCompostagem from './pages/diario-compostagem/DiarioCompostagem';
import MeuImpacto from './pages/meu-impacto/MeuImpacto';

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