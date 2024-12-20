import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const users = new Map();

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('join', (username) => {
      users.set(socket.id, username);
      io.emit('userList', Array.from(users.values()));
      io.emit('message', {
        user: 'System',
        text: `${username} has joined the chat`
      });
    });

    socket.on('message', (message) => {
      io.emit('message', {
        user: users.get(socket.id),
        text: message
      });
    });

    socket.on('disconnect', () => {
      const username = users.get(socket.id);
      users.delete(socket.id);
      io.emit('userList', Array.from(users.values()));
      io.emit('message', {
        user: 'System',
        text: `${username} has left the chat`
      });
    });
  });

  res.end();
};

export default SocketHandler;