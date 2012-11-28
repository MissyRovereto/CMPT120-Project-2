//localeproject5a.js
 
function locale(_id, _name, _description, _item) {
   this.id      = _id;
   this.name     = _name;
   this.description   = _description;
   this.item        = _item;      
   if (_item === undefined) {
      this.item = "You do not have any items.";   
   } else {
      this.item = _item;
   }
   
   this.toString = function() {
      var retVal = "";
      retVal = "name:" + this.name         + "\n" +
               "description:" + this.description      + "\n" +
               "item:" + this.item      + "\n"; 
      return retVal;
   }   
}
         
function test() {
  Locale0 = new locale(0, "bus stop", "You are at the bus stop", "none");
  Locale1 = new locale(1, "oak tree", "You look up and see a squirrel staring back at you. He looks angry so you stop staring.","mustache");
  Locale2 = new locale(2, "cape", "You have found the cape on the ground.", "cape");
  Locale3 = new locale(3, "sidewalk", "You are near the sidewalk. You feel your heart beating in your ears from the rush of running away.", "rocketship");
  Locale4 = new locale(4, "dumpster", "You are hiding behind a dumpster. You are beginning to smell a little funky.","none");
  Locale5 = new locale(5, "burning bush", "You are near a burning bush. Is this a sign from above?","none");
  Locale6 = new locale(6, "mask", "You have found a mask. You take the mask.","mask");
  Locale7 = new locale(7, "yard", "You are in the neighbor's yard playing with their dog Penny.", "none");
  Locale8 = new locale(8, "street", "You are crossing the street. You look both ways before crossing, just like you were always told. Safety first, children.","none");
  Locale9 = new locale(9, "crossed street", "You crossed the street at the corner. You look around to see that no one is following you. I guess you just aren't loved.","none");

  allLocations[0]= Locale0;
  allLocations[1]= Locale1;
  allLocations[2]= Locale2;
  allLocations[3]= Locale3;
  allLocations[4]= Locale4;
  allLocations[5]= Locale5;
  allLocations[6]= Locale6;
  allLocations[7]= Locale7;
  allLocations[8]= Locale8; 
  allLocations[9]= Locale9;
  
}
 