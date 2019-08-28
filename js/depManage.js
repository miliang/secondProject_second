/**
 * Created by Alice on 2017/12/18.
 */
window.onload= function () {
    var table=document.getElementById("table");
    for(var i=0;i<departArr.length;i++){
        var a=$("<tr><td>"+departArr[i].depNo+"</td><td>"+departArr[i].depName+"</td><td>"+departArr[i].depNum+
        "</td><td>"+departArr[i].depMan+"</td><td>"+
        "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
        "<i class='fa fa-times times' aria-hidden='true'></i>"+
        "<i class='fa fa-eye eye' aria-hidden='true' data-toggle='modal' data-target='#myModal'></i>"+
        "</td></tr>");
        $(".table").append(a);
        //¸ôÐÐ±äÉ«
        var tr=table.getElementsByTagName("tr");
        for(var k=0;k<tr.length;k++){
            var obj=tr[k];
            if(k%2==0){
                obj.style.backgroundColor="rgba(0, 0, 0, 0.1)" ;
            }
        }
    }
};
//$("button").click(function () {
//    $("button").css("color","white");
//});
$(".btn").click(function(){
    $(".btn").css("color","white");
});
$(".tton").click(function () {
    $(".tton").css("background-color","inherit");
});
