const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: String,
  price: String,
  ingredients: Array,
  icon: String,
  done : false
},
{
  versionKey: false
});

module.exports = mongoose.model('pizzas', PizzaSchema);
