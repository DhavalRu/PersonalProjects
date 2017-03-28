$(document).ready(function() {
  //https://openweathermap.org/current#geo
  var lat;
  var long;
  var celsius;
  var fahrenheit;
  var tempType = "Celsius";
  var description;
  $.getJSON("http://ip-api.com/json").done(function(json2) {
    lat = json2.lat;
    long = json2.lon;
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=3b40ac35925eb611354cfd862f87e640";
    $("#city").html(json2.city + ", " + json2.country);
  $.getJSON(api, function(json) {
    celsius = (json.main.temp-273.15).toFixed(1);
    fahrenheit = (celsius* 9 / 5 + 32).toFixed(1);
    description = json.weather[0].description;
    $(".temperature").html(celsius + " &#8451;");
    $("#icon").attr("src", "http://openweathermap.org/img/w/"+json.weather[0].icon+".png");
    $("#description").html(description[0].toUpperCase()+description.slice(1)); 
    $("#wind").html((json.wind.speed*18/5).toFixed(1) + " km/hr");

    changeBackground();
  })
  .fail(function() {
      $('#city').append('<li>Sorry, we cannot load Weather.</li>');
    });
  
  $(".temperature").on("click", function(){
    if (tempType == 'Celsius') {
      tempType = 'Fahrenheit';
      $(".temperature").html(fahrenheit + " &#8457;");
    }
    else if (tempType == 'Fahrenheit') {
      tempType = 'Celsius';
      $(".temperature").html(celsius + " &#8451;");
    }
  });
  })
  .fail(function() {
      $('#city').append('<li>Sorry, we cannot load Weather.</li>');
    });

  function changeBackground() {
    if (description == "clear sky") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/29222/pexels-photo-29222.jpg)");
    }
    else if (description == "few clouds" || description == "scattered clouds" || description == "broken clouds") {
      $("body").css("background", "url(https://static.pexels.com/photos/93684/pexels-photo-93684.jpeg) no-repeat");
    }
    else if (description == "shower rain" || description == "rain" || description == "light rain") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/38012/pexels-photo-38012.jpeg)");
    }
    else if (description == "thunderstorm") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/56614/lightning-storm-night-firebird-56614.jpeg)");
    }
    else if (description == "snow") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/30276/pexels-photo.jpg)");
    }
    else if (description == "mist") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/7919/pexels-photo.jpg)");
    }
  }
});