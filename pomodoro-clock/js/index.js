$(document).ready(function(){
  var breaklength = parseInt($("#breaklength").text());
  var sessionlength = parseInt($("#sessionlength").text());
  var clocktime = parseInt($("#clocktime").text());
  var seconds = 0;
  var minutes = clocktime;
  var countdown;
  var sim;
  var ctx = $("#canvas")[0].getContext('2d');
  var percent = 1;
  var start = 4.72; //straight up (3pi/2)
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;
  
  $("#breakminus").click(function() {
    if (breaklength > 1) {
      breaklength -= 1;
    }
    $("#breaklength").text(breaklength);
  });

  $("#breakplus").click(function() {
      breaklength += 1;
    $("#breaklength").text(breaklength);
  });
  
  $("#sessionminus").click(function() {
    if (sessionlength > 1) {
      sessionlength -= 1;
      clocktime -= 1;
    }
    minutes = clocktime;
    $("#sessionlength").text(sessionlength);
    $("#clocktime").text(clocktime+":00");
  });

  $("#sessionplus").click(function() {
    sessionlength += 1;
    clocktime += 1;
    minutes = clocktime;
    $("#sessionlength").text(sessionlength);
    $("#clocktime").text(clocktime+":00");
  });

  $("#sessionminus5").click(function() {
    if (sessionlength > 5) {
      sessionlength -= 5;
      clocktime -= 5;
    }
    else if (sessionlength > 0 && sessionlength <= 5) {
      sessionlength = 1;
      clocktime = 1;
    }
    minutes = clocktime;
    $("#sessionlength").text(sessionlength);
    $("#clocktime").text(clocktime+":00");
  });
  
  $("#sessionplus5").click(function() {
    sessionlength += 5;
    clocktime += 5;
    minutes = clocktime;
    $("#sessionlength").text(sessionlength);
    $("#clocktime").text(clocktime+":00");
  });
  
  $("#start").click(function() {
    $('.session button').prop('disabled', true);
    $('.break button').prop('disabled', true);
    $('#start').prop('disabled', true);
    countdown = setInterval(tick, 1000);
    sim = setInterval(progressSim, 1000*sessionlength);
  });
    
  function progressSim(){
    diff = ((percent / 60) * Math.PI*2);
    ctx.lineWidth = 298;
    if ($("#status").text() == "Session") {
      ctx.strokeStyle = "#5cb85c";
    }
    else if ($("#status").text() == "Break") {
      ctx.strokeStyle = "#d9534f";
    }
    ctx.beginPath();
    ctx.arc(150, 150, 150, start, diff+start, false);
    ctx.stroke();
    percent++;
  }
  
  function tick() {
    if (seconds == 0 && minutes == 0) {
      percent = 1;
      diff = 0;
      ctx.clearRect(0, 0, cw, ch);
      if ($("#status").text() == "Session") {
        $("#status").text("Break");
        minutes = breaklength;
        $("#clocktime").text(minutes+":0"+seconds);
        clearInterval(sim);
        sim = setInterval(progressSim, 1000*breaklength);
      }
      else if ($("#status").text() == "Break") {
        $("#status").text("Session");
        minutes = sessionlength;
       $("#clocktime").text(minutes+":0"+seconds);
        clearInterval(sim);
        sim = setInterval(progressSim, 1000*sessionlength);
      }
      $("#aud")[0].play();
    }
    else {
      if (seconds == 0) {
          seconds = 60;
          minutes -= 1;
      }
      seconds -= 1;
      if (seconds < 10) {
        $("#clocktime").text(minutes+":0"+seconds);
      }
      else {
        $("#clocktime").text(minutes+":"+seconds);
      }
    }
  }
  
  $("#pause").click(function() {
    clearInterval(countdown);
    clearInterval(sim);
    $('#start').prop('disabled', false);
  });
  
  $("#reset").click(function() {
    clearInterval(countdown);
    clearInterval(sim);
    clocktime = sessionlength;
    seconds = 0;
    minutes = clocktime;
    percent = 1;
    diff = 0;
    ctx.clearRect(0, 0, cw, ch);
    $('.session button').prop('disabled', false);
    $('.break button').prop('disabled', false);
    $('#start').prop('disabled', false);
    $("#clocktime").text(clocktime+":00");
    $("#status").text("Session");
  });

  /* Copyright year */
  var today = new Date();
  var year = today.getFullYear();
  var copyright = document.getElementById("copyyear");
  copyright.innerHTML = year;
});