//itemproject5.js

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

  function test2() {
    Item1 = new Item( "mustache", "You take the mustache.");
    Item2 = new Item( "rocketship", "You take the rocketship.");
    Item3 = new Item( "cape", "You take the cape.");
    Item4 = new Item( "mask", "You take the mask.");
    
    allItems[1]= Item1;
    allItems[2]= Item2;
    allItems[3]= Item3;
    allItems[4]= Item4;
  }
