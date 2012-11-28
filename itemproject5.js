//itemproject5.js

var cape = new Item(0, "cape", "You found the cape.");
var mask = new Item(1, "mask", "You found the mask.");
var mustache = new Item(2, "mustache", "You found a mustache.");
var rocketship = new Item(3, "rocketship", "You found a rocketship.");

var arrayItem = new Array();
arrayItem[0] = cape;
arrayItem[1] = mask;
arrayItem[2] = mustache;
arrayItem[3] = rocketship;

var Inventory = " ";
var inventoryNumber = 0;


function take() {
  switch(currentLocale) {
  case 1:
  if (playerHasCape) {
    updateDisplay("You took the cape");
    inventoryNumber = inventoryNumber + 1;
    Inventory = Inventory + "Cape";
    playerHasCape = false;
  } else {
    notake();
  }
  break;
  case 2:
  if (playerHasMask) {
    updateDisplay("You took the mask");
    inventoryNumber = inventoryNumber + 1;
    Inventory = Inventory + "\n" + "Mask";
    playerHasMask = false;
  } else {
    notake();
  }
  break;
  case 3:
  if (playerHasMustache) {
    updateDisplay("You took the mustache");
    inventoryNumber = inventoryNumber + 1;
    Inventory = Inventory + "\n" + "Mustache";
    playerHasMustache = false;
  } else {
    notake();
  }
  break;
  case 6:
  if (playerHasRocketship) {
    updateDisplay("You took the rocketship");
    inventoryNumber = inventoryNumber + 1;
    Inventory = Inventory + "\n" + "Rocketship";
    playerHasRocketship = false;
  } else {
    notake();
  }
  break;
  default:
    updateText("There is nothing to take");
  break;
  }
}


function Item(_name, _description) {
   this.name     = _name;
   this.description   = _description;
}

this.toString = function() {
      var retVal = "";
      retVal = "name:" + this.name         + "\n" +
               "description:" + this.description      + "\n";
      return retVal;
   }   
}

function test2() {
  Item1 = new Item( "cape", "You found the cape.");
  Item2 = new Item( "mask", "You found the mask.");
  Item3 = new Item( "mustache", "You have found the mustache.");
  Item4 = new Item( "rocketship", "You found a rocketship.");
  
  allItems[1]= Item1;
  allItems[2]= Item2;
  allItems[3]= Item3;
  allItems[4]= Item4;
}
