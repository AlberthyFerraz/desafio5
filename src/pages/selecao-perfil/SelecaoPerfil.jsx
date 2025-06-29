import { useNavigate } from 'react-router-dom';
import '../autenticacao/Login.css';

function SelecaoPerfil() {
  const navigate = useNavigate();

  const handleSelecionarPerfil = (tipo) => {
    navigate('/dashboard', { state: { tipoPerfil: tipo } });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Composta+</h2>
        <h3>Como você participará?</h3>
        
        <div className="opcoes-perfil">
          <button 
            onClick={() => handleSelecionarPerfil('Compostador(a)')}
            className="perfil-option"
          >
            Sou Compostador(a)
          </button>
          
          <button 
            onClick={() => handleSelecionarPerfil('Doador(a)')}
            className="perfil-option"
          >
            Sou Doador(a)
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelecaoPerfil