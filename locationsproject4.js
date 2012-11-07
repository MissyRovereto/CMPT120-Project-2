//locationsproject4.js
 
function location0(){
  if ((playerHasCape) && (playerHasMask)) {
      updateDisplay("You have both items in your inventory! No one will recognize you now!");
   } else if ((playerHasCape) || (playerHasMask)) {
      updateDisplay("You are so close to winning I can smell it!");
   } else {
      updateDisplay("You are at the bus stop.");
   }
}
 
function location1() {
   updateDisplay("You are at the oak tree.");
   updateDisplay("You look up and see a squirrel staring back at you.");
   updateDisplay("He looks angry so you stop staring.");
}
 
function location2() {
   updateDisplay("You have found the cape on the ground.");
   if (!playerHasCape) {
      updateDisplay("You take the cape.")
      playerHasCape=true;
   } else {
      updateDisplay("It's a Batman cape and you don't like Batman.")
   }
}
 
function location3() {
    updateDisplay("You are near the sidewalk.");
    updateDisplay("You feel your heart beating in your ears from the rush of running away.");
}
 
function location4() {
    updateDisplay("You are hiding behind a dumpster.");
    updateDisplay("You are beginning to smell a little funky.");
}

function location5() {
    updateDisplay("You are near a burning bush.");
    updateDisplay("Is this a sign from above?");
}
   
function location6() {
   updateDisplay("You have found a mask.");
   if (!playerHasMask) {
      updateDisplay("You take the mask.")
      playerHasMask=true;
   } else {
      updateDisplay("It's a mask but what the heck would anyone do with that?")
   }
}
 
function location7() {
   updateDisplay("You are in the neighbor's yard playing with their dog Penny.");
}
 
function location8() {
   updateDisplay("You are crossing the street.");
   updateDisplay("You look both ways before crossing, just like you were always told.");
   updateDisplay("Safety first, children.");
}
 
function location9() {
    updateDisplay("You crossed the street at the corner."); 
    updateDisplay("You look around to see that no one is following you.");
    updateDisplay("I guess you just aren't loved.");
}