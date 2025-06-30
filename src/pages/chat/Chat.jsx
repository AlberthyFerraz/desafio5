import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou seu assistente de compostagem. Como posso ajudar hoje?', sender: 'ai' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    // Adiciona a mensagem do usuário
    setMessages([...messages, { text: message, sender: 'user' }]);
    
    // Limpa o input
    setMessage('');
    
    // Aqui você pode adicionar a lógica para a resposta da IA
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1><span>💬</span>Chat com IA</h1>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}-message`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </form>

      <nav className="chat-nav">
        <Link to="/dashboard">Início</Link>
        <Link to="/guia">Guia</Link>
        <Link to="/conexao">Conexão</Link>
        <Link to="/diario">Diário</Link>
        <Link to="/impacto">Impacto</Link>
      </nav>
    </div>
  );
}

export default Chat;