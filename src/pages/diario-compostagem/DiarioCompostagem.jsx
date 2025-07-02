import { Link } from 'react-router-dom';
import './DiarioCompostagem.css';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function DiarioCompostagem() {
  const [data, setDate] = useState("");
  const [tipoDeResiduo, setType] = useState("");
  const [notas, setNotes] = useState("");
  const [problemas, setProblems] = useState("");
  const [quantidadeDeResiduo, setAmount] = useState("");
  const [registros, setRegistros] = useState([]);

  const url = "http://localhost:4000";

  const buscarRegistros = async () => {
    try {
      const response = await axios.get(`${url}/records`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      setRegistros(response.data);
    } catch (error) {
      toast.error("Erro ao buscar registros!");
    }
  };

  useEffect(() => {
    buscarRegistros();
  }, []);

  const addRecord = async () => {
    if (!data || !tipoDeResiduo || !notas || !quantidadeDeResiduo || !problemas) {
      toast.error("Todos os campos precisam ser preenchidos!");
      return;
    }

    try {
      await axios.post(`${url}/records/`, {
        data,
        tipoDeResiduo,
        quantidadeDeResiduo,
        notas,
        problemas
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      toast.success("Registro feito com sucesso!");
      buscarRegistros();
    } catch (error) {
      toast.error("Erro ao fazer registro!");
    }
  };

  return (
    <div id="diary">
      <h1>📒 Diário de Compostagem</h1>
      <div id="add-record">
        <div id="title"><h2>Adicionar Novo Registro</h2></div>
        <div id="add-record-top">
          <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
          <input type="text" id="type" placeholder="Tipo de Resíduo (ex: Cozinha, Jardim)" onChange={(e) => setType(e.target.value)} />
        </div>
        <textarea id="notes" placeholder="Notas (ex: quantidade, mistura, estado)" onChange={(e) => setNotes(e.target.value)}></textarea>
        <input type="text" id="problems" placeholder="Problemas observados (separados por vírgula)" onChange={(e) => setProblems(e.target.value)} />
        <div id="add-record-bottom">
          <input type="number" placeholder="Quantidade de Resíduos" onChange={(e) => setAmount(e.target.value)} />
          <p>
            Coloque a quantidade aproximada de resíduos que você compostou em kg, 
            isso servirá para base de dados da seção de Impacto.
          </p>
        </div>
        <button id="add-record-btn" onClick={addRecord}>Adicionar Registro</button>
      </div>
      <div id="my-records">
        <div><h2>Meus Registros</h2></div>
        <ul id="records">
          {registros.map((registro) => (
            <li key={registro.id}>
              <p>Data: {new Date(registro.data).toLocaleDateString()}</p>
              <p>Tipo: {registro.tipoDeResiduo}</p>
              <p id="p-notes">Notas: {registro.notas}</p>
            </li>
          ))}
        </ul>
      </div>
      <nav className="dashboard-nav">
        <Link to="/dashboard">🏠Início</Link>
        <Link to="/guia">📚Guia</Link>
        <Link to="/conexao">🤝Conexão</Link>
        <Link to="/diario">📒Diário</Link>
        <Link to="/impacto">🌎Impacto</Link>
        <Link to="/perfil"><i className="fa-solid fa-user"></i></Link>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default DiarioCompostagem;
