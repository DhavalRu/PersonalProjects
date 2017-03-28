$(document).ready(function(){
  var maxCounter = 20;
  var strict = false;
  var generatedPattern = [];
  var userPattern = [];
  var randomize;
  var displayCounter;
  var soundpause;
  var counter = 0;
  var correctClick;
  function generateRandom() {
    randomize = Math.floor(Math.random() * 4);
    generatedPattern.push(randomize);
  }
  
  function soundplay() {
    if (generatedPattern[counter] === 0) {
      $("#aud_green")[0].play();
      $('#green').animate({opacity: 0.2}, 200).animate({opacity: 1}, 100);
    }
    else if (generatedPattern[counter] === 1) {
      $("#aud_red")[0].play();
      $('#red').animate({opacity: 0.2}, 200).animate({opacity: 1}, 100);
    }
    else if (generatedPattern[counter] === 2) {
      $("#aud_yellow")[0].play();
      $('#yellow').animate({opacity: 0.2}, 200).animate({opacity: 1}, 100);
    }
    else if (generatedPattern[counter] === 3){
      $("#aud_blue")[0].play();
      $('#blue').animate({opacity: 0.2}, 200).animate({opacity: 1}, 100);
    }
    counter++;
    if(counter === generatedPattern.length) {
      clearInterval(soundpause);
      $('.main-button').prop('disabled', false);
      counter = 0;
    }
  }
  
  $("#start").click(function() {
    $('#start').prop('disabled', true);
    $('#strict').prop('disabled', true);
    generateRandom();
    soundpause = setInterval(function() { soundplay(); }, 500);
    $("#counter").text("0"+generatedPattern.length);
  });
  $("#reset").click(function() {
    generatedPattern = [];
    userPattern = [];
    counter = 0;
    $('.main-button').prop('disabled', true);
    $('#start').prop('disabled', false);
    $('#strict').prop('disabled', false);
    $('#counter').text("00");
  });
  $("#strict").click(function() {
    if (strict) {
      strict = false;
      $("#strict").removeClass("strictmode");
    }
    else {
      strict = true;
      $("#strict").addClass("strictmode");
    }
  });
  $("#green").click(function() {
    userPattern.push(0);
    checkPatterns();
    if (correctClick) {
      $("#aud_green")[0].play();
      counter++;
      checkLengths();
      correctClick = false;
    }
  });
  $("#red").click(function() {
    userPattern.push(1);
    checkPatterns();
    if (correctClick) {
      $("#aud_red")[0].play();
      counter++;
      checkLengths();
      correctClick = false;
    }
  });
  $("#yellow").click(function() {
    userPattern.push(2);
    checkPatterns();
    if (correctClick) {
      $("#aud_yellow")[0].play();
      counter++;
      checkLengths();
      correctClick = false;
    }
  });
  $("#blue").click(function() {
    userPattern.push(3);
    checkPatterns();
    if (correctClick) {
      $("#aud_blue")[0].play();
      counter++;
      checkLengths();
      correctClick = false;
    }
  });
  function checkPatterns() {
    if (userPattern[counter] != generatedPattern[counter]) {
      $("#aud_wrong")[0].play();
      counter = 0;
      userPattern = [];
      correctClick = false;
      $('.main-button').prop('disabled', true);
      if (strict) {
        generatedPattern = [];
        generateRandom();
        $("#counter").text("01");
      }
      soundpause = setInterval(function() { soundplay(); }, 500);
    }
    else if (userPattern[counter] == generatedPattern[counter]) {
      correctClick = true;
    }
  }

  function checkLengths () {
    if (userPattern.length === generatedPattern.length) {
      $('.main-button').prop('disabled', true);
      counter = 0;
      userPattern = [];
      if (generatedPattern.length != maxCounter){
        generateRandom();
       if (generatedPattern.length < 10) {
         $("#counter").text("0"+generatedPattern.length);
       }
        else {
          $("#counter").text(generatedPattern.length);
        }
        soundpause = setInterval(function() { soundplay(); }, 500);
      }
      else {
        $("#counter").text("You Win!");
        generatedPattern = [];
        $('#start').prop('disabled', false);
        $('#strict').prop('disabled', false);
      }
    }
  }

  /* Copyright year */
  var today = new Date();
  var year = today.getFullYear();
  var copyright = document.getElementById("copyyear");
  copyright.innerHTML = year;
});