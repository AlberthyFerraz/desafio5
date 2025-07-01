import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const url = "http://localhost:4000";

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Todos os campos precisam ser preenchidos!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    try {
      await axios.post(`${url}/users/register`, {
        name,
        email,
        password,
        confirmPassword
      })
      .then((response) => {
        const data = response.data;
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("token", data.token);
      })
      toast.success("Registro feito com sucesso. Faça Login!");
      navigate("/selecao-perfil");
    } catch (error) {
      toast.error("Erro ao tentar se registrar, tente novamente!");
    }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Cadastre-se no Composta+</h2>
        
        <input type="text" placeholder="Nome Completo" onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="Confirmar Senha" onChange={(e) => setConfirmPassword(e.target.value)}/>
        
        <button className="login-button" onClick={handleRegister}>Cadastrar</button>
        
        <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cadastro;
