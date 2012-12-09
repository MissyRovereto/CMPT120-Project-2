// gamelogicfinal.js

var moveCount=0;
var playerHasCape= false;
var playerHasMask= false;
var playerHasMustache= false;
var playerHasRocketship= false;

var Inventory = " ";
var inventoryNumber = 0;
var totalInventory = " ";
var allItems= new Array ();

var score= 0;

function init() {
  test();
  test2 ();
  updateDisplay(locale0);
  updateDisplay(allItems[0]);
}

function Item(_id, _name, _description) {
   this.name     = _name;
   this.description   = _description;
}

this.toString = function() {
      var retVal = "";
      retVal = "name:" + this.name         + "\n" +
               "description:" + this.description      + "\n";
      return retVal;
   }   

function notake() {
var msg = "Nothing to take.";
updateDisplay(msg);
} 

function take() {
  
  if (currentLocale === 1){
       updateDisplay(allItems[1].description);
       inventoryNumber= inventoryNumber + 1;
       totalInventory= totalInventory + " " + "mustache";
    } else if (currentLocale === 2){
       updateDisplay(allItems[3].description);
       inventoryNumber= inventoryNumber + 1;
       totalInventory= totalInventory + " " + "cape";
    } else if (currentLocale === 3) {
       updateDisplay(allItems[2].description);
       inventoryNumber= inventoryNumber + 1;
       totalInventory= totalInventory + " " + "rocketship";
    } else if (currentLocale === 6) {
       updateDisplay(allItems[4].description);
       inventoryNumber= inventoryNumber + 1;
       totalInventory= totalInventory + " " + "mask";
    } else {
       updateDisplay("There is nothing to take");
    }
}

function printScore() {
  if (moveCount===0) {
  updateDisplay("Score: " + score);
  } else {
  updateDisplay ("Score: " + (score+5));
  }
}

function visitLocale () {
  var locale= allLocales [currentLocale];
  if (!locale.visited) {
    locale.visited= true;
    score= score + 10;
    } else {
      //don't do anything
    }
}

//the puzzle piece to the project
//the player needs four items in their inventory
//the items will regenerate so the player can have more than one of each item
function hasAllItems () {
  if(inventoryNumber===4) {
    return true;
    } else {
      return false;
    }
}

function displayInventory() {
  if (inventoryNumber=== 0) {
    updateDisplay("There are no items in your inventory.");
  } else {
    updateDisplay("Inventory:" + " " + totalInventory);
  }
}

function help() {
  var msg= "Need some help? Here's the deal: You can go North, South, East, or West, depending on your current location. In order to win and make the Great Escape, you will need to get both items into your inventory when you reach the final destination. Good Luck!";
  updateDisplay(msg);
}