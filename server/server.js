const express = require('express');
const app = express();

const main = require('./server/routes/main/main');

app.use('/', main);

app.listen(4000, () => console.log('Listening on 4000'));
