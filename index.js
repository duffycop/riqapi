'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://wHNxaQnFkcrvI3F6:eL5CEaP107UuRIzf@cluster0-shard-00-00-qp52v.mongodb.net:27017,cluster0-shard-00-01-qp52v.mongodb.net:27017,cluster0-shard-00-02-qp52v.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', (err, res) => {
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
