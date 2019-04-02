var showArray = new Array();
var i = 0;
var x = 1;

class show {
  constructor(name, season, number, summary){
    this.name = name;
    this.season = season;
    this.number = number;
    this.summary = summary;
  }
  toStringName() {
    return this.name;
  }
  toStringSeason() {
    return this.season;
  }
  toStringNumber() {
    return this.number;
  }
  toStringSummary() {
    return this.summary;
  }
}

$(function() {
  $.getJSON("data/show.json", function(blackMirror){
    $.each(blackMirror.show, function(x, item){
      showArray.push(item);
    });
    showShow();
  });
});

function showShow(){
  for (i = 0; i < showArray.length; i++) {
    $("#name" + [i]).append(showArray[i].name);
    $("#season" + [i]).append("Season " + showArray[i].season);
    $("#number" + [i]).append("Number " + showArray[i].number);
    $("#summary" + [i]).append("Summary " + showArray[i].summary);
  }
}


function battleMode() {
	$(".col-lg-2").battleMode();
};




//Plugin

$.fn.battleMode = function(){

$(this).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  });

};
