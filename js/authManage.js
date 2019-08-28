
var newRole=[];
window.onload=function () {
for(var i=0;i<departArr.length;i++){
    var orze_add=$("<tr><td>"+departArr[i].depName+"</td><td>"+departArr[i].dep_s+"</td><td>"+departArr[i].dep_l+"</td><td class='search'><i class='fa fa-eye' aria-hidden='true'></i></td>" +
        "<td><button  class='fa fa-pencil-square-o btn' aria-hidden='true' type='button' data-toggle='modal' data-target='#limits_01'>修改权限</button></td>");
    orze_add.appendTo($("#role_table"));

}
    var Bgcolor=($("#role_table").find("tr"));
    for(var n=0;n<Bgcolor.length;n++){
        // console.log(Bgcolor[i])
        if(Bgcolor.length%2!=0){
            Bgcolor[i].style.backgroundColor="rgb(220, 183, 40)";
        }
    }
    for(var i=0;i<staffArr.length;i++){
        if(staffArr[i].staffDep=="行政部"){
            var mysearch=$("<tr><td>"+staffName[i]+"</td><td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +" >修改权限</button></td></tr>")
            mysearch.appendTo($("#search_Role"));
        }
        if(staffArr[i].staffDep=="教学部"){
            var mysearch=$("<tr><td>"+staffName[i]+"</td><td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +" >修改权限</button></td></tr>")
            mysearch.appendTo($("#search_Role1"));
        }     if(staffArr[i].staffDep=="安保部"){
            var mysearch=$("<tr><td>"+staffName[i]+"</td><td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +" >修改权限</button></td></tr>")
            mysearch.appendTo($("#search_Role2"));
        }     if(staffArr[i].staffDep=="后勤部"){
            var mysearch=$("<tr><td>"+staffName[i]+"</td><td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +" >修改权限</button></td></tr>")
            mysearch.appendTo($("#search_Role3"));
        }     if(staffArr[i].staffDep=="财务部"){
            var mysearch=$("<tr><td>"+staffName[i]+"</td><td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +" >修改权限</button></td></tr>")
            mysearch.appendTo($("#search_Role4"));
        }
        $(".search").click(function () {
            $("#searchRole").modal("show");

            $(".aa1").click(function () {
                $(".limits_0").modal("show");
            });

        });
    }

};

//新增机构
$("#new_role").click(function () {
    newRole.push($("#new_role1 td input")[0].value);
    newRole.push($("#new_role1 td input")[1].value);
    newRole.push($("#new_role1 td input")[2].value);

    // var aa=$("#limits_0").get(0).id;


    var new_role_tr=$("<tr><td>"+newRole[0]+"</td><td>"+newRole[1]+"</td><td>"+newRole[2]+"</td> <td id='search1'><i class='fa fa-eye' aria-hidden='true'></i></td" +
        ">+<td><button  class='fa fa-pencil-square-o btn aa1' aria-hidden='true' type='button' data-toggle='modal' " +
        " >修改权限</button></td></tr>");
    new_role_tr.appendTo($("#role_table"));

    $("#search1").click(function () {
        $("#searchRole1").modal("show");
    });

    $(".aa1").click(function () {
        $(".limits_0").modal("show");
    });


    $("#new_role1 td input")[0].value="";
    $("#new_role1 td input")[1].value="";
    $("#new_role1 td input")[2].value="";

    newRole.splice(0,3);


});
$(".btn-default,.btn-primary").mousedown(function () {
    $(".btn-default,.btn-primary").css(
        {"color":"white",
            "background-color": "rgb(220, 183, 40)",
            "border-style":"none"
        })
});
$(".btn-default,.btn-primary").mouseup(function () {
    $(".btn-default,.btn-primary").css(
        {"color":"white",
            "background-color": "rgb(220, 183, 40)",
            "border-style":"none"
        })
});
$(".btn-default,.btn-primary").mousemove(function () {
    $(".btn-default,.btn-primary").css(
        {"color":"white",
            "background-color": "rgb(220, 183, 40)",
            "border-style":"none"
        })
});
// console.log($(".btn-default").length);





