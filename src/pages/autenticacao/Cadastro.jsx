import { Link } from 'react-router-dom';
import './Login.css';

function Cadastro() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Cadastre-se no Composta+</h2>
        
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        
        <button className="login-button">Cadastrar</button>
        
        <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
      </div>
    </div>
  );
}

export default Cadastro;
