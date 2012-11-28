//navigation.js

var score=0;
var currentLocation=0;

visitedNorth= false;
visitedSouth= false;
visitedEast= false;
visitedWest= false;

function btn_North_click() {
if (!visitedNorth) {
score=score+5;
}
visitedNorth=true;

switch(currentLocation)
{
case 6:
location5();
currentLocation = 5;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnWest").disabled = true;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnNorth").disabled = false;
break;
case 5:
location3();
currentLocation = 3;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnWest").disabled = true;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnNorth").disabled = false;
break;
case 3:
location0();
currentLocation = 0;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnWest").disabled = false;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnNorth").disabled = false;
break;
case 0:
location1();
currentLocation = 1
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnWest").disabled = true;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnSouth").disabled = false;
case 1:
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnWest").disabled = true;
document.getElementById("btnSouth").disabled = false;
break;
default:
msg="You cannot go that way."
updateText(msg);
break;
}
}

function btn_South_click() {
if (!visitedSouth) {
score=score+5;
}
visitedSouth=true;

switch(currentLocation)
{
case 1:
location0();
currentLocation = 0;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 0:
location3();
currentLocation = 3;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnWest").disabled = true;
break;
case 3:
location5();
currentLocation = 5;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnWest").disabled = true;
break;
case 5:
location6();
currentLocation = 6;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnWest").disabled = true;
break;
default:
msg="You cannot go that way."
updateText(msg);
break;
}
}

function btn_West_click() {
if (!visitedWest) {
score=score+5;
}
visitedWest=true;

switch(currentLocation)
{
case 8:
location7();
currentLocation = 7;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 7:
location2();
currentLocation = 2;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 2:
location0();
currentLocation = 0;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 0:
location4();
currentLocation = 4;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 4:
location9();
currentLocation = 9;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = true;
break;
default:
msg="You cannot go that way."
updateText(msg);
break;
}
}

function btn_East_click() {
if (!visitedEast) {
score=score+5;
}
visitedEast=true;

switch(currentLocation)
{
case 9:
location4();
currentLocation = 4;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 4:
location0();
currentLocation = 0;
document.getElementById("btnSouth").disabled = false;
document.getElementById("btnNorth").disabled = false;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 0:
location2();
currentLocation = 2;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 2:
location7();
currentLocation = 7;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = false;
document.getElementById("btnWest").disabled = false;
break;
case 7:
location8();
currentLocation = 8;
document.getElementById("btnSouth").disabled = true;
document.getElementById("btnNorth").disabled = true;
document.getElementById("btnEast").disabled = true;
document.getElementById("btnWest").disabled = false;
break;
default:
msg="You cannot go that way."
updateText(msg);
break;
}
}

function btn_go_click() {
var ta = document.getElementById("txtCommand");
var command = ta.value.toUpperCase();
switch(command)
{
case 'N' :
btn_North_click();
break;
case 'S' :
btn_South_click();
break;
case 'E' :
btn_East_click();
break;
case 'W' :
btn_West_click();
break;
case 'T':
take();
break;
default:
msg="Invalid command (Please enter the commands N, S, E, W, n, s, e, or, w to proceed)"
updateText(msg);
}
}

function btn_score_click() {
var msg = score + " points";
updateText(msg);
}