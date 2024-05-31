const express = require('express');
const port = 3000;

const axios = require('axios');
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
}));

app.listen(port, () => {
  console.log('http://localhost:3000 에서 서버 실행 중');
  console.log("https://openapi.naver.com/v1/search/local.json?query=" + encodeURI('경기도 광주시 주간보호센터') + "&display=10");
});

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/search', async (req, res) => {
  await axios({
    method: "get",
    url: "https://openapi.naver.com/v1/search/local.json?query=" + encodeURI(req.query.query) + "&display=5&sort=comment",
    headers: {
      "X-Naver-Client-Id": process.env.VUE_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.VUE_APP_NAVER_CLIENT_SECRET
    }
  })
  .then(response => {
    console.log(response.data);
    res.send(response.data);
    res.json(response.data)
  })
  .catch(e => console.log(e));
});