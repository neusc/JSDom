/**
 * Created by chuan.she on 2015/10/15.
 */
function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;

    if(!document.getElementById("linklist")) return false;

    //将list.html中的div标记和img标记转为DOM动态创建，它们只是为了动画效果,防止用户禁用javascript功能
    //动态创建div标签
    var slideshow  = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    //动态创建img标签及属性
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    //取得列表中所有链接
    var links = list.getElementsByTagName("a");

    //设置图片样式
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";

    //为鼠标在链接上悬停定义响应事件
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10);
    }
}
addLoadEvent(prepareSlideshow);