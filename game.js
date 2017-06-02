var name;
var choice;
var numQuestion;
var score;
function validate() {
    var nameP = document.getElementById('namePlayer');

    if (nameP.value == "") {
        alert("The name of player is null");
    } else {
      name = nameP.value;
        Redirect();
    }
}
function Redirect() {
    window.location = "second.html";
}
function assignValue() {
    document.getElementById('birinchi').innerHTML = "Player: " + name;
    numQuestion = 1;
    score = 0;
    questions();
}
function questions(){
    var countries = [
      "Uzbekistan", "Chine", "Nepal",
      "Egypt", "Congo", "Algeria",
      "Brazil", "Chili", "Urugvay",
      "USA", "Canada", "Mexico",
      "Germany", "Italy", "UK"];
    var rand = Random();

    document.getElementById('question').innerHTML = "Question N:" + numQuestion
    + " In which continent is " + countries[rand] + " located?"
    if (rand < 3) {
      choice = 1;
    } else if (rand > 2 && rand < 6) {
      choice = 2;
    } else if (rand > 5 && rand < 9) {
      choice = 3;
    } else if (rand > 9 && rand < 12) {
      choice = 4;
    } else {
      choice = 5;
    }
}
function Random(){
  return Math.floor(Math.random()*15);
}
function check(selected){

  if(selected == choice) {
    document.getElementById("output").innerHTML = "Correct!";
    score +=1;
  } else {
    document.getElementById("output").innerHTML = "Incorrect!";
  }
  numQuestion++;
  document.getElementById("score").innerHTML = "Your score is " + score;
  questions();
}

function mDown(obj){
  obj.style.backgroundColor = "blue";
  obj.innerHTML = "Release me";
}
function mUp(obj){
  obj.style.backgroundColor = "yellow";
  obj.innerHTML = "Thank you! up up up!";
}
