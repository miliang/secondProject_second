window.onload=function () {
    for(var i=0;i<annouceArray.length;i++) {
        var annAdd = $("<tr><td>" + annouceArray[i].annTitle + "</td><td>" + annouceArray[i].annType + "</td><td>"
            + annouceArray[i].annPerson + "</td><td>" + annouceArray[i].annTime + "</td><td class='annSearch'><i class='fa fa-eye' aria-hidden='true'></i>" +
            "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i><i class='fa fa-times' aria-hidden='true'></i></td>" );
        annAdd.appendTo($("#annThings"));
    }
};
$("#search").click(function () {

    var new_table=$("#annThings>tbody>tr")
    for(var n=0;n<new_table.length;n++){
       $ (new_table[n+1]).remove();
        // console.log(new_table[i]);
    }
    new_table.splice(1,new_table.length);
    // console.log(select_val);
    // console.log(new_table);
    var select_val=($("select").val());
    for(var i=0;i<annouceArray.length;i++){
        if(annouceArray[i].annType==select_val){
            var annAdd = $("<tr><td>" + annouceArray[i].annTitle + "</td><td>" + annouceArray[i].annType + "</td><td>"
                + annouceArray[i].annPerson + "</td><td>" + annouceArray[i].annTime + "</td><td class='annSearch'><i class='fa fa-eye' aria-hidden='true'></i>" +
                "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i><i class='fa fa-times' aria-hidden='true'></i></td>" );
            annAdd.appendTo($("#annThings"));
        }
        // console.log(annouceArray[n].annType)
    }
});