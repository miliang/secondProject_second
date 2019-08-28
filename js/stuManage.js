
/**
 * Created by Alice on 2017/12/19.
 */
var table=document.getElementById("table");

window.onload= function () {
    for(var i=0;i<students.length;i++){
        var a=$("<tr><td>"+students[i].stuID+"</td><td>"+students[i].stuName+"</td><td>"+students[i].stuSex+
        "</td><td>"+students[i].stuAge+"</td><td>"+students[i].stuClass+"</td><td>"+students[i].stuParent+
        "</td><td>"+students[i].stuContactTel+"</td><td>"+students[i].stuEmail+"</td><td>"+
        students[i].stuGraduateTime+"</td><td>"+students[i].stuStatus+"</td><td>"+
        "<i class='fa fa-pencil-square-o pencil' aria-hidden='true' onclick='revise(this)' data-toggle='modal' data-target='#myMo'></i>"+
        "<i class='fa fa-times times' aria-hidden='true'></i>"+
        " <i class='fa fa-eye eye' aria-hidden='true' data-toggle='modal' data-target='#myModal'></i>"+ "</td></tr>");
        $("#table").append(a);
        var tr=table.getElementsByTagName("tr");

        //隔行变色
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


window.onload=function () {
    for(var i=0;i<students.length;i++){
        classSearch(i);
    }
    if(bbb.length!=0){
        tz();
    }
    // console.log(bbb);
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
$("#classbtn").click(function () {//#classBtn:查询按钮
    for(var m=0;m<tr.length;m++){
        if(m!=0){
            $(tr[m]).html("");
        }
    }
    var sele=$("#classStage").find("option:selected").text();//下拉框
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
