 $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/bike.json", function(responseText){
                    var show = JSON.parse(responseText);
                    $("#bikeInformation").html("Show: " + show.show
                + "<br>Name: " + show.name + "<br>Season: " + show.season + "<br>Number: " + show.details.number + "<br>Summary: "
                + show.details.summary);
                });
            });
        });

       /* function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }
        */
