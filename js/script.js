$(document).ready(function(){
    $('.hobbyList').bind("mouseover", function(){
        var color = $(this).css("background-color");

        $(this).css("background", "#380606");

        $(this).bind("mouseout", function(){
            $(this).css("background", color);
        }) 
    })
})