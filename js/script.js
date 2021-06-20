$(document).ready(function(){
    $('.hobbyList').bind("mouseover", function(){
        var color = $(this).css("background-color");

        $(this).css("background", "#d3d3d3");

        $(this).bind("mouseout", function(){
            $(this).css("background", color);
        }) 
    })
})