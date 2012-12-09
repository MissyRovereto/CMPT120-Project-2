//localeproject5a.js
 
function locale(_id, _name, _description, _item) {
   this.id      = _id;
   this.visited= false;
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
  locale0 = new locale(0, "bus stop", "You are at the bus stop", "none");
  locale1 = new locale(1, "oak tree", "You look up and see a squirrel staring back at you. He looks angry so you stop staring. He throws a mustache at you.","mustache");
  locale2 = new locale(2, "cape", "You have found the cape on the ground.", "cape");
  locale3 = new locale(3, "sidewalk", "You are near the sidewalk. You feel your heart beating in your ears from the rush of running away. But there is a rocketship.", "rocketship");
  locale4 = new locale(4, "dumpster", "You are hiding behind a dumpster. You are beginning to smell a little funky.","none");
  locale5 = new locale(5, "burning bush", "You are near a burning bush. Is this a sign from above?","none");
  locale6 = new locale(6, "mask", "You have found a mask.","mask");
  locale7 = new locale(7, "yard", "You are in the neighbor's yard playing with their dog Penny.", "none");
  locale8 = new locale(8, "street", "You are crossing the street. You look both ways before crossing, just like you were always told. Safety first, children.","none");
  locale9 = new locale(9, "crossed street", "You crossed the street at the corner. You look around to see that no one is following you. I guess you just aren't loved.","none");

  allLocales[0]= locale0;
  allLocales[1]= locale1;
  allLocales[2]= locale2;
  allLocales[3]= locale3;
  allLocales[4]= locale4;
  allLocales[5]= locale5;
  allLocales[6]= locale6;
  allLocales[7]= locale7;
  allLocales[8]= locale8; 
  allLocales[9]= locale9;
  
}
 