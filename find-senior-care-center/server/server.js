const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');
require("dotenv").config();

app.listen(port, () => {
  console.log('http://localhost:3000 에서 서버 실행 중');
});

app.get('/', (req, res) => {
  res.send("Hello World!!!");

  axios({
    method: "get",
    url: "https://openapi.naver.com/v1/search/local.json?query=" + encodeURI('경복궁') + "&display=5",
    headers: {
      "X-Naver-Client-Id": process.env.VUE_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.VUE_APP_NAVER_CLIENT_SECRET
    }
  })
  .then(res => {
    console.log(res.data);  
  })
  .catch(e => console.log(e))
});