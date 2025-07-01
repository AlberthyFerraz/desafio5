import { Link } from 'react-router-dom';
import './Perfil.css';
import composter from '../../assets/composter.svg';

function Perfil() {
    return (
        <div id="perfil-container">
            <div id="perfil-card">
                <h2>👤 Meu Perfil</h2>
                <img src={composter} id="perfil" alt="perfil-image" />
                <h5>Usuario</h5>
                <p id="email">email</p>
                <p id="type-perfil">Participando como</p>
                <button id="edit-perfil">Editar Perfil</button>
                <button id="logout">Sair</button>
            </div>
            <nav className="dashboard-nav">
                <Link to="/dashboard">🏠Início</Link>
                <Link to="/guia">📚Guia</Link>
                <Link to="/conexao">🤝Conexão</Link>
                <Link to="/diario">📒Diário</Link>
                <Link to="/impacto">🌎Impacto</Link>
                <Link to="/perfil"><i className="fa-solid fa-user"></i></Link>
           </nav>
        </div>
    )
}

export default Perfil;