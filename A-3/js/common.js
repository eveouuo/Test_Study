$(document).ready(function(){
    $("header ul.gnb > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });



    $("#contents .noti_gal h2").click(function(){
        $("#contents .noti_gal h2,#contents .noti_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
});