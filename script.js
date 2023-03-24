$(function() {  
    $("#card1 p").slideUp(1).slideDown(1500)
    $("#card3 p").fadeOut(1).fadeIn(1500)

    $(".cards").mouseenter(function(){
        $(this).css("box-shadow","0px 0px 7px 7px #42D9C8")
    }).mouseleave(function(){
        $(this).css("box-shadow","0px 0px 1px 1px #42D9C8")
    })
})