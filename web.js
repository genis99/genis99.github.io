function nav_function(id) {
	document.querySelectorAll("li > div").setAttributeNode("id", " ");
	id.id = "active";
}

var rvisible = true;
var bvisible = false;
var gvisible = false;
var myVar = setInterval(myTimer, 2000);
function myTimer() {
    if (rvisible) {
        document.getElementById("red").style.opacity = '0';
        document.getElementById("blue").style.opacity = '1';
        bvisible = true;
        rvisible = false;
    }
    else if (bvisible) {
        document.getElementById("blue").style.opacity = '0';
        document.getElementById("green").style.opacity = '1';
        gvisible = true;
        bvisible = false;
    }
    else if (gvisible) {
        document.getElementById("green").style.opacity = '0';
        document.getElementById("red").style.opacity = '1';
        rvisible = true;
        gvisible = false;
    }
}
function myfunction1() {
    document.getElementById("red").style.opacity = '1';
    document.getElementById("blue").style.opacity = '0';
    document.getElementById("green").style.opacity = '0';
    rvisible = true;
    bvisible = false;
    visible = false;
}
function myfunction2() {
    document.getElementById("red").style.opacity = '0';
    document.getElementById("blue").style.opacity = '1';
    document.getElementById("green").style.opacity = '0';
    rvisible = false;
    bvisible = true;
    gvisible = false;        
}
function myfunction3() {
    document.getElementById("red").style.opacity = '0';
    document.getElementById("blue").style.opacity = '0';
    document.getElementById("green").style.opacity = '1';
    rvisible = false;
    bvisible = false;
    gvisible = true;
}
function myFunction1() {
    myfunction1(); clearTimeout(myVar); myVar = setInterval(myTimer, 4000);
}
function myFunction2() {
    myfunction2(); clearTimeout(myVar); myVar = setInterval(myTimer, 4000); 
}
function myFunction3() {
    myfunction3(); clearTimeout(myVar); myVar = setInterval(myTimer, 4000);
}