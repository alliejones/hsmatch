$(document).ready(function() {
    var url =  "https://stark-beach-5190.herokuapp.com/";
    $.getJSON(url + "?callback=?", null, function(tweets) {
        console.log(tweets);
    });
});