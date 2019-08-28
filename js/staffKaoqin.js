/**
 * Created by Alice on 2017/12/19.
 */
window.onload= function () {
   for(var i=0;i<staffArr.length;i++){
      var a= $("<tr><td>"+staffArr[i].staffNo+"</td><td>"+staffArr[i].staffName+"</td><td>"+
      staffArr[i].staffDep+"</td><td>"+staffArr[i].staffRole+"</td><td>"+staffArr[i].staffKao+"</td><td>"+
      staffArr[i].staffEmail+"</td><td>"+staffArr[i].staffClass+"</td><td>"+staffArr[i].staffState+"</td><td>"
      );
      $("#staa").append(a);
       var table=document.getElementsByClassName("table")[0];
       var tr=table.getElementsByTagName("tr");
       /*隔行变色*/
       for(var k=0;k<tr.length;k++){
           var obj=tr[k];
           if(k%2==0){
               console.log(k);
               obj.style.backgroundColor="rgba(0, 0, 0, 0.1)" ;
               console.log(1111);
           }
       }
   }


};

//职工编号
//var staffNo=["201101","201102","201103","201104","201105","201106","201107","201108","201109"];
var exampleInputStaffNo2=document.getElementById("exampleInputStaffNo2");
//console.log(exampleInputStaffNo2);
var chaxun=document.getElementById("chaXun");
//console.log(chaxun);
$("#chaXun").click(function(){
    var value=$("#exampleInputStaffNo2").val();
    //console.log(value);
    for(var i=0;i<=staffArr.length;i++)
        if(value==staffArr[i].staffNo){

        }

});