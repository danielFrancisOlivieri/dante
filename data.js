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


  var ref = database.ref('indexOfSins');

//recieving data back
  ref.on( 'value', gotData, errData );

function gotData(data) {


$(".gridly").empty();

  var brick;
   var brickPart1 = "<div class='brick large w3-card-4'>";
   var brickPart2 = "<div class='delete'></div></div>";


  console.log(data.val());
  var indexOfSins = data.val();
  var keys = Object.keys(indexOfSins);
  console.log(keys);

  for(var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var names = indexOfSins[k].name;
    var allSins = indexOfSins[k].sin;
    var sinArray = indexOfSins[k].checkBoxSins;
    var sins = "mediocracy";

    if ( sinArray != null )
    {
        sins = sinArray.toString();
        sins.replace(",", " ");
        console.log(sins);
    }


/*
if ( indexOfSins[k].checkBoxSins != null )
{

  for(var m = 0; m < indexOfSins[k].checkBoxSins.length; i++){
  console.log(indexOfSins[k].checkBoxSins[m]);
    sins = sins + " " + indexOfSins[k].checkBoxSins[m];

   }

}

*/


    var mortalSoul = indexOfSins[k].mortalSoul;

    //mortalSoul

  var random =  Math.floor((Math.random() * 5));

  console.log(random);

  switch(random) {
      case 0:
      var card = "<img src=\"img/avarice.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
      + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
          break;
      case 1:
      var card = "<img src=\"img/blasphemy.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
      + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
          break;
      case 2:
          var card = "<img src=\"img/avariciousAndProdigious.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
          + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
        break;


        case 3:
        var card = "<img src=\"img/corrupt.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
        + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
            break;

            case 4:
            var card = "<img src=\"img/penitent.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
            + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
                break;

      default:
      var card = "<img src=\"img/corrupt.jpg\" alt=\"Norway\" style=\"width:100%\"> <div class=\"w3-container w3-center\"> <br> <center> <p class=\"ourName\" >"
      + names  + "\n" + allSins + "\n" + sins + "\n" + mortalSoul + "</p> </center> </div>";
  }



brick = brickPart1 + card + brickPart2;



event.preventDefault();
event.stopPropagation();
$('.gridly').append(brick);
console.log(names, allSins);
console.log(sinArray);

  }

  return $('.gridly').gridly();

}

function errData(err) {
  console.log('Error!');
  console.log(err);
}


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

  var ref = database.ref('indexOfSins');



var data = {
  name: $("#name").val(),
  sin: sin,
  checkBoxSins: checkBoxSins,
  mortalSoul: $("#mortalSoul").val()
}

  console.log(data);

  ref.push(data);

// scroll down to the next anchor points

var element_to_scroll_to = document.getElementById('endWindow');

element_to_scroll_to.scrollIntoView();
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
