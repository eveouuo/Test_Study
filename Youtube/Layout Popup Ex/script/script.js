// $(".layerPopup").click(function(){
//     $(".layer").css("display","block");
// });
// $(".layer .close").click(function(){
//     $(".layer").css("display","none");
// });
$(".layerPopup").click(function(){
    $(".layer").show();
    $(".layer-bg").show();
});
$(".layer .close").click(function(){
    $(".layer").hide();
    $(".layer-bg").hide();
});