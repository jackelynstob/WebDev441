

        $(document).ready(function () {
      //begin code found at http://responsiveslides.com (RS)
          $(".rslides").responsiveSlides({
            pause: true,
            speed: 600
          });
      //end RS

      //begin code influenced by Michael Cassens (MC)
                   $("button").click(function () {
                       $(".bikeInformation").load("data/bike.json", function(responseText){
                           var blackMirror = JSON.parse(responseText);
                           var theFinalStuff = "";
                           for (i = 0; i < blackMirror.show.length; i ++) {
                            theFinalStuff = theFinalStuff + ("Black Mirror: " + blackMirror.show[i].name
                         + "<br>Show: " + blackMirror.show[i].season + "<br>Episode Number: " + blackMirror.show[i].number + "<br>Summary: "
                         + blackMirror.show[i].summary) + "<br /><br/>";
                           }
                           $(".bikeInformation").html(theFinalStuff);
                       });
                   });
               });
      //end MC
