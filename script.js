$(function() {  
    $("#card2 p").hide()
    $("#card1 p").slideUp(0).slideDown(1500)
    $("#card3 p").fadeOut(0).fadeIn(1500)

    $(".cards").mouseenter(function(){
        $(this).css("box-shadow","0px 0px 7px 7px #42D9C8")
    }).mouseleave(function(){
        $(this).css("box-shadow","0px 0px 1px 1px #42D9C8")
    })
    $("#card2 h3").on("click",function(){
        $("#card2 p").toggle()
    })
    $("#card2 h3").hover(function(){
        $("*").css("cursor","pointer")
    }, function(){
        $("*").css("cursor","default")
    })
    $("*").mousemove(function(){
        $("h3").delay(500).animate({fontSize: "4vmin"},1000)
        $("p").delay(500).fadeTo(1000,.3).fadeTo(1000,1)
    })

    for(let i = 0;i<100;i++)
    {
        setTimeout(function(){
            $(".bar").width(70 + (i/5)+"%")
        },20*i)
        
    }
})