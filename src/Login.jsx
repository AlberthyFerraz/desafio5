import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Adicionei Link aqui
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      navigate('/selecao-perfil'); // Rota para a segunda tela
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Composta+</h2>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        
        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
      </div>
    </div>
  );
}

export default Login;