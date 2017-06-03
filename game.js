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
function initializeSecond() {
    document.getElementById('birinchi').innerHTML = "Player: " + name;
    document.getElementById('title').innerHTML = name + " in game!";
    numQuestion = 1;
    score = 0;
    questions();
}
function questions(){
  // initialize image box as empty
    var diving = document.getElementById("foo");
    diving.innerHTML = "";
    
    var countries = [
      "China", "Uzbekistan", "South Korea", "Uzbekistan", // 6 asia
      "Nepal", "Russian Federation",

      "Egypht", "Congo", "Algeria",
      "Cameroon", // 4 africa

      "Brazil", "Chili", "Argentina",//3 south america

      "USA", "Mexico", "Canada", // 3 north america

      "Bulgaria", "France", "Germany", "Italy", // 4 european countries
    ];
    var flags = [
      "Icons/china.png", "Icons/uzbekistan.ico", "Icons/southKorea.ico", "Icons/uzbekistan.ico",
      "Icons/nepal.jpg", "Icons/russia.ico",

       "Icons/egypt.ico", "Icons/congo.png", "Icons/algeria.ico", "Icons/cameroon.ico",

       "Icons/brazil.ico", "Icons/chili.ico", "Icons/argentina.ico",

       "Icons/usa.ico", "Icons/mexico.jpg", "Icons/canada.png",

       "Icons/bulgaria.ico", "Icons/france.png", "Icons/germany.png", "Icons/italy.png"

      //here I need to add more flags
    ];

    var i;
    for(i=1; i<countries.length; i++){

      document.getElementById("country").innerHTML = i + " " + countries[i];
    }
    var rand = Random();

    document.getElementById('question').innerHTML = "Question N:" + numQuestion
    + " In which continent is " + countries[rand] + " located?";
    if (rand < 6) {
      choice = 1;
    } else if (rand > 5 && rand < 10) {
      choice = 2;
    } else if (rand > 9 && rand < 13) {
      choice = 3;
    } else if (rand > 12 && rand < 16) {
      choice = 4;
    } else {
      choice = 5;
    }

    // Image
    var img = new Image();
    // var diving = document.getElementById("foo");
    img.onload = function(){
      diving.appendChild(img);
    }
    img.src = flags[rand];
}
function Random(){
  return Math.floor(Math.random()*19);
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
// Moving to Details page
function moveDetails() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("detail").value;

    try{
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not number";
        if (x == 25091995) {
            window.location = "Details.html";
        }
    } catch(err) {
        message.innerHTML = "Input is " + err;
    }

}

function mDown(obj){
  obj.style.backgroundColor = "blue";
  obj.innerHTML = "Release me";
}
function mUp(obj){
  obj.style.backgroundColor = "yellow";
  obj.innerHTML = "Thank you! up up up!";
}

function initializeDetails(){
  document.getElementById('birinchi').innerHTML = "Player: " + name;
  document.getElementById('title').innerHTML = name + " in game!";
}

// for validation
// try {
//     if(x == "")  throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5)    throw "too low";
//     if(x > 10)   throw "too high";
//     if(x>4 && x<11)
//         document.getElementById("message").innerHTML = "Finally your input is valid";
// }
// catch(err) {
//     message.innerHTML = "Input is " + err;
// }
