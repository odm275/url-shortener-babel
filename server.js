import express from 'express';
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db        = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //alows encoded requests

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

MongoClient.connect(db.url, (err,database) => {
  if(err) return console.log(err)
  require('./app/routes')(app,database);
  const listener = app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${listener.address().port}. 🚢`);
  });
})