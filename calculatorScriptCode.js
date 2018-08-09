/**
Code written by: Odekunle Oluwatobiloba | teecode Creation | 08096733464
Project Title: Javascript Scientific Calculator
**/
//Declaring the global variables
var current = ''; // variable that will store the current values
var previous = "";  // variable that will store the previous values entered
var maxLength = 35;   // variable that will store the maximum length of the screen
var operation = "";  // variable that will store each operation performs on the calculator
var store; // variable that will store memory value
// Starting of Functions
//Calculator ON function
function ON_CALCULATOR(){
	var on = document.getElementsByTagName("button");
	for(var i = 0; i < on.length; i++){
		on[i].disabled = false;
	}
	document.getElementById('screen').value = "0";
	document.getElementById('degree').disabled = false; // to ON the degree radio button
	document.getElementById('radian').disabled = false; // To ON the radian radio button
	document.getElementById('Grads').disabled = false; // To ON the gradian radio button
}
//Calculator OFF function
function OFF_CALCULATOR(){
	current = "";
	document.getElementById('screen').value = current; // To clear the screen
	document.getElementById('screen').disabled = true; // To disbled the screen
	var off = document.getElementsByTagName("button");
	for(var i = 0; i < off.length; i++){
		if(i == 33){	
			continue;
		}
		else{
			off[i].disabled = true;
		}
	}
	document.getElementById('degree').disabled = true; // To disabled degree radio button  
	document.getElementById('radian').disabled = true; // To disabled radian radio button
	document.getElementById('Grads').disabled = true; // To disabled gradian radio button
}
//Numerical Digits function
function allDigits(number){
	if(current.length <= 35 && current.indexOf("0") != 0){
		current = current + number;
		document.getElementById('screen').value = current;
	}
	if(current.indexOf(".") != -1){
		current = current + number;
		document.getElementById('screen').value = current;
	}
}
// Dot(.) Function
function Dot(){
	var dot = ".";
	if(current.indexOf(".") == -1){
		current += dot;
		document.getElementById('screen').value = current;
	}
}
// Plus or Minus Function
function PlusMinus(){
	if(current.indexOf("-") == 0){
		current = current.substring(1);
		document.getElementById('screen').value = current;
	}
	else{
		current = "-" + current;
		document.getElementById('screen').value = current;
	}
}
// Clear All function
function allClear(){
	current = "";
	previous = "";
	operation = "";
	document.getElementById('screen').value = "0";
}
// Clear function
function Clear(){
	current = "";
	document.getElementById('screen').value = "0";
}
// Delete or Backspace function
function Delete(){
	current = document.getElementById('screen').value = current.slice(0, -1);
}
//Arithmetic Operation Function
//Addition operation function
function plus(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "add";
}
//Subtraction operation function
function minus(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "sub";
}
//Multiplication operation function 
function division(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "div";
}
//Division operation function
function multiplication(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "mult";
}
// Percentage function
function percentage(){
	current = eval(current) / 100;
	document.getElementById('screen').value = current;
}
// Inverse function
function inverse(){
	current = 1 / eval(current);
	document.getElementById('screen').value = current;
}
// Modulus function
function modulus(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "mod";
}
// X raised to power of Y function
function powerY(){
	operation = "poy";
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
}
// Equal to or Answer or Result Function
function result(){
	if(operation == "add"){
		current = eval(previous) + eval(current);
	}
	if(operation == "sub"){
		current = eval(previous) - eval(current);
	}
	if(operation == "div"){
		current = eval(previous) / eval(current);
	}
	if(operation == "mult"){
		current = eval(previous) * eval(current);
	}
	if(operation == "mod"){
		current = eval(previous) % eval(current);
	}
	if(operation == "poy"){
		current = Math.pow(eval(previous), eval(current));
	}
	if(operation == "exp"){
		current = eval(previous) * Math.pow(10, eval(current));
	}
	if(operation == "yrootx"){
		current = Math.pow(eval(previous), 1/eval(current));
	}
	document.getElementById('screen').value = current;
	previous = "";
	operation = "";
}
// X raised to power of 2 function
function power2(){
	current = Math.pow(eval(current), 2);
	document.getElementById('screen').value = current;
}
// X raised to power of 3 function
function power3(){
	current = Math.pow(eval(current), 3);
	document.getElementById('screen').value = current;
}
 // Square root function
 function squareRoot(){
	 current = Math.sqrt(eval(current));
	 document.getElementById('screen').value = current;
 }
 // Cuberoot function
 function cubeRoot(){
     current = Math.pow(eval(current), 1/3);
	 document.getElementById('screen').value = current;
 }
 // y root of x function
 function yRoot(){
	previous = current;
	current = "";
	document.getElementById('screen').value = " ";
	operation = "yrootx";
 }
 // 10 raised to the power of x function 
 function tenX(){
	current = Math.pow(10, eval(current));
	document.getElementById('screen').value = current;
 }
// To degree function 
function toDegree(angle){
	var degrees = 0.0174532925199433;
	return (angle * degrees);
}
// To Gradian function 
function toGradian(angle){
	var gradian = 0.015707963267949;
	return (angle * gradian);
}
 // Sine Function
function sine(){
	if(document.getElementById('degree').checked){
		current = Math.sin(toDegree(eval(current)));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.sin(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.sin(toGradian(eval(current)));
		document.getElementById('screen').value = current;
	}
}
// Cosine Function
function cosine(){
	if(document.getElementById('degree').checked){
		current = Math.cos(toDegree(eval(current)));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.cos(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.cos(toGradian(eval(current)));
		document.getElementById('screen').value = current;
	}
}
// Targent Function
function targent(){
	if(document.getElementById('degree').checked){
		current = Math.tan(toDegree(eval(current)));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.tan(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.tan(toGradian(eval(current)));
		document.getElementById('screen').value = current;
	}
}
// ASine Function
function Asine(){
	if(document.getElementById('degree').checked){
		current = Math.round(Math.asin(eval(current))/ 0.0174532925199433);
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.asin(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.round(Math.asin(eval(current))/ 0.015707963267949);
		document.getElementById('screen').value = current;
	}
}
// ACosine Function
function Acosine(){
	if(document.getElementById('degree').checked){
		current = Math.round(Math.acos(eval(current))/ 0.0174532925199433);
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.acos(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.round(Math.acos(eval(current))/ 0.015707963267949);
		document.getElementById('screen').value = current;
	}
}
// ATargent Function
function Atargent(){
	
	if(document.getElementById('degree').checked){
		current = Math.round(Math.atan(eval(current))/ 0.0174532925199433);
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('radian').checked){
		current = Math.atan(eval(current));
		document.getElementById('screen').value = current;
	}
	else if(document.getElementById('Grads').checked){
		current = Math.round(Math.atan(eval(current))/ 0.015707963267949);
		document.getElementById('screen').value = current;
	}
}
// SinH function
function sinH(){
	current = Math.sinh(eval(current));
	document.getElementById("screen").value = current;
}
//CosH function
function cosH(){
	current = Math.cosh(eval(current));
	document.getElementById("screen").value = current;
}
//TanH function
function tanH(){
	current = Math.tanh(eval(current));
	document.getElementById("screen").value = current;
}
// LOG Function
function log(){
	current = Math.log10(eval(current));
	document.getElementById('screen').value = current;
}
// PI function
function pi(){
	current = Math.PI;
	document.getElementById('screen').value = current;
}
//Integer function
function integer(){
	current = parseInt(eval(current));
	document.getElementById('screen').value = current;
}
//Factorial function
function factorialFunction(num){
	var fact = 1;
	for(var i = num; i > 1; i--){
		fact *= i;
	}
	return fact;
}
function factorial(){
	current = factorialFunction(eval(current));
	document.getElementById('screen').value = current;
}
// Exponential function
function exponential(){
	previous = current;
	var screen = current + ".e";
	current = "";
	document.getElementById('screen').value = screen;
	operation = "exp";
}
//ln function
function ln(){
	current = Math.log(eval(current));
	document.getElementById("screen").value = current;
}
// MS function
function MS(){
	store = current;
	document.getElementById('screen').value = "saved                                  					   "+store;
}
// MR function
function MR(){
	current = store;
	document.getElementById('screen').value = "Recalled											"+store;
}
// MC function
function MC(){
	store = "empty";
}
// M+ function
function Mplus(){
	store += store;
}
// M_ function
function Mminus(){
	store -= store;
}














