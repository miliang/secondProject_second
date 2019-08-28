window.onload=function () {
    var selectz=document.getElementById("classzteacher");
    var selectf=document.getElementById("classfteacher");
    var selects=document.getElementById("classsteacher");
    var opz=selectz.getElementsByTagName("option");
    var opf=selectf.getElementsByTagName("option");
    var ops=selects.getElementsByTagName("option");
    for(var i=0;i<opz.length;i++){
        opz[i].innerHTML=classes[i].classXm;
        opf[i].innerHTML=classes[i].classXm;
        ops[i].innerHTML=classes[i].classXm;
    }

};


// $(".bc").click(function () {
    // console.log($("#classroom").val());
    // console.log($("#classnum").val());
    // console.log($("#classstage").val());
    // console.log($("#classqq").val());
    // console.log($("#classzteacher").val());
    // console.log($("#classzp").val());
    // console.log($("#classfteacher").val());
    // console.log($("#classfp").val());
    // console.log($("#classsteacher").val());
    // console.log($("#classsp").val());
    // console.log($("#bz").val());
    // var b=$("#classroom").val();
    // var c=$("#classnum").val();
    // var d=$("#classstage").val();
    // var e=$("#classqq").val();
    // var f=$("#classzteacher").val();
    // window.location.href="class.html";
// });
// var aaa=[$("#classroom").val()];
// $(".bc").attr("href","class.html?data="+aaa);
// console.log(aaa);

// function tz() {
    // var a2=$("<tr><td>0"+(parseInt(classes[classes.length-1].classID)+1)+"</td><td>"+b+"</td><td>"+c+
    //     "</td><td>"+d+"</td><td>"+e+"</td><td>"+f+
    //     "</td><td>在读</td><td>"+
    //     "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i>"+
    //     "<i class='fa fa-times times' aria-hidden='true'></i>"+
    //     "<i class='fa fa-arrow-circle-up up' aria-hidden='true'></i>"+
    //     "<i class='fa fa-eye eye' aria-hidden='true'></i>"+"</td></tr>");
    // $("#table").append(a2);
// }