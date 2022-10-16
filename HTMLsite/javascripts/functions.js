var points = 0;
var percentageDonated= 0;
document.getElementById("buttonB").addEventListener("click", checkMilestone);

var groc = 0.0
var trans = 0.0
var shop = 0.0
var ent = 0.0
var monEarn = 0.0

function myfunc() {
    
	var money = document.getElementById("number").value;

    monEarn = parseFloat(document.getElementById("earnings").value) + parseFloat(monEarn)
    
}

function checkMilestone() {
    div1 = document.getElementById("milestone1")
    div2 = document.getElementById("milestone2")
    div3 = document.getElementById("milestone3")
    achievedMilestone1(div1)
    achievedMilestone2(div2)
    achievedMilestone3(div3)
}

function increasePercentage() {
    var discretionarySpending = shop+ent
    percentageDonated = discretionarySpending/monEarn

function increasePoints() {
    points = percentageDonated*100;
}

function achievedMilestone1(div){
    if(points >= 500){
        div.value="Complete!"
    } else {
        div.value="Incomplete."
    }
}

function achievedMilestone2(div){
    if(points >= 1000){
        div.value="Complete!"
    } else {
        div.value="Incomplete."
    }
}

function achievedMilestone3(div){
    if(points>=1500){
        div.value="Complete!"
    } else {
        div.value="Incomplete."
    }
}