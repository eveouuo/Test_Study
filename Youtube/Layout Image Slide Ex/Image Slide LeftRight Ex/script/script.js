var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    
    var slidePosition = currentIndex * (-1200)+"px";
    // var slidePosition = currentIndex * -360px
    //                          0 = 0
    //                          1 = -360px
    //                          2 = -720px
    //                          0 = 0 ...
    $(".slideList").animate({left:slidePosition},400);
},3000);