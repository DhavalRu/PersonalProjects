$(document).ready(function(){
  $("#searchbox").keyup(function(e) {
    if (e.keyCode == 13) {
      $("#submitbutton").click();
    }
  });
  $("#submitbutton").on("click", function(){
      var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +$('#searchbox').val()+ "&callback=?";
    $.getJSON(api).done(function(json) {
      $('#results').html('');
      for (var i = 0; i < json[1].length; i++) {
        $("#results").append("<li class='btn-default btn-lg'><a href="+json[3][i]+" target='_blank'><h2>"+json[1][i]+"</h2><p>"+json[2][i]+"</p></a></li>");
      }
    })
    .fail(function() {
      $('#results').append('<li>Sorry, we cannot load Wiki list.</li>');
    });
  });
});