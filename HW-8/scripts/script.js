

var shapeArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function initializeArray() {
    var image1 = new Images("#shape", "images/arrow.png");
    var image2 = new Images("#shape", "images/cat.jpg");
    var image3 = new Images("#shape", "images/figureeight.png");
    var image4 = new Images("#shape", "images/house.jpg");
    var image5 = new Images("#shape", "images/mountains.jpg");
    shapeArray.push(image1);
    shapeArray.push(image2);
    shapeArray.push(image3);
    shapeArray.push(image4);
}

function getRandomIndex(){
    return Math.floor(Math.random() * 4);
}



// Jquery
$(document).ready(function() {

    $("button").click(function(){
        $(shapeArray[getRandomIndex()].theImageSelector).attr("src", shapeArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut("slow");
        $("#p3").toggle();
    });

});

function moveText() {
    for (var i = 0; i < 20; i++){
    $("#p1").fadeOut("slow").animate({left:1200}).animate({top:10}).fadeIn("slow").animate({left:1200}).animate({top:700}).fadeOut("slow").animate({left:10}).animate({top:700}).fadeIn("slow").animate({left:10}).animate({top:10});
  }
   for (var j = 1; j < 20; j ++){
    $("#p2").animate({left:1200}).animate({top:10}).fadeOut("slow").animate({left:1200}).animate({top:700}).fadeIn("slow").animate({left:10}).animate({top:700}).fadeOut("slow").animate({left:10}).animate({top:10}).fadeIn("slow");
  //  $("#p2").animate({left:10}).animate({top:25}).animate({left:1200}).animate({top:25}).animate({left:1200}).animate({top:700}).animate({left:10}).animate({top:700}).animate({left:10}).animate({top:25});
   }



}

class Squares {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function moveSquare(){

    for (var h = 0; h < 20; h++) {
    $("#square4").animate({left:400}).animate({top:300}).fadeOut().animate({left:400}).animate({top:300}).animate({left:400}).animate({top:300}).fadeIn();
    $("#square5").fadeOut().animate({left:400}).animate({top:300}).animate({left:400}).animate({top:300}).fadeIn().animate({left:400}).animate({top:300}).fadeOut();
    $("#square6").animate({left:400}).animate({top:300}).fadeIn().animate({left:400}).animate({top:300}).fadeOut().animate({left:400}).animate({top:300});

    $("#square7").animate({left:1000}).animate({top:300}).fadeOut().animate({left:1000}).animate({top:300}).animate({left:1000}).animate({top:300}).fadeIn();
    $("#square8").fadeOut().animate({left:1000}).animate({top:300}).animate({left:1000}).animate({top:300}).fadeIn().animate({left:1000}).animate({top:300}).fadeOut();
    $("#square9").animate({left:1000}).animate({top:300}).fadeIn().animate({left:1000}).animate({top:300}).fadeOut().animate({left:1000}).animate({top:300});

    }

    for (var i = 0; i < 20; i ++) {
        $("#square1").animate({left:10}).animate({top:400}).animate({left:1000}).animate({top:200});
    }


    for (var j = 0; j < 20; j ++) {
        $("#square2").animate({left:800}).fadeOut().fadeIn().animate({top:400}).animate({left:1300}).animate({top:600});
    }


    for (var k = 0; k < 20; k ++) {
    $("#square3").animate({left:250}).fadeOut().animate({top:500}).animate({left:50}).fadeIn().animate({top:150});
    }
}

function text() {

}
