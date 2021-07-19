const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User';

  res.send(`
    <form method="POST" action="/">
      <input type="text" name="username" />
      <button type="submit">Send</button>
    </form>
    <h1>Hi, ${userName}</h1>
  `);
});

app.listen(3000);