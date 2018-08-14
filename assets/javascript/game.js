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

        //var num1 = randomCrystalNum1 += randomCrystalNum1;

        //playerNumberBox.textContent = num1;

        
        // let x = randomCrystalNum1;
        // let originalX = x;
        //console.log(x += originalX); // 20
        // console.log(x += originalX);
        //   console.log(x += originalX);
        

        //playerNumberBox.textContent = num1;
        
        
        // var num1 = $("#btn1").data("value", randomCrystalNum);

        // playerNumberArray.push(randomCrystalNum);

        // console.log(playerNumberArray);

        // console.log($("#btn1").data("value"));
    
    })
    
    $("#btn2").click(function () {
        alert(randomCrystalNum2);
        counter += 1;
        playerNumberBox.textContent = randomCrystalNum2 * counter;
    })

    // function button2() {
        
        
           // x = 1, y = 12
    //     var randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    //     var num2 = $("#btn2").data("value", randomCrystalNum);

    //     playerNumberArray.push(randomCrystalNum);

    //     console.log(playerNumberArray);

    //     console.log($("#btn2").data("value"));
    // }

    //button2();

    // function button3() {
        
           // x = 1, y = 12
    //     var randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    //     var num3 = $("#btn3").data("value", randomCrystalNum);
        
    //     playerNumberArray.push(randomCrystalNum);

    //     console.log(playerNumberArray);

    //     console.log($("#btn3").data("value"));
    // }

    // button3();

    $("#btn3").click(function () {
        alert(randomCrystalNum3);
        counter += 1;
        playerNumberBox.textContent = randomCrystalNum3 * counter;
    })

    // function button4() {
        
           // x = 1, y = 12
    //     var randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    //     var num4 = $("#btn4").data("value", randomCrystalNum);

    //     playerNumberArray.push(randomCrystalNum);

    //     console.log(playerNumberArray);

    //     console.log($("#btn4").data("value"));
    // }

    // button4();

    $("#btn4").click(function () {
        alert(randomCrystalNum4);
        counter += 1;
        playerNumberBox.textContent = randomCrystalNum4 * counter;
    })

    
    // ****************

    // $("#btn1").click(function(){
    //     console.log(playerNumberArray.indexOf[0];
    //     $(playerNumberBox).textContent = playerNumberArray.indexOf([0]);
    // })
   
    
    
    
       // ****************

    // empty crystal array to hold the 4 random numbers

    // var crystalArray = [];

    // for(i = 0; i < 4; i++) {

        // set up random numbers for crystalArray
        // x = 1, y = 12
    //     var randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    //     crystalArray.push(randomCrystalNum);
    // }
    //console.log(crystalArray);
    //console.log(crystalArray.indexOf(0));




}) // end jquery