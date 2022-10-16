var points = 0;
var percentagedDonated= 0;

function increasePercentage() {
   // percentageDonated = percentage donated as seen in budget
}
function increasePoints() {
    points = percentageDonated*100;
}

function achievedMilestone1(){
    if(points >= 500){
        window.print("Completed!");
    } else {
        window.print("Incomplete.")
    }
}

function achievedMilestone2(){
    if(points >= 1000){
        window.print("Completed!");
    } else {
        window.print("Incomplete.");
    }
}

function achievedMilestone3(){
    if(points>=1500){
        window.print("Completed!");
    } else {
        window.print("Incomplete");
    }
}