// gamelogicproject5.js

var moveCount=0;
var playerHasCape= true;
var playerHasMask= true;
var playerHasMustache= true;
var playerHasRocketship= true;

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

var cape = new Item(0, "cape", "You found the cape.");
var mask = new Item(1, "mask", "You found the mask.");
var mustache = new Item(2, "mustache", "You found a mustache.");
var rocketship = new Item(3, "rocketship", "You found a rocketship.");

var arrayItem = new Array();
allItems[0] = cape;
allItems[1] = mask;
allItems[2] = mustache;
allItems[3] = rocketship;

var totalInventory = " ";
var inventoryNumber = 0;


function take() {
  switch(currentLocale) {
  case 1:
  if (playerHasCape) {
    updateDisplay("You took the cape");
    inventoryNumber = inventoryNumber + 1;
    totalInventory = totalInventory + "Cape";
    playerHasCape = false;
  } else {
    notake();
  }
  break;
  case 2:
  if (playerHasMask) {
    updateDisplay("You took the mask");
    inventoryNumber = inventoryNumber + 1;
    totalInventory = totalInventory + "\n" + "Mask";
    playerHasMask = false;
  } else {
    notake();
  }
  break;
  case 3:
  if (playerHasMustache) {
    updateDisplay("You took the mustache");
    inventoryNumber = inventoryNumber + 1;
    totalInventory = totalInventory + "\n" + "Mustache";
    playerHasMustache = false;
  } else {
    notake();
  }
  break;
  case 6:
  if (playerHasRocketship) {
    updateDisplay("You took the rocketship");
    inventoryNumber = inventoryNumber + 1;
    totalInventory = totalInventory + "\n" + "Rocketship";
    playerHasRocketship = false;
  } else {
    notake();
  }
  break;
  default:
    updateDisplay("There is nothing to take");
  break;
  }
}


function init() {
  test();
  updateDisplay(Locale0);
}

function displayInventory() {
  if (inventoryNumber == 0) {
    updateDisplay("There are no items in your inventory.");
  } else {
    updateDisplay("Inventory:" + " " + totalInventory);
  }
}


function help() {
  var msg= "Need some help? Here's the deal: You can go North, South, East, or West, depending on your current location. In order to win and make the Great Escape, you will need to get both items into your inventory when you reach the final destination. Good Luck!";
  updateDisplay(msg);
}