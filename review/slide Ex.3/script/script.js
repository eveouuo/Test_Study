$(document).ready(function(){
    $("header nav ul.gnb > li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });

    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < 2) {
            currentIndex++;
        }else {
            currentIndex = 0;
        }
        $(".slide > .item").eq(currentIndex).siblings().fadeOut();
        $(".slide > .item").eq(currentIndex).fadeIn();
    },3000);
})