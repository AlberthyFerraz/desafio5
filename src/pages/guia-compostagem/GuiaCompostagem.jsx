import './GuiaCompostagem.css';
import logo from '../../assets/logo-cor.jpg';
import card1 from '../../assets/card1.svg';
import subCard1 from '../../assets/sub-card-1.svg';
import subCard2 from '../../assets/sub-card-2.svg';
import subCard3 from '../../assets/sub-card-3.svg';

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
      <div id="card-guide-two">
        <h4>2. Tipos de Compostagem Doméstica</h4>
        <div className="sub-cards">
          <div id="sub-card-1">
            <h5>Compostagem em Pilha/Caixote:</h5>
            <p>Ideal para quem tem um pequeno quintal. Consiste em empilhar os materiais em um local arejado.</p>
            <img src={subCard1} alt="" />
          </div>
          <div id="sub-card-2">
            <h5>Minhocário (Vermicompostagem):</h5>
            <p>Utiliza minhocas californianas para acelerar o processo. Ótimo para espaços menores como varandas.</p>
            <img src={subCard2} alt="" />
          </div>
          <div id="sub-card-3">
            <h5>Compostagem em Baldes/Composteiras Urbanas:</h5>
            <p>Soluções compactas para apartamentos, utilizando baldes empilháveis ou sistemas selados.</p>
            <img src={subCard3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuiaCompostagem;