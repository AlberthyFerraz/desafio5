import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Composta+</h2>
        
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        
        <button className="login-button">Entrar</button>
        
        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
      </div>
    </div>
  );
}

export default Login;