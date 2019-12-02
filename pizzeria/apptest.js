const insertPizza = function(db, pizza, callback) {
  // Get the pizzas collection
  const collection = db.collection('pizzas');
  if (pizza.hasOwnProperty("name") && pizza["name"] !== "" && pizza.hasOwnProperty("price") && pizza["price"] !== "" && pizza.hasOwnProperty("icon") && pizza["icon"] !== "" && pizza.hasOwnProperty("ingredients") && pizza["ingredients"] !== []) {
    // Insert a pizza
    collection.insertOne({name: pizza.name, price: pizza.price, ingredients: pizza.ingredients, icon: pizza.icon}, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.ops.length);
      callback(result);
    });
  }
  else {
    console.log("There was an error when inserting this pizza :");
    console.log(pizza);
    console.log("Please check your entry.");
    callback("Error");
  }
}

const insertOnePizza = function(db, pizza, callback) {
  insertPizza(db, pizza, function(result) {
    if (result == null) {
      console.log("Inserted 1 pizza into the collection");
    }
    callback();
  });
}

const insertManyPizzas = function(db, pizzaArray, callback) {
  // Get the pizzas collection
  const collection = db.collection('pizzas');
  console.log(arguments);
  // Insert some pizzas
  var arrayPizz = [];
  for (i = 0; i < pizza.length; i++){

  }
  collection.insertMany([

  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) { // collection.find({'a': 3}).toArray(function(err, docs) { pour trouver tous les documents tels que 'a' : 3
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

const removeAllPizzas = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('pizzas');
  // Delete document where a is 3
  collection.deleteMany({}, function(err, result) {
    assert.equal(err, null);
    console.log("Removed all pizzas");
    callback(result);
  });
}

const indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pizzeria';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

const onePizzaTest = {name: 'PINOZETANT', price: '9.00€', ingredients: ['Tomate', 'jambon', 'ananas', ' fromages râpés'], icon: 'pizza'};
const twoPizzaTest = [
  {name: 'MERQUET', price: '9.40€', ingredients: ['Tomate', 'merguez', 'poivrons', 'fromages râpés'], icon: 'pizza'},
  {name: 'ROME', price: '9.40€', ingredients: ['Tomate', 'chorizo', 'poivrons', 'fromages râpés'], icon: 'pizza'}
];

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertOnePizza(db, onePizzaTest, function() {
    //findDocuments(db, function() {
      //updateDocument(db, function() {
        //indexCollection(db, function() {
          //removeDocument(db, function() {
            //removeAllPizzas(db, function() {
              client.close();
            //});
          //});
        //});
      //});
    //});
  });
});
