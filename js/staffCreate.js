window.onload=function () {
    var staffdep=document.getElementById("staffdep");
    var staffclass=document.getElementById("staffclass");
    var op=staffdep.getElementsByTagName("option");
    var op2=staffclass.getElementsByTagName("option");
    for(var i=0;i<op.length;i++){
        op[i].innerHTML=staffDep[i];
    }
    for(var i=0;i<op2.length;i++){
        op2[i].innerHTML=classId[i];
    }
};
