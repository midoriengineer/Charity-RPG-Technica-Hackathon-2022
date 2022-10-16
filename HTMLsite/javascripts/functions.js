var points = 0;
var percentageDonated= 0;
document.getElementById("buttonB").addEventListener("click", checkMilestone);

function checkMilestone() {
    div1 = document.getElementById("milestone1")
    div2 = document.getElementById("milestone2")
    div3 = document.getElementById("milestone3")
    achievedMilestone1(div1)
    achievedMilestone2(div2)
    achievedMilestone3(div3)
}

function increasePercentage() {
   //percentageDonated = percentage donated as seen in budget
}

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