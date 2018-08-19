var wins = 0;

var losses = 0;

var counter = 0;

// set up random number to be shown at the beginning of the game between 19 - 120

// x = 19, y = 120
var randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

// show random number on screen

$("#random-number").text(randomNum);

console.log("Target Number: " + randomNum);

/******************************************************************/
 
var numberOptions = [];

for(j = 0; j < 4; j++) {

    randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    
    numberOptions.push(randomCrystalNum);
    
}

function reNum() {
    
    // x = 19, y = 120
    randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    // show random number on screen

    $("#random-number").text(randomNum);

    console.log("Target Number 2: " + randomNum);

    for (j = 0; j < 4; j++) {

        randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

        numberOptions.push(randomCrystalNum);

    }

} // end reNum

//console.log(numberOptions);

var imageOption1 = "assets/images/crystal_1.png";
var imageOption2 = "assets/images/crystal_2b.png";
var imageOption3 = "assets/images/crystal_3b.png";
var imageOption4 = "assets/images/crystal_4b.png";

var imageOptions = [imageOption1, imageOption2, imageOption3, imageOption4];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var crystalImg = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    crystalImg.addClass("crystal-image col-sm-3");

    // Each imageCrystal will be given a src link to the crystal image
    crystalImg.attr("src", imageOptions[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    crystalImg.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(crystalImg);
}

function reGen() {

    reNum();

    //console.log(numberOptions);

    for (var i = 0; i < numberOptions.length; i++) {

        var crystalImg = $("<img>");

        crystalImg.addClass("crystal-image");

        crystalImg.attr("src", imageOptions[i]);

        crystalImg.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(crystalImg);

    }

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

        $("#player-number").text(counter);

        if (counter === randomNum) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            counter = 0;
            $("#player-number").text("");
            numberOptions = [];
            $("#crystals").empty();
            //$("#crystals").children("img").remove();
            reGen();
        }

        else if (counter >= randomNum) {
            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            counter = 0;
            $("#player-number").text("");
            numberOptions = [];
            $("#crystals").empty();
            //$("#crystals").children("img").remove();
            reGen();
        }

    });

} // end reGen

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
        counter = 0;
        $("#player-number").text("");
        numberOptions = [];
        $("#crystals").empty();
        reGen();
    }

    else if (counter >= randomNum) {
        alert("You lose!!");
        losses++;
        $("#losses").text(losses);
        counter = 0;
        $("#player-number").text("");
        numberOptions = [];
        $("#crystals").empty();
        reGen();
    }

});

// toggle switch for instructions

$("#hider").click(function() {
    $("#hidden").toggle("slow");
})
$("#exit").click(function () {
    $("#hidden").toggle("slow");
})

// **** the following javascript is for the Matrix background and credit goes to a pen by Ebram Marzouk https://codepen.io/P3R0/pen/MwgoKv ****//

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);



