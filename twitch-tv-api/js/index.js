$(document).ready(function(){
  var streamerList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var logo;
  for (var i = 0; i < streamerList.length; i++) {
    (function(i) {
      var api = 'https://api.twitch.tv/kraken/streams/'+streamerList[i]+'?callback=?';
    $.getJSON(api).done(function(data) {
      if (data.stream) {
        if (data.stream.channel.logo == null) {
          logo = 'http://fpoimg.com/300x250?text=No%20image';
        }
        else {
          logo = data.stream.channel.logo;
        }
        $(".streamers").append("<li class='row btn-success btn-lg nomargin'><a href="+data.stream.channel.url+" target='_blank'><div class='col-md-2 col-sm-2 col-xs-3'><img src="+logo+" alt='Logo'></div><div class='col-md-3 col-sm-3 col-xs-9'><p>"+data.stream.channel.display_name+"</p></div><div class='col-md-7 col-sm-7 col-xs-12'><p class='overflowp'>"+data.stream.game+": "+data.stream.channel.status+"</p></div></a></li>");
      }
      else if (data.stream === null) {
        $.getJSON(data._links.channel).done(function(json) {
          if (json.logo == null) {
            logo = 'http://fpoimg.com/300x250?text=No%20image';
          }
          else {
            logo = json.logo;
          }
          $(".streamers").append("<li class='row btn-default btn-lg nomargin'><a href="+json.url+" target='_blank'><div class='col-md-2 col-sm-2 col-xs-3'><img src="+logo+" alt='Logo'></div><div class='col-md-3 col-sm-3 col-xs-9'><p>"+streamerList[i]+"</p></div><div class='col-md-7 col-sm-7 col-xs-9'><p class='overflowp'>Offline</p></div></a></li>");
        })
        .fail(function() {
          $('.streamers').append('<li>Sorry, we cannot load streamer list.</li>');
        });       
      }
      else if (data.error) {
        logo = 'http://fpoimg.com/300x250?text=No%20image';
        $(".streamers").append("<li class='row btn-default btn-lg nomargin disabled' disabled='disabled'><div class='col-md-2 col-sm-2 col-xs-3'><img src="+logo+" alt='Logo'></div><div class='col-md-3 col-sm-3 col-xs-9'><p>"+streamerList[i]+"</p></div><div class='col-md-7 col-sm-7 col-xs-12'><p class=''>"+data.message+"</p></div></li>");
      }
  })
    .fail(function() {
          $('.streamers').append('<li>Sorry, we cannot load streamer list.</li>');
    });
    })(i);   
  }
  $(".all").on("click", function(){
    $(".btn-default, .btn-success,  .disabled").removeClass("displayNone");
  });
  $(".online").on("click", function(){
    $(".btn-default").addClass("displayNone");
    $(".btn-success").removeClass("displayNone");
  });
  $(".offline").on("click", function(){
    $(".btn-default").removeClass("displayNone");
    $(".btn-success, .disabled").addClass("displayNone");
  });
});