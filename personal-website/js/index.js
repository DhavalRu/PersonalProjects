/*Change active class on navbar
$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
}); */

/* Copyright year */
var today = new Date();
var year = today.getFullYear();
var copyright = document.getElementById("copyyear");
copyright.innerHTML = year;