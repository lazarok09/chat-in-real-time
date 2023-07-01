const server = require('http').createServer();

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('User connected');
  socket.broadcast.emit('Welcome to my socket app');

  socket.on('chat message', (msg) => {
    /* ... */
    console.log(`received an text: ${msg}`);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    /* ... */
    console.log('opa desconectei');
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server is running on port 3001');
});
