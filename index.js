'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/proyecto', (err, res) => {
//mongoose.connect('mongodb://duffycop:nitramper@ds147534.mlab.com:47534/truchifytest', (err, res) => {
  if(err){
    throw err;
  }else{
    console.log('La conexión a la base de datos está funcionando correctamente..');
    app.listen(port, function(){
      console.log("Servidor de api escuchando en http://localhost:3977");
    })
  }
});
