$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
  if($(this).scrollTop() > 150){
    $('nav').addClass("sticky");
  } else {
    $('nav').removeClass("sticky");
  }
});

var roster;

var raiders = [];
var trials = [];
$.getJSON('https://eu.api.battle.net/wow/guild/Auchindoun/Memento?fields=members&locale=en_GB&apikey=uq4auwygdasmyzrugxard2gvejc4xywq', function(data) {
  var j = 0;
  var g = 0;
  roster = data;
  for(var i = 0; i < roster.members.length; ++i) {
    if(roster.members[i].rank < 4) {
      raiders[j] = roster.members[i].character.name;
      ++j;
    } else if(roster.members[i].rank == 4) {
      trials[g] = roster.members[i].character.name;
      ++g;
    }
  }
  $.each(
    raiders,
    function(i,v) {
      $(".core_raiders").append("<li>" + v + "</li>");
    }
  );
  $.each(
    raiders,
    function(i,v) {
      $(".trial_raiders").append("<li>" + v + "</li>");
    }
  );
});
