// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var choice = $("#choice").val();

  $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q= " + choice,
        method: "GET",
        success: function(response) {
            //$('body').append("<img src=" + response.sprites.front_default + ">");
            console.log(response);
        },
    });


});

