/**
 * Created by 天俊sama on 2016/9/25.
 */
import React from 'react'
import { render } from 'react-dom'

var storage = window.localStorage;

$(function(){
    init() ;
});

function init(){
    if(!storage.getItem("count")) {
        storage.setItem("count", 0);
    }
    initClick() ;
    initReact() ;
    initScroll() ;
}

function initReact(){
    //class HelloWorld extends React.Component {
    //    render() {
    //        return (
    //            <div>Hello World</div>
    //        );
    //    }
    //}
    //render(<HelloWorld/>, $('#content')[0]);
}

function initClick(){
    //figure click
    var figEle = $("#figure") ;
    figEle.click(()=>{
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
            figEle[0].src = "img/figure2.jpg" ;
        }else {
            console.log(count) ;
            while (dialog.text() == words[idx]) {
                idx = Math.floor(Math.random() * 4);
            }
            dialog.text(words[idx]);
            count++ ;
            storage.setItem("count",count);
        }
        dialog.css('z-index',10) ;
        dialog.animate({opacity:'1'},1500,function(){
            setTimeout(function(){
                dialog.css({"opacity":"0","z-index":"-1"}) ;
            },500) ;
        }) ;
    });
    //life part click
    var life_part_ele = $("#life-part") ;
    var life_title_ele = $(".life-title") ;
    var pj_list = $("#pj-list") ;
    life_part_ele.click(()=>{
        life_title_ele.toggle() ;
        life_part_ele.toggleClass("bg-shrink-l") ;
        life_part_ele.toggleClass("bg-spread") ;
        pj_list.toggleClass("visible") ;
        pj_list.toggleClass("invisible") ;
    }) ;

}

function initScroll(){

    //js模拟垂直滚轮滑动
    var scrollEle = $('#personal-info') ;
    var scrollWrap = $('#personal-info-wrap') ;
    var scrollSpd = 20 ;//滚轮滚动的速度
    var Max_dist = scrollEle.height()-scrollWrap.height() ;//两个组件底边之间的最大距离
    if(Max_dist<=0){
        return ;
    }
    scrollEle.css('bottom',-Max_dist) ;

    scrollEle.bind('mousewheel',event=>{

        var step = scrollSpd ;
        event.preventDefault() ;
        event = event.originalEvent ;
        //兼容firefox
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        var tempPos = parseInt(scrollEle.css('bottom')) ;
        console.log(tempPos) ;
        if(event.delta>0){
            //scroll up
            if(tempPos>(-Max_dist)){
                tempPos-step>(-Max_dist)? tempPos = tempPos-step : tempPos = -Max_dist ;
            }
        }else{
            //scroll down
            if(tempPos<0){
                tempPos+step<0? tempPos = tempPos+step : tempPos = 0 ;
            }
        }
        //console.log(tempPos) ;
        scrollEle.css('bottom',tempPos) ;
    });
}
