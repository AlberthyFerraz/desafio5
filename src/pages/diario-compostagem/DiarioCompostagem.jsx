import { Link } from 'react-router-dom';
import './DiarioCompostagem.css';
function DiarioCompostagem() {
  return (
    <div id="diary">
      <h1>📒 Diário de Compostagem</h1>
      <div id="add-record">
        <div id="title"><h2>Adicionar Novo Registro</h2></div>
        <div id="add-record-top">
          <input type="date" id="date"/>
          <input type="text" id="type" placeholder="Tipo de Resíduo (ex: Cozinha, Jardim)"/>
        </div>
        <textarea id="notes" placeholder="Notas (ex: quantidade, mistura, estado)"></textarea>
        <input type="text" id="problems" placeholder="Problemas observados (separados por vírgula)"/>
        <div id="add-record-bottom">
          <input type="number" placeholder="Quantidade de Resíduos"/>
          <p>
            Coloque a quantidade aproximada de resíduos que você compostou, 
            isso servirá para base de dados da seção de Impacto.
          </p>
        </div>
        <button id="add-record-btn">Adicionar Registro</button>
      </div>
      <div id="my-records">
        <div><h2>Meus Registros</h2></div>
        <ul id="records">
          <li>
            <p>Data: 00/00/00</p>
            <p>Tipo: Orgânicos da Cozinha</p>
            <p id="p-notes">Notas: Restos de frutas e vegetais. Sem cheiro forte.</p>
          </li>
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
    </div>
  );
}

export default DiarioCompostagem;