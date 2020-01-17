# INFO 734 : Fullstack development @ Polytech Annecy

## Project with NodeJS, IONIC 4, MongoDB.

## Pizzeria :

* *Italics show that a part is done*
* **Bold show that a part hasn't been finished**

### Static part with the menu card
* *Write the list directly in the html code*
* *Put the ingredients in a collapsable part*
* *Use a database to make the list*

### Dynamic part with the daily menu

* *Put the menu on a database*
* **Be able to enter the daily menu : Only work when manually changing the menu in "pizzeria > src > app > list > list.page.ts >> this.getOnePizza("_PIZZANAME_")" (line 53)**
* **Change automatically the daily menu as the database change : partially feasible following the above procedure**

## For bonus :

* ~~Being able to order (\*)~~
* ~~The pizzeria is informed that someone ordered (\*\*)~~
* ~~Being able to pay for it (\*\*\*)~~

# To use the application :

* Install the folder on your computer (download the archive or git clone it)
* Install MongoDB, Ionic and NPM
* Open 4 command prompts (for each command, please wait until the text stop defiling before typing the command in the next command prompt) :
  * First, create the path "*Your PATH*\INFO734 - git\data\db"
  * Command prompt 1 - Write ```"*YOUR_PATH*\MongoDB\bin\mongod.exe" --dbpath="*Your PATH*\INFO734 - git\data\db"```
  * Command prompt 2 - Write ```"YOUR_PATH\MongoDB\bin\mongo.exe"```
  * Now, in the mongo shell (Command prompt 2), write
    * ```use pizzeria```
    * ```db.createCollection("pizzas")```
  * Command prompt 3 - Write
    * ```cd server```
    * ```node server.js```
  * Command prompt 4 - Write Write
    * ```cd server```
    * ```ionic serve```
* The application is located at http://localhost:8100

# Use http requests with Postman :
Several commands are avaliable for our application (remember to launch at least the first 3 command prompts before trying these) :

* **GET** all pizzas : In the body tab of your request, change "none" by "x-www-form-urlencoded" then send the request on http://localhost:8080/api/pizzas
* **GET** one pizza : In the body tab of your request, change "none" by "x-www-form-urlencoded" then send the request on http://localhost:8080/api/pizzas/PIZZANAME
  * Exemple : ```http://localhost:8080/api/pizzas/CACTUS``` will return the pizza named CACTUS.


* **POST** add a pizza : In the body tab of your request, change "none" by "x-www-form-urlencoded" then enter the values nedeed following the model and send the request on http://localhost:8080/api/pizzas.
Model :
  * name : *PIZZANAME*
  * price : *PRICE*€
  * ingredients : *LISTOFINGREDIENTS* (separated by commas)

*One important point is that this request will replace a pizza if the name PIZZANAME is already used to avoid possible duplicates.*


* **PUT** modify a pizza : In the body tab of your request, change "none" by "x-www-form-urlencoded" then enter ALL the values nedeed following the model above and send the request on http://localhost:8080/api/pizzas/PIZZANAME.

*For exemple, if you want to change the price of your pizza CACTUS, you need to enter the values for the price __BUT ALSO__ for the "name" and "ingredients" fields*

* **DELETE** a pizza : Just send a delete request on http://localhost:8080/api/pizzas/PIZZANAME
