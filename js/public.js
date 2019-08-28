function classSearch(i) {
    // classes[i].classID="2";
    //班级查询
    var a=$("<tr><td>"+classes[i].classID+"</td><td>"+classes[i].classroom+"</td><td>"+classes[i].classRs+
    "</td><td>"+classes[i].classXm+"</td><td>"+classes[i].classJD+"</td><td>"+classes[i].classQQ+
    "</td><td>"+classes[i].classZt+"</td><td>"+
    "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
    "<i class='fa fa-times times' aria-hidden='true'></i>"+
    "<i class='fa fa-arrow-circle-up up' onclick='s(this)' aria-hidden='true'></i>"+
    "<i class='fa fa-eye eye' aria-hidden='true'></i>"+"</td></tr>");
    $("#table").append(a);
}

function search(i) {
    //学生查询
        var r=$("<tr><td>"+students[i].stuID+"</td><td>"+students[i].stuName+"</td><td>"+students[i].stuSex+
        "</td><td>"+students[i].stuAge+"</td><td>"+students[i].stuClass+"</td><td>"+students[i].stuParent+
        "</td><td>"+students[i].stuContactTel+"</td><td>"+students[i].stuEmail+"</td><td>"+students[i].stuGraduateTime+
        "</td><td>"+students[i].stuStatus+"</td><td>"+
        "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
        "<i class='fa fa-times times' aria-hidden='true'></i>"+
        "<i class='fa fa-eye eye' aria-hidden='true'></i>"+
        "</td></tr>");
        $(".table").append(r);

    //部门查询
    var t=$("<tr><td>"+departArr[i].depNo+"</td><td>"+departArr[i].depName+"</td><td>"+departArr[i].depNum+
    "</td><td>"+departArr[i].depMan+"</td><td>"+
    "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
    "<i class='fa fa-times times' aria-hidden='true'></i>"+
    "<i class='fa fa-eye eye' aria-hidden='true'></i>"+
    "</td></tr>");
    $(".table").append(t);

    //职工查询
    var a=$("<tr><td>"+staffArr[i].staffNo+"</td><td>"+staffArr[i].staffName+"</td><td>"+staffArr[i].staffDep+
    "</td><td>"+staffArr[i].staffRole+"</td><td>"+staffArr[i].staffTel+"</td><td>"+staffArr[i].staffEmail+
    "</td><td>"+staffArr[i].staffClass+"</td><td>"+staffArr[i].staffState+ "</td><td>"+
    "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
    "<i class='fa fa-times times' aria-hidden='true'></i>"+
    "<i class='fa fa-eye eye' aria-hidden='true'></i>"+
    "</td></tr>");
    $(".table").append(a);
    }
//var btn=document.getElementsByClassName("btn-primary");
//btn[0].style.borderColor="inherit";
//修改
//    var o;

    var a, b, c, d, e, f, i, j, k, h, t, newName,age,birth,
        tel,phone,telephone,email,address,mark,myStatus,sex;
    function revise(obj){
        //o=obj;
        //$(".revise").show();
        console.log($(obj));
        a=$(obj).parent().parent().find("td:nth-of-type(2)");//名字
        b=$(obj).parent().parent().find("td:nth-of-type(4)");//年龄
        c=$(obj).parent().parent().find("input:nth-of-type(4)");//出生日期
        d=$(obj).parent().parent().find("td:nth-of-type(7)");//父亲电话
        e=$(obj).parent().parent().find("input:nth-of-type(10)");//母亲电话
        f=$(obj).parent().parent().find("input:nth-of-type(12)");//紧急联系人电话
        i=$(obj).parent().parent().find("td:nth-of-type(8)");//邮箱
        j=$(obj).parent().parent().find("input:nth-of-type(14)");//地址
        k=$(obj).parent().parent().find("textarea:nth-of-type(1)");//备注
        h=$(obj).parent().parent().find("td:nth-of-type(10)");//状态
        t=$(obj).parent().parent().find("td:nth-of-type(3)");
        //console.log(a.val());
        newName=$("#name");
        age=$("#age");
        birth=$("#birth");
        tel=$("#tel");//学生父亲的联系方式
        phone=$("#phone");//学生母亲的联系方式
        telephone=$("#telephone");//学生紧急联系方式
        email=$("#email");
        address=$("address");
        mark=$("#mark");
        myStatus=$("#status");
        sex=$("#sex");
        newName.val(a.html());
        age.val(b.html());
        birth.val(c.html());
        tel.val(d.html());
        phone.val(e.html());
        telephone.val(f.html());
        email.val(i.html());
        address.val(j.html());
        mark.val(k.html());
        myStatus.val(h.html());
        sex.val(t.html());
        console.log(a.html());

    }
    $(".save").click(function(){
        //console.log(text1.val())
        //console.log(a);
        //console.log(obj)
        a.html(newName.val());//姓名
        b.html(age.val());//年龄
        c.html(birth.val());//生日
        d.html(tel.val());//父亲电话
        e.html(phone.val());//母亲电话
        f.html(telephone.val());//紧急联系人电话
        i.html(email.val());//邮箱
        j.html(address.val());//地址
        k.html(mark.val());//备注
        h.html(myStatus.val());//状态
        t.html(sex.val());
        //$("#myMo").hide()
    });


