
$(".logOnbox").click(function(){
    for(var i= 0;i<staffArr.length;i++) {
        var account = staffArr[i].staffId;
        var passWord = staffArr[i].staffPsw;
        if (parseInt($(".accountInpt").val()) == account) {
            if (parseInt($(".passwordInpt").val()) == passWord) {
                $(".logOn").attr('href', 'calendar.html');
                return true;
            }
        }
    }
});