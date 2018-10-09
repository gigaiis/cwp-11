const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const actors = require('./routes/actors.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api/actors', actors);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});