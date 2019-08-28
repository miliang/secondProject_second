var table=document.getElementById("table");
var tr;
window.onload=function () {
    for(var i=0;i<classes.length;i++){
        classSearch(i);
    }
    // tz();
    // $.url().param("data");
    tr=table.getElementsByTagName("tr");
    for(var k=0;k<tr.length;k++){
        var obj=tr[k];
        if(k%2==0){
            obj.style.backgroundColor="rgba(0, 0, 0, 0.1)" ;
        }
    }
    $(".btn").click(function () {
        $(".btn").css("color","white");
    });

};

//=======================班级查询==========================
$("#classbtn").click(function () {
    for(var m=0;m<tr.length;m++){
        if(m!=0){
            $(tr[m]).html("");
        }
    }
    var sele=$("#classStage").find("option:selected").text();
    // console.log(sele);
    var classid=$("#classid").val();
    var classman=$("#classMan").val();

    $.each(classes,function (i,n) {

        //===========================按照班级阶段搜索===================================

        if(classes[i].classJD==sele){
            classSearch(i);
        }
//===========================按照班级编号搜索===================================


        if(classes[i].classID==classid&&classes[i].classJD!=sele) {
            classSearch(i);
        }
//===========================按照班级名称搜索===================================

        if(classes[i].classXm==classman&&classes[i].classID!=classid&&classes[i].classJD!=sele){
            classSearch(i);
        }
        //============无搜索条件==========================================

        if(sele==""&&classid==""&&classman==""){
            classSearch(i);
        }
    });
});

function s(obj) {
    var td=$(obj).parent().parent().find("td").eq(4).text();
    console.log(td);
    // console.log("td");
    // alert("sa");
    if(td=="中班"){
        td="大班";
    }
    else if(td=="小班") {
        td="中班";
    }
    else if(td=="大班"){
        td="学前班";
    }
}


// var trs=$("table").find("tr");
//console.log(trs.length);


