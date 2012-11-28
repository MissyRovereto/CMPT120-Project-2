//navigationproject5.js
      
      var NORTH     = 0;
      var SOUTH     = 1;
      var EAST      = 2;
      var WEST      = 3;
      var currentLocale = 0;
      var allLocations= new Array();
      var allItems= new Array();
      
      var nav= [ [1,3,2,4], 
                 [7,0,-1,-1], 
                 [-1,-1,8,0], 
                 [0,5,-1,-1], 
                 [-1,-1,0,6], 
                 [3,9,-1,-1], 
                 [-1,-1,4,-1], 
                 [-1,1,-1,-1], 
                 [-1,-1,-1,2], 
                 [5,-1,-1,-1] ]
    
    function showscore() {
        alert (score);
    }  
    
    function displayArray(array2display) {
        for (var i=0; i, array2display.length; i++) {
          updateDisplay(i + ":" + array2display[i]);
        }
     }   
      
    function move(direction) {
      //updateDisplay(nav);
      moveCount= moveCount + 1;
      var newLocale = nav[currentLocale] [direction];
      if (newLocale !== -1) {
        currentLocale = newLocale;
        displayNewLocale();
      } else {
        updateDisplay("You cannot go that way.");
      }
    }
      
    function displayNewLocale(){
        updateDisplay(allLocations[currentLocale].description);
       /*
        switch (currentLocale) {
          case 0: updateDisplay(locale0); break;
          case 1: updateDisplay(locale1); break;
          case 2: updateDisplay(locale2); break;
          case 3: updateDisplay(locale3); break;
          case 4: updateDisplay(locale4); break;
          case 5: updateDisplay(locale5); break;
          case 6: updateDisplay(locale6); break;
          case 7: updateDisplay(locale7); break;
          case 8: updateDisplay(locale8); break;
          case 9: updateDisplay(locale9); break;
          default: updateDisplay("Invalid currentLocale value:" + currentLocale + "This should never happen."); break;
         }
      */
     }
    function displayNewItem(){
       updateDisplay(allItems[currentLocale].description);   
    } 