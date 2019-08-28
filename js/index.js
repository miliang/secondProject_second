/**
 * Created by Administrator on 2017/12/18/018.
 */
//内联框架跟着页面大小变化
window.onresize = function(){
    console.log("change");
    asynconresize();
};
window.onload = function(){
    asynconresize();
};
var asynconresize=function(){
    var height = parseInt($(window).height());
    $(".iframeBlock").css("height",height + "px");
    $(".nav_slide").css("height",height +10+ "px");
    $(".nav_bar").css("height",height +10+ "px");
    if($(window).width() < 992){
        $(".switch").css("left","90%");
        $(".iframeBlock").css("width","100%");
    }else{
        $(".switch").css("left","12%");
        $(".iframeBlock").css("width","87%");
        $(".nav_slide").css({"width":"13%","display":"inline_block"});
        $(".nav_bar").css("display","none")
    }
};
//下拉菜单--箭头出现
$(".nav li").click(function () {
   $(".nav .fa-angle-right").each(function(i,n){
       $(n).css("opacity",0);
       $(n).parents("li").css("background-color","inherit")
    });
    $(this).css("background-color","rgba(220, 183, 40, 0.85)")
    $(this).find(".normalAngle").animate({
        "opacity":1
    })
});
//出现二级菜单
$(".hasSecond").parent().click(function(){


    // var length=parseInt($(".secondNav li").length);
    var height = parseInt($(this).css("height"));
    if(height==40){
        $(this).css("height", 40+40*2 + "px");
        $(".downAngle").css("transform","rotate(90deg)");
    }else {
        $(this).css("height","40px")
    }
    // $(".nav>ul>li").each(function(i,n){//点击其他的收回来
    //     if($(this)!=obj){
    //         $(n).css("height","60px");
    //     }
    // })
});
$(".secondNav>li").click(function(){
    var e=window.event||arguments[0];
    e.cancelBubble=true;
});


$(".secondNav li").click(function(){
    $(this).parent().find(".fa-angle-right").each(function(index,element){
        $(element).css("opacity",0);
        $(element).parents("li").css("background-color","transparent");
    });
    $(this).find(".fa-angle-right").animate({
        "opacity":1
    },100);
    $(this).css("background-color","rgba(0,0,0,0.4)");
    // return false;
});
//收缩框
$(".switch").click(function(){
    if($(window).width() >= 992) {
        if (parseInt($(".nav_slide").css("width")) !== 0) {
            $(".nav_slide").animate({
                    "width": "0"
                }
            );
            $(".iframeBlock").animate({
                "width": "100%"
            })
        } else {
            $(".nav_slide").animate({
                    "width": "13%"
                }
            );
            $(".iframeBlock").animate({
                "width": "87%"
            })
        }
    }else{
        $(".nav_bar").fadeIn();
        $("body").css("overflow","auto");
    }
});

$(".nav_bar .fa-close").click(function(){
    $(".nav_bar").fadeOut();
    $("body").css("overflow","hidden");
});

$(".nav_bar li").click(function(){
    console.log("点击对象"+$(this).find("ul").attr("class"));
    if($(this).find("ul").attr("class") !== "secondNav") {
        $(".nav_bar").fadeOut();
        $("body").css("overflow","hidden");
    }
});

//图标对齐
// $(".hasIcon").parent().css({
//     "padding-left":"15px"
// });




