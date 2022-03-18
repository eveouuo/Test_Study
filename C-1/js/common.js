$(document).ready(function(){
    $("nav.gnb > ul > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    var currunt = 0;
    setInterval(function(){
        var next = (currunt + 1) % 3;

        $(".slideItem").eq(currunt).fadeOut();
        $(".slideItem").eq(next).fadeIn();

        currunt = next;
    },3000);

    
});