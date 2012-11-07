//navigationproject4.js
      
      var NORTH     = 1;
      var SOUTH     = 2;
      var EAST      = 3;
      var WEST      = 4;
      var currentLocation = 0;
      
      function showscore() {
        alert (score);
      }

      function move (direction) {
        if (direction===NORTH){
           if (currentLocation===9){
              currentLocation=5;
              updateDisplay ("You are near a burning bush.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===5){
              currentLocation=3;
              updateDisplay ("You are near the sidewalk.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===3){
              currentLocation=0;
              updateDisplay ("You are at the bus stop.");
              document.getElementById("btnNorth").disabled = false;
                  document.getElementById("btnSouth").disabled = false;
                  document.getElementById("btnEast").disabled = false;
                  document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===0){
              currentLocation=1;
              updateDisplay ("You are at the oak tree.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===1){
              currentLocation=7;
              updateDisplay ("You are in the neighbor's yard playing with their dog Penny.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           }
              updateDisplay("moving north");
              
        } else if (direction===SOUTH) {
           if (currentLocation===7){
              currentLocation=1;
              updateDisplay("You are at the oak tree.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===1){
              currentLocation=0;
              updateDisplay("You are at the bus stop.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===0){
              currentLocation=3;
              updateDisplay("You are near the sidewalk.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===3){
              currentLocation=5;
              updateDisplay("You are near a burning bush.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           } else if (currentLocation===5){
              currentLocation=9;
              updateDisplay("You crossed the street at the corner.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = true;
           }
              updateDisplay("moving south");
              
        } else if (direction===EAST){
           if (currentLocation===6){
              currentLocation=4;
              updateDisplay("You are now hiding behind a dumpster.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===4){
              currentLocation=0;
              updateDisplay("You are at the bus stop.");
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnSouth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===0){
              currentLocation=2;
              updateDisplay("You have found a cape on the ground.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===2){
              currentLocation=8;
              updateDisplay("You are crossing the street.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnWest").disabled = false;
           }
              updateDisplay("moving east");
              
         } else if (direction===WEST){
            if (currentLocation===8){
                currentLocation=2;
                updateDisplay("You have found a cape on the ground.");
                document.getElementById("btnNorth").disabled = true;
                document.getElementById("btnSouth").disabled = true;
                document.getElementById("btnEast").disabled = false;
                document.getElementById("btnWest").disabled = false;
            } else if (currentLocation===2){
                currentLocation=0;
                updateDisplay("You are at the bus stop.");
                document.getElementById("btnNorth").disabled = false;
                document.getElementById("btnSouth").disabled = false;
                document.getElementById("btnEast").disabled = false;
                document.getElementById("btnWest").disabled = false;               
           } else if (currentLocation===0){
              currentLocation=4;
              updateDisplay("You are now hiding behind a dumpster.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = false;
           } else if (currentLocation===4){
              currentLocation=6;
              updateDisplay("You have found a mask.");
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnSouth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnWest").disabled = true;
           }
              updateDisplay("moving west");
        } else {
            updateDisplay("Error. Unknown direction: " + direction);
        }
        displayNewLocation();
      }
   
      function displayNewLocation(){
        switch (currentLocation) {
          case 0: location0(); break;
          case 1: location1(); break;
          case 2: location2(); break;
          case 3: location3(); break;
          case 4: location4(); break;
          case 5: location5(); break;
          case 6: location6(); break;
          case 7: location7(); break;
          case 8: location8(); break;
          case 9: location9(); break;
          default: updateDisplay("Invalid currentLocation value:" + currentLocation + "This should never happen."); break;
         }
     }