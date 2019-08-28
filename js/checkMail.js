/**
 * Created by Administrator on 2017/12/21 0021.
 */
$(function(){
    $('#edit').editable({inlineMode: false, alwaysBlank: true})
});
$(".btnBox button:nth-of-type(1)").click(function(){
    $(window).attr('location','http://www.jb51.net');/*可以改路径*/
    console.log(11111)
})
$(".btnBox button:nth-of-type(2)").click(function(){
    $(window).attr('location','http://www.jb51.net');/*可以改路径*/
    console.log(11111)
})