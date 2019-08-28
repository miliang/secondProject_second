/**
 * Created by Alice on 2017/12/19.
 */
window.onload= function () {
    var table=document.getElementsByClassName("table");
    for(var i=0;i<staffArr.length;i++){
        var a=$("<tr><td>"+staffArr[i].staffNo+"</td><td>"+staffArr[i].staffName+"</td><td>"+staffArr[i].staffDep+
        "</td><td>"+staffArr[i].staffRole+"</td><td>"+staffArr[i].staffTel+"</td><td>"+staffArr[i].staffEmail+
        "</td><td>"+staffArr[i].staffClass+"</td><td>"+staffArr[i].staffState+"</td><td>"+
        "<i class='fa fa-pencil-square-o pencil' aria-hidden='true' onclick='revise(this)' data-toggle='modal' data-target='#myMo'></i>"+
        "<i class='fa fa-times times' aria-hidden='true'></i>"+
        "<i class='fa fa-eye eye' aria-hidden='true' data-toggle='modal' data-target='#myModal'></i>"+
        "</td></tr>");
        $(".table").append(a);
        //隔行变色
        var tr=table[0].getElementsByTagName("tr");
        for(var k=0;k<tr.length;k++){
            var obj=tr[k];
            if(k%2==0){
                obj.style.backgroundColor="rgba(0, 0, 0, 0.1)" ;
            }
        }
    }
};
$(".btn").click(function(){
    $(".btn").css("color","white");
});