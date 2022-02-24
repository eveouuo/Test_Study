$(document).ready(function(){
    $("header nav ul.gnb > li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });

    $(".slide").children("div:gt(0)").hide();

    var current = 0;

    setInterval(function(){
        var next = (current + 1) % 3;
        $()
    },3000)
})