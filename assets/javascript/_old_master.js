

var wins = 0;

var losses = 0;




// set up random number to be shown at the beginning of the game between 19 - 120

// x = 19, y = 120
var randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

// show random number on screen

$("#random-number").text(randomNum);


/*********************************
 *********************************/


var counter = 0;
// x = 1, y = 12
var randomCrystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
// x = 1, y = 12
var randomCrystalNum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
// x = 1, y = 12
var randomCrystalNum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
// x = 1, y = 12
var randomCrystalNum4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

var numberOptions = [randomCrystalNum1, randomCrystalNum2, randomCrystalNum3, randomCrystalNum4];

var imageOption1 = "assets/images/crystal_1.png";
var imageOption2 = "assets/images/crystal_2.png";
var imageOption3 = "assets/images/crystal_3.png";
var imageOption4 = "assets/images/crystal_4.png";

var imageOptions = [imageOption1, imageOption2, imageOption3, imageOption4];

console.log(numberOptions);


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var crystalImg = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    crystalImg.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    crystalImg.attr("src", imageOptions[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    crystalImg.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(crystalImg);
}

/*********************************
 *********************************/

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);

    $("#player-number").text(counter);

    if (counter === randomNum) {
        alert("You win!");
        wins++;
        $("#wins").text(wins);

    }

    else if (counter >= randomNum) {
        alert("You lose!!");
        losses++;
        $("#losses").text(losses);

    }



});
