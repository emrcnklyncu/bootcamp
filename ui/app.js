
require('dotenv').config({ path: 'env/app.env' });

const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  request({
    url: `${process.env.API_URL}`,
    method: 'GET',
  }, function (error, response, body) {
    if (response && response.statusCode == 200 && body) {
      res.render('index', { title: 'Good News!!', ready: 'API is ready. :)', body: body })
    } else {
      res.render('index', { title: 'Bad News!!', notready: 'API isn\'t ready. :(' })
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log('App is running at http://localhost:%d', process.env.PORT);
  console.log('Press CTRL-C to stop\n');
});