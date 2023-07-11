import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const database = firebase.database();
    const messagesRef = database.ref('messages');

    messagesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      }
    });

    return () => {
      messagesRef.off();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const database = firebase.database();
    const messagesRef = database.ref('messages');
    messagesRef.push({
      text,
    });
    setText('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Bem-vindo ao aplicativo de chat em React!</p>
    <Link to="/chat">Ir para o Chat</Link>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </div>
  </Router>
);

export default App;
