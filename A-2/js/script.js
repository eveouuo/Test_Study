$(document).ready(function(){
    // nav
    $("header nav ul.gnb > li").hover(function(){
        $("header nav ul.gnb > li > ul.subGnb,header nav .nav_bg").stop().slideDown();
    },function(){
        $("header nav ul.gnb > li > ul.subGnb,header nav .nav_bg").stop().slideUp();
    })

    var crruntIndex = 0;
    setInterval(function(){
        if(crruntIndex < 2){
            crruntIndex++;
        }else {
            crruntIndex = 0;
        }
        var slideList = crruntIndex * (-1200)+"px";
        $(".slideItem").animate({left:slideList},400)
    },3000);
});