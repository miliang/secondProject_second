/**
 * Created by 12581 on 2017/12/18.
 */
$(".bianji").click(function(){
    $(".form-control").removeAttr("readonly");
});
$(".baoCun").click(function(){
    $(".form-control").attr("readonly","readonly");
});
