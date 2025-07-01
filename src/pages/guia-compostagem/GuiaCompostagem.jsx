import './GuiaCompostagem.css';
import logo from '../../assets/logo-cor.jpg';
import card1 from '../../assets/card1.svg';
import subCard1 from '../../assets/sub-card-1.svg';
import subCard2 from '../../assets/sub-card-2.svg';
import subCard3 from '../../assets/sub-card-3.svg';
import card4One from '../../assets/card4-1.svg';
import card4Two from '../../assets/card4-2.svg';
import card4Three from '../../assets/card4-3.svg';
import card4Four from '../../assets/card4-4.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import linkedin from '../../assets/linkedin.svg';
import { Link } from 'react-router-dom';
function GuiaCompostagem() {
  // Função para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="guide-container">
      <div className="header-guide">
        <div className="title">
          <h2>📚  Guia de Compostagem</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a 
                className="option" 
                href="#card-guide-one"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('card-guide-one');
                }}
              >
                1
              </a>
            </li>
            <li>
              <a 
                className="option" 
                href="#card-guide-two"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('card-guide-two');
                }}
              >
                2
              </a>
            </li>
            <li>
              <a 
                className="option" 
                href="#card-guide-three"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('card-guide-three');
                }}
              >
                3
              </a>
            </li>
            <li>
              <a 
                className="option" 
                href="#card-guide-four"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('card-guide-four');
                }}
              >
                4
              </a>
            </li>
          </ul>
          <button id="home-button"><Link to="/dashboard"><img id="logo" src={logo} alt="Logo Composta+" /></Link></button>
        </div>
      </div>
      
      {/* Seção de Introdução */}
      <section id="introducao">
        <p>Aprenda os fundamentos da compostagem doméstica para transformar resíduos orgânicos em adubo rico.</p>
        <div className="game-section">
          <h3>🎮 Aprenda Jogando!</h3>
          <p>Coloque seus conhecimentos de compostagem à prova de forma divertida!</p>
          <button>Iniciar Jogo de Compostagem</button>
        </div>
      </section>

      {/* Seção 1 */}
      <section id="card-guide-one">
        <img src={card1} alt="Ilustração de compostagem" />
        <div>
          <h4>1. O que é Compostagem?</h4>
          <p>
            Compostagem é um processo biológico de valorização da matéria orgânica, 
            no qual microrganismos transformam resíduos como restos de alimentos e 
            podas de jardim em um material rico em nutrientes, o composto orgânico. 
            Este composto pode ser utilizado como adubo para plantas e jardins.
          </p>
        </div>
      </section>

      {/* Seção 2 */}
      <section id="card-guide-two">
        <h4>2. Tipos de Compostagem Doméstica</h4>
        <div className="sub-cards">
          <div id="sub-card-1">
            <h5>Compostagem em Pilha/Caixote:</h5>
            <p>Ideal para quem tem um pequeno quintal. Consiste em empilhar os materiais em um local arejado.</p>
            <img src={subCard1} alt="Compostagem em pilha" />
          </div>
          <div id="sub-card-2">
            <h5>Minhocário (Vermicompostagem):</h5>
            <p>Utiliza minhocas californianas para acelerar o processo. Ótimo para espaços menores como varandas.</p>
            <img src={subCard2} alt="Minhocário" />
          </div>
          <div id="sub-card-3">
            <h5>Compostagem em Baldes/Composteiras Urbanas:</h5>
            <p>Soluções compactas para apartamentos, utilizando baldes empilháveis ou sistemas selados.</p>
            <img src={subCard3} alt="Composteira urbana" />
          </div>
        </div>
      </section>

      {/* Seção 3 */}
      <section id="card-guide-three">
        <h4>3. O que Pode e Não Pode Compostar?</h4>
        <div className="tables-container">
          <table>
            <thead>
              <tr>
                <th>Pode Compostar ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Restos de frutas e vegetais</td></tr>
              <tr><td>Cascas de ovo (trituradas)</td></tr>
              <tr><td>Borra de café e coador de papel</td></tr>
              <tr><td>Sacos de chá</td></tr>
              <tr><td>Folhas secas e grama cortada</td></tr>
              <tr><td>Pequenos galhos e gravetos</td></tr>
              <tr><td>Serragem e palha (não tratadas)</td></tr>
              <tr><td>Pó de serra limpo</td></tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Não Pode Compostar ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Carne, peixe e ossos</td></tr>
              <tr><td>Laticínios e produtos oleosos</td></tr>
              <tr><td>Alimentos cozidos (em grande quantidade)</td></tr>
              <tr><td>Feijão e arroz (atraem pragas)</td></tr>
              <tr><td>Excrementos de animais de estimação</td></tr>
              <tr><td>Plantas doentes</td></tr>
              <tr><td>Madeira tratada ou pintada</td></tr>
              <tr><td>Plásticos, vidros, metais</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção 4 */}
      <section id="card-guide-four">
        <h4>4. Dicas Essenciais</h4>
        <div className="dicas-texto">
          <p><span>Equilíbrio:</span> Mantenha uma boa proporção de materiais "verdes" (ricos em nitrogênio, úmidos) e "marrons" (ricos em carbono, secos).</p>
          <p><span>Aeração:</span> Revire o composto regularmente para garantir oxigenação e evitar mau cheiro.</p>
          <p><span>Umidade:</span> Mantenha o composto úmido como uma esponja torcida, mas não encharcado.</p>
          <p><span>Paciência:</span> A compostagem leva tempo, mas o resultado vale a pena!</p>
        </div>
        <div id="image-cards">
          <img src={card4One} alt="Dica 1" />
          <img src={card4Two} alt="Dica 2" />
          <img src={card4Three} alt="Dica 3" />
          <img src={card4Four} alt="Dica 4" />
        </div>
      </section>

      {/* Rodapé */}
      <footer id="social-area">
        <div>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
        </div>
        <Link to="/dashboard"><img id="social-area-logo" src={logo} alt="Logo Composta+" /></Link>
        <div>
          <img src={youtube} alt="YouTube" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </footer>
      <p id="copyright">© 2025 Educação em Dados. Todos os direitos reservados.</p>

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

export default GuiaCompostagem;