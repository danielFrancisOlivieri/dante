// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/7lEU1UEw3YI

var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;
var chosenSin = "envy";

function setup() {
  console.log("meep meep");
  canvas = createCanvas(100, 100);
  score = 0;
  createP('Click the button to get points.')
  button = createButton('click');
  button.mousePressed(increaseScore);
  initialInput = createInput('initials');
  submitButton = createButton('submitData');
  submitButton.mousePressed(submitData);

  // Initialize Firebase
 var config = {
   apiKey: "AIzaSyBjljTJdSqpxflWTxl7cFmksr-Qs9pnpNw",
   authDomain: "dante-f3b03.firebaseapp.com",
   databaseURL: "https://dante-f3b03.firebaseio.com",
   projectId: "dante-f3b03",
   storageBucket: "dante-f3b03.appspot.com",
   messagingSenderId: "378412015641"
 };

  firebase.initializeApp(config);
  console.log(firebase);
  database = firebase.database();
}

function test() {
console.log("test");
};

// for getting the value of the radio buttons
$(document).ready(function(){
$('input').on('ifToggled', function(event){
  console.log( $('#radioDiv input[name=radioButton]:checked', '#radioDiv').attr("sin"));
  console.log(event.type + ' callback');


  if ($(this).attr("sin") != null){
    // your code here.
    sin = $(this).attr("sin");
}


  console.log(sin);
});
});


function submitData() {
  console.log("spleep" + $("#name").val());

var ourName = $("#name").val(); // intializes ourName to the value they put for their name

console.log( $('input[name=iCheck]:checked').val());
var ourSin = "envy"; // initializes ourSin to envy
var checkBoxSins = [];
var i = 0;

// for sin checkboxes
console.log($('input[name="iCheck"]:checked').serialize());

$('input[name="iCheck"]:checked').each(function() {

   checkBoxSins[i] = this.value;
   i++; // increment to prepare for next sin
      console.log(checkBoxSins);
});

  var ref = database.ref('scores');

var data = {
  name: $("#name").val(),
  sin: sin,
  checkBoxSins: checkBoxSins,
  mortalSoul: $("#mortalSoul").val()
}

  console.log(data);

  ref.push(data);

  $('html, body').animate({
      scrollTop: $("#end").offset().top
  }, 2000);

/*
  $(document).on('click', 'a[href^="#end"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 5000);
});

*/
}

function increaseScore() {
  score++;
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
