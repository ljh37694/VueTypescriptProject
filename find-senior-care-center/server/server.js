const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('http://localhost:3000 에서 서버 실행 중');
});

app.get('/', (req, res) => {
  res.send("Hello World!");
});