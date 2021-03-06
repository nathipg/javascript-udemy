const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  const method = request.method;
  const url = request.url;

  request.on('data', chunk => {
    body.push(chunk);
  });
  
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    
    let userName = 'Unknown User';
    if(body) {
      userName = body.split('=')[1];
    }

    response.setHeader('Content-Type', 'text/html');
    response.write(`
      <form method="POST" action="/">
        <input type="text" name="username" />
        <button type="submit">Send</button>
      </form>
      <h1>Hi, ${userName}</h1>
    `);
    response.end();
  });
});

server.listen(3000);