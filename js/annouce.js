window.onload=function () {
    setInterval(function () {
        var a=$("textarea").val().length;
        $("p>span").get(0).innerText=a;
    },500) ;
};


