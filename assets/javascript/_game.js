$(document).ready(function(){


    // set up random number to be shown at the beginning of the game between 19 - 120

    // x = 19, y = 120
    var randomNum = Math.floor(Math.random() * ((120-19)+1) + 19);

    // show random number on screen

    var randomNumBox = document.getElementById("random-number");

    // display the random number to play against
    randomNumBox.textContent = randomNum;


    // ****************

    var playerNumberBox = document.getElementById("player-number");
   

    var playerNumberArray = [];
    var index = playerNumberArray.indexOf();


    // x = 1, y = 12
    var randomCrystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    // x = 1, y = 12
    var randomCrystalNum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    // x = 1, y = 12
    var randomCrystalNum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    // x = 1, y = 12
    var randomCrystalNum4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

    var counter = 0;

    $("#btn1").click(function(){

        alert(randomCrystalNum1);
        
        counter += 1;
        
        playerNumberBox.textContent = randomCrystalNum1 * counter;

    })
    
    $("#btn2").click(function () {
        
        alert(randomCrystalNum2);
        
        counter += 1;
        
        playerNumberBox.textContent = randomCrystalNum2 * counter;

    })

    $("#btn3").click(function () {

        alert(randomCrystalNum3);

        counter += 1;

        playerNumberBox.textContent = randomCrystalNum3 * counter;

    })

    $("#btn4").click(function () {

        alert(randomCrystalNum4);

        counter += 1;

        playerNumberBox.textContent = randomCrystalNum4 * counter;
 
    })




}) // end jquery