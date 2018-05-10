var express = require('express'),
   app = express(),
   port = process.env.PORT || 3000,
   mongoose = require('mongoose'),
   Task = require('./api/models/todoListModel'), // o model criado está sendo carregado aqui
   bodyParser = require('body-parser');

//  mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect('mongodb://caio:123@ds117540.mlab.com:17540/tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  middleware
//app.use(function(req, res) {
  //res.status(404).send({url: req.originalUrl + ' not found'})
//});

var routes = require('./api/routes/todoListRoutes'); //importando as rotas
routes(app); //registrando as rotas 

app.listen(port);

console.log('Todo list RESTful API server está rodando na porta: ' + port);
