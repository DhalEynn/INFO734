// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan   = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://localhost:27017/pizzeria');

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Models
const ModelPizzas = require('./models');

// Routes

    // Get all pizzas
    app.get('/api/pizzas', function(req, res) {

        console.log("fetching all pizzas");

        // use mongoose to get all pizzas in the database
        ModelPizzas.find({}, function(err, pizzas) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(pizzas); // return all pizzas in JSON format
        });
    });

    app.get('/api/pizza/:pizza_name', function(req, res) {

        console.log("fetching one pizza");

        // use mongoose to get the pizza in the database
        ModelPizzas.find(
        {
          name : req.params.pizza_name.toUpperCase()
        }, function(err, pizzas) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(pizzas); // return all pizzas in JSON format
        });
    });

    // create pizzas and send back all pizzas after creation
    app.post('/api/pizzas', function(req, res) {

      console.log("creating pizza");

      var name = req.body.name.toUpperCase(),
          price = req.body.price,
          ingredients = req.body.ingredients.split(','),
          icon = "pizza";

      ModelPizzas.findOneAndUpdate(
				{
					name : name
				},
				{
          name : name,
          price : price,
          ingredients: ingredients,
					icon: icon
        },
				{
					upsert : true
				}, function(err, pizzas) {
          if (err)
            res.send(err);

          // get and return all the pizzas after you create another
          ModelPizzas.find(function(err, pizzas) {
            if (err)
                res.send(err)
            res.json(pizzas);
          });
      });
    });

    // modify a pizza
    app.put('/api/pizzas/:pizza_name', function(req, res) {

      console.log("modifying pizza");

      var name = req.body.name.toUpperCase(),
          price = req.body.price,
          ingredients = req.body.ingredients.split(','),
          icon = "pizza";

      ModelPizzas.findOneAndUpdate(
				{
					name : req.params.pizza_name.toUpperCase()
				},
				{
          name : name,
          price : price,
          ingredients: ingredients,
					icon: icon
        }, function(err, pizzas) {
          if (err)
            res.send(err);

          // get and return all the pizzas after you create another
          ModelPizzas.find(function(err, pizzas) {
            if (err)
                res.send(err)
            res.json(pizzas);
          });
      });
    });

    // delete a pizza
    app.delete('/api/pizzas/:pizza_name', function(req, res) {

      console.log("deleting pizza : " + req.params.pizza_name);

      ModelPizzas.findOneAndRemove({
          name : req.params.pizza_name
      }, function(err, pizzas) {
        if (err)
          res.send(err);
        res.json({info: 'Pizza deleted'});
      });
    });

    const CoreRoutes = require('./core/routes');
    app.use(CoreRoutes);
    const UnknownRoutes = require('./core/middleware/errorhandlers');
    app.use(UnknownRoutes.notFound);

// listen (start app with node server.js) ======================================
const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log('App server running on port ' + PORT);
