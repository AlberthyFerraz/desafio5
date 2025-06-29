import './GuiaCompostagem.css';
import logo from '../../assets/logo-cor.jpg';
import card1 from '../../assets/card1.svg';

function GuiaCompostagem() {
  return (
    <div className="guide-container">
      <div className="header-guide">
        <div className="title">
          <h2>📚  Guia de Compostagem</h2>
        </div>
        <div className="menu">
          <ul>
            <li><a className="option" href="#">1</a></li>
            <li><a className="option" href="#">2</a></li>
            <li><a className="option" href="#">3</a></li>
            <li><a className="option" href="#">4</a></li>
          </ul>
          <button id="home-button"><img id="logo" src={logo} alt="" /></button>
        </div>
      </div>
      <p>Aprenda os fundamentos da compostagem doméstica para transformar resíduos orgânicos em adubo rico.</p>
      <div className="game-section">
        <h3>🎮 Aprenda Jogando!</h3>
        <p>Coloque seus conhecimentos de compostagem à prova de forma divertida!</p>
        <button>Iniciar Jogo de Compostagem</button>
      </div>
      <div id="card-guide-one">
        <img src={card1} alt="" />
        <div>
          <h4>1. O que é Compostagem?</h4>
          <p>
            Compostagem é um processo biológico de valorização da matéria orgânica, 
            no qual microrganismos transformam resíduos como restos de alimentos e 
            podas de jardim em um material rico em nutrientes, o composto orgânico. 
            Este composto pode ser utilizado como adubo para plantas e jardins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuiaCompostagem;