const http = require('http');
const app = require('./app');

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
  });