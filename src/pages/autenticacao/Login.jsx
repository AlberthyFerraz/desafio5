import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const url = "http://localhost:4000"

  const validaEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Todos os campos precisam ser preenchidos!");
      return;
    }

    if (!validaEmail(email)) {
      toast.error("Email inválido!");
      return;
    }

    // Verificação direta para admin
    if (email === 'admin@admin.com' && password === 'admin') {
      toast.success("Login de administrador feito com sucesso!");
      localStorage.setItem("token", "admin-token");
      navigate("/dashboard");
      return; // Finaliza a função aqui
    }

    try {
      await axios.post(`${url}/users/login`, { 
        email, password 
      })
      .then((response) => {
        const data = response.data;
        localStorage.setItem("token", data.token);
      })
      
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao tentar fazer Login, tente novamente!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Composta+</h2>
        
        <form>
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
          
          <button onClick={handleLogin} className="login-button">
            Entrar
          </button>
        </form>
        
        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
