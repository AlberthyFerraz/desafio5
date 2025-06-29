import './GuiaCompostagem.css';
import logo from '../../assets/logo-cor.jpg';

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
    </div>
  );
}

export default GuiaCompostagem;