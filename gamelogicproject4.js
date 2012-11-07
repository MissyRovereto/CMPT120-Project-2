// gamelogicproject4.js

var playerHasCape= false;
var playerHasMask= false;

function init() {
  location0();
}

function displayInventory() {
  var msg= "Inventory: ";
  if (playerHasCape) {
    msg= msg+ "cape ";
  }
  if (playerHasMask) {
    msg= msg+ "mask ";
  }
  updateDisplay(msg);
}

function help() {
  var msg= "Need some help? Here's the deal: You can go North, South, East, or West, depending on your current location. In order to win and make the Great Escape, you will need to get both items into your inventory when you reach the final destination. Good Luck!";
  updateDisplay(msg);
}