const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'dist/index.hml'));
});

const port = process.env.Port || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));