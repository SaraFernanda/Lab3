const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/')); //todos los elementos de la acrpeta public serán utilizados

app.listen('3000', function() {
  console.log('Escuchando puerto 3000');
});