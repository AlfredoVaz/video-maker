const express = require('express');
const app = express();
const robots = require('./backend/index.js')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('static'))

app.post('/', (req, res) => {
  const lang = req.query.lang
  const input = req.query.input
  res.json(robots(lang, input))
})

app.listen(3333, () => {
  console.log(`API RUNNING ON http://localhost:${3333}`)
});