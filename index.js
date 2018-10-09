const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const films = require('./routes/films.js');
const actors = require('./routes/actors.js');
const images = require('./routes/images/images.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api/films', films);
app.use('/api/actors', actors);
app.use('/images/actors', images);



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});