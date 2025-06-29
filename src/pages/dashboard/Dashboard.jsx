import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo-cor.jpg';
import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const tipoPerfil = location.state?.tipoPerfil || 'Compostador(a)';

  return (
    <div className="dashboard-container">
       <div className="logo-container">
        <img src={logo} alt="Logo Composta+" className="dashboard-logo" />
      </div>
      <h1>Bem-vindo(a) ao Composta+!</h1>
      <p>Você está participando como <strong>{tipoPerfil}</strong>.</p>

      <div className="dashboard-grid">
        <Link to="/guia" className="dashboard-card">
          <h2><span >📚</span><br/>Guia de Compostagem</h2>
          <p>Aprenda tudo sobre compostagem.</p>
        </Link>

        <Link to="/conexao" className="dashboard-card">
          <h2>Rede Composta+</h2>
          <p>Conecte-se com {tipoPerfil.includes('Compostador') ? 'doadores' : 'compostadores'}.</p>
        </Link>

        <Link to="/diario" className="dashboard-card">
          <h2>Diário de Compostagem</h2>
          <p>Registre suas atividades e progressos.</p>
        </Link>

        <Link to="/impacto" className="dashboard-card">
          <h2>Meu Impacto</h2>
          <p>Veja sua contribuição para o meio ambiente.</p>
        </Link>
      </div>

      <nav className="dashboard-nav">
        <Link to="/dashboard">Início</Link>
        <Link to="/guia">Guia</Link>
        <Link to="/conexao">Conexão</Link>
        <Link to="/diario">Diário</Link>
        <Link to="/impacto">Impacto</Link>
      </nav>
    </div>
  );
}

export default Dashboard;