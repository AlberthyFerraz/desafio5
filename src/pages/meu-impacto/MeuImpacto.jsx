import React, { useState, useEffect } from 'react';
import './Impacto.css'; // Você precisará criar este arquivo CSS
import { Link } from 'react-router-dom';
function MeuImpacto() {
  // Estados que serão atualizados pela API futuramente
  const [residuosDesviados, setResiduosDesviados] = useState(0); // em kg
  const [co2NaoEmitido, setCo2NaoEmitido] = useState(0); // em kg
  const [pontuacao, setPontuacao] = useState(0); // pontos

  // Efeito para simular a busca de dados da API (remova quando implementar a API real)
  useEffect(() => {
    // Esta é uma simulação - substitua pela chamada real à API
    const fetchDadosImpacto = async () => {
      // Exemplo de dados estáticos - substitua pela chamada à API
      const dadosFake = {
        residuos: 125,    // kg
        co2: 42,         // kg
        pontos: 1560      // pontos
      };
      
      setResiduosDesviados(dadosFake.residuos);
      setCo2NaoEmitido(dadosFake.co2);
      setPontuacao(dadosFake.pontos);
    };

    fetchDadosImpacto();
    
    // Para implementação real:
    // 1. Crie uma função que faz fetch para sua API
    // 2. Atualize os estados com a resposta
    // 3. Trate erros adequadamente
  }, []);

  return (
    <div className="impacto-container">
      <h1> 🌎Meu Impacto Ambiental</h1>
      
      {/* Card de Resíduos Desviados */}
      <div className="impacto-card">
        <h2> 🗑️<br />Resíduos Desviados</h2>
        <div className="impacto-valor">{residuosDesviados}kg</div>
        <p className="impacto-descricao">
          Estimativa de orgânicos desviados do lixo comum
        </p>
      </div>

      {/* Card de CO₂ Não Emitido */}
      <div className="impacto-card">
        <h2>🌳<br />CO₂ Não Emitido</h2>
        <div className="impacto-valor">{co2NaoEmitido}kg</div>
        <p className="impacto-descricao">
          Equivalente em CO₂ que deixou de ser emitido
        </p>
      </div>

      {/* Card de Pontuação */}
      <div className="impacto-card">
        <h2>🌟<br />Sua Pontuação Composta+</h2>
        <div className="impacto-valor">{pontuacao}</div>
        <p className="impacto-descricao">
          Continue contribuindo para ganhar mais pontos!
        </p>
      </div>

      {/* Espaço para futuros elementos ou gráficos */}

  {/* Navegação Inferior */}
      <nav className="dashboard-nav">
         <Link to="/dashboard">🏠<br /> Início</Link>
        <Link to="/guia">📚<br />Guia</Link>
        <Link to="/conexao">🤝<br />Conexão</Link>
        <Link to="/impacto">🌎<br />Impacto</Link>
      </nav>
    </div>
  );
}

export default MeuImpacto;