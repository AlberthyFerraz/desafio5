import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../autenticacao/Login.css';
import axios from 'axios';

function SelecaoPerfil() {
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  const setComposter = async () => {
    const button = document.getElementById("composter-option");

    button.style.backgroundColor = "#114C02";

    const userId = localStorage.getItem("userId")
    try {
      await axios.put(`${url}/users/${userId}`, {
        role: "COMPOSTADOR"
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      navigate("/dashboard")
    } catch (error) {
      toast.error("Erro ao escolher o tipo de perfil, tente novamente!");
    }
  }

  const setDonate = async () => {
    const button = document.getElementById("donate-option");

    button.style.backgroundColor = "#114C02";

    const userId = localStorage.getItem("userId")
    try {
      await axios.put(`${url}/users/${userId}`, {
        role: "DOADOR"
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      navigate("/dashboard")
    } catch (error) {
      toast.error("Erro ao escolher o tipo de perfil, tente novamente!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Composta+</h2>
        <h3>Como você participará?</h3>
        
        <div className="opcoes-perfil">
          <button 
            onClick={setComposter}
            id="composter-option"
          >
            Sou Compostador(a)
          </button>
          
          <button 
            onClick={setDonate}
            id="donate-option"
          >
            Sou Doador(a)
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SelecaoPerfil