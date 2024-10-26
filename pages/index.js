import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import styles from '../components/Chat.module.css';

export default function Home() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [joined, setJoined] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/socket');
      const newSocket = io();
      setSocket(newSocket);

      newSocket.on('message', (message) => {
        setMessages((prev) => [...prev, message]);
      });

      newSocket.on('userList', (userList) => {
        setUsers(userList);
      });
    };

    if (!socket) socketInitializer();

    return () => {
      if (socket) socket.disconnect();
    };
  }, [socket]);

  const handleJoin = (e) => {
    e.preventDefault();
    if (username.trim() && socket) {
      socket.emit('join', username);
      setJoined(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  if (!joined) {
    return (
      <div className={styles.main}>
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1 className={styles.loginTitle}>Join Chat</h1>
            <form onSubmit={handleJoin} className={styles.loginForm}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className={styles.loginInput}
                required
              />
              <button
                type="submit"
                className={styles.loginButton}
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatContainer}>
      {/* Online Users Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Online Users ({users.length})</h2>
        </div>
        <div className={styles.userList}>
          <ul>
            {users.map((user, index) => (
              <li key={index} className={styles.userItem}>
                <span className={styles.onlineIndicator}></span>
                <span className={user === username ? styles.username : ""}>
                  {user} {user === username ? "(You)" : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Chat Area */}
      <div className={styles.chatArea}>
        <div className={styles.messageContainer}>
          {messages.map((msg, index) => {
            if (msg.user === 'System') {
              return (
                <div key={index} className={styles.systemMessage}>
                  <span className={styles.systemMessageText}>
                    {msg.text}
                  </span>
                </div>
              );
            }

            const isSentByMe = msg.user === username;

            return (
              <div
                key={index}
                className={`${styles.messageWrapper} ${
                  isSentByMe ? styles.messageRight : styles.messageLeft
                }`}
              >
                <div
                  className={`${styles.messageBubble} ${
                    isSentByMe ? styles.myMessage : styles.otherMessage
                  }`}
                >
                  <div className={styles.messageContent}>
                    <span className={styles.username}>{msg.user}:- </span>
                    <span>{msg.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSubmit} className={styles.inputArea}>
          <div className={styles.inputForm}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className={styles.messageInput}
            />
            <button
              type="submit"
              className={styles.sendButton}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}