/**
 * Created by 天俊sama on 2016/9/25.
 */
var storage = window.localStorage;

$(function(){
    init() ;
});

function init(){
    storage.setItem("count", 0);
    initClick() ;
}

function initClick(){
    $("#figure").click(function(){
        //dialog
        let words = [
            "你好呀~",
            "欢迎！",
            "<(￣3￣)> ",
            "幸会幸会",
            "够了没？"
        ] ;
        let dialog = $("#dialog") ;
        let idx = Math.floor(Math.random()*4) ;
        let count = storage.getItem("count");
        if(count==6){
            dialog.text(words[4]) ;
            dialog.css("color","red")
            $("#figure")[0].src = "img/figure2.jpg" ;
        }else {
            while (dialog.text() == words[idx]) {
                idx = Math.floor(Math.random() * 4);
            }
            dialog.text(words[idx]);
            count++ ;
            storage.setItem("count",count);
        }
        dialog.animate({opacity:'1'},1500,function(){
            setTimeout(function(){
                dialog.css("opacity","0") ;
            },500) ;
        }) ;
    });

}