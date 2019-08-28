/**
 * Created by dhy on 2017/12/22.
 */
window.onload=function () {
    for(var i=0;i<annouceArray.length;i++) {
        var annAdd = $("<tr><td>" + annouceArray[i].annTitle + "</td><td>" + annouceArray[i].annType + "</td><td>"
            + annouceArray[i].annPerson + "</td><td>" + annouceArray[i].annTime + "</td><td class='annSearch'><i class='fa fa-eye' aria-hidden='true'></i>" +
            "<i class='fa fa-pencil-square-o pencil' aria-hidden='true'></i><i class='fa fa-times' aria-hidden='true'></i></td>" );
        annAdd.appendTo($("#annThings"));
    }
};
