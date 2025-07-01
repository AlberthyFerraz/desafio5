import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RedeComposta.css';

function RedeComposta() {
  const [data, setData] = useState('');
  const [notas, setNotas] = useState('');

  const handleAnunciar = () => {
    if (!data || !notas) {
      alert('Preencha todos os campos!');
      return;
    }

    console.log('Data:', data);
    console.log('Notas:', notas);
    alert('Anúncio realizado com sucesso!');

    // Limpa os campos após anunciar
    setData('');
    setNotas('');
  };

  return (
    <div>
      {/* Menu */}
      <nav className="dashboard-nav">
                <Link to="/dashboard">🏠Início</Link>
                <Link to="/guia">📚Guia</Link>
                <Link to="/conexao">🤝Conexão</Link>
                <Link to="/diario">📒Diário</Link>
                <Link to="/impacto">🌎Impacto</Link>
                <Link to="/perfil"><i className="fa-solid fa-user"></i></Link>
           </nav>

      {/* Formulário */}
      <div className="anunciar-container">
        <h2>🤝 Rede Composta+</h2>
        <h3>Anunciar Disponibilidade</h3>

        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Notas:</label>
        <textarea
          placeholder="Ex: Período de disponibilidade, tipo de resíduo aceito"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
        ></textarea>

        <div className="button-container">
          <button className="cancelar" onClick={() => window.history.back()}>Cancelar</button>
          <button className="anunciar" onClick={handleAnunciar}>Anunciar</button>
        </div>
      </div>
    </div>
  );
}

export default RedeComposta;
