 validate_2();
var strErrorMsg;
function validate_2()
{
	strErrorMsg = "";
	
  notEmpty_2(document.getElementById('FName'), 'Enter your first name.' );
  isAlphabet_2(document.getElementById('LName'), 'Enter your last name.');
	isStrtNumValid( 'Enter a valid street number.');
	 isStrtNameValid( 'Enter a valid street name. ');
	 isAlphabet_City('Enter a valid city name.');
	 isStateSelected( 'Select a state.');
	isZipValid( 'Enter a valid zip.');
	isAreaCode( 'Enter a three digit area code.');
	isPhone2('Enter a 3-digit prefix.');
	isLastFour( 'Enter a four digit suffix phone number.');
	 isAlphabet_Suggestion( 'Enter a suggestion.');
  if(strErrorMsg==='')     {
    alert('Form is ready for submission.');
    return true;
    }
  alert('Errors encountered:\n'+strErrorMsg+"\n");
  return false;
}

function notEmpty_2(elem,helperMsg)
{
	"use strict";
  if(elem.value === ""){strErrorMsg=strErrorMsg+helperMsg+"\n";}
}

function isAlphabet_2(elem, helperMsg)
{
	"use strict";
   var alphaExp = /^[a-zA-Z]+$/;
  if(!(elem.value.match(alphaExp))){strErrorMsg=strErrorMsg+helperMsg+"\n";}
}
function isStrtNumValid(helperMsg){
	var elem =document.getElementById('StreetNo.');
     var numExp = /^[0-9]+$/;
    if(!(elem.value.match(numExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isStrtNameValid( helperMsg){
	var elem = document.getElementById('StreetName');
  var regExp =  /^[a-zA-Z0-9-,.\s]+$/;
    if(!(elem.value.match(regExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isAlphabet_City( helperMsg){ 
	var elem = document.getElementById('CityName');
	
    var alphaExp = /^[a-zA-Z]+$/;
    if(!(elem.value.match(alphaExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isStateSelected(helperMsg){
	var elem = document.getElementById('state');
    if(elem.value=="blank"){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isZipValid(helperMsg){
	var elem = document.getElementById('ZipCode');
    var regExp =  /^[0-9]{5}/;
    if(!(elem.value.match(regExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isAreaCode( helperMsg){
	var elem =document.getElementById('Phone#1');
    var regExp =  /^[0-9]{3}/;
    if(!(elem.value.match(regExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isPhone2(helperMsg){
	var elem =document.getElementById('Phone#2');
    var regExp =  /^[0-9]{3}/;
    if(!(elem.value.match(regExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isLastFour(helperMsg){
	var elem = document.getElementById('Phone#3');
    var regExp =  /^[0-9]{4}/;
    if(!(elem.value.match(regExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
function isAlphabet_Suggestion(helperMsg){ 
	var elem = document.getElementById('Suggest');
    var alphaExp = /^[a-zA-Z]+$/;
    if(!(elem.value.match(alphaExp))){
        strErrorMsg=strErrorMsg+helperMsg+"\n";
    }
}
