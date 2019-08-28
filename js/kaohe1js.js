
$(".bianji").click(function(){
    $(this).parent().parent().parent().remove();
    var a=$(this).parent().parent().parent().nextSibling.id;
    console.log(a);
});

