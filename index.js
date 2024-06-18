const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.status(400).send('Name parameter is required.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
