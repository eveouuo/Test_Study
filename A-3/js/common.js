$(document).ready(function(){
    $("header ul.gnb > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    var currunt = 0;
    setInterval(function(){
        var next = (currunt + 1) % 3;
        $(".slideItem").find("div").eq(currunt).fadeOut();
        $(".slideItem").find("div").eq(next).fadeIn();
        currunt = next;
    },3000);

    $("#contents .noti_gal h2").click(function(){
        $("#contents .noti_gal h2,#contents .noti_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

    $("#contents > .noti_gal > ul.desc > li").eq(0).click(function(){
        $("#modal").fadeIn();
    });
    $("#modal > .modalInner > .btn").click(function(){
        $("#modal").fadeOut();
    });
});