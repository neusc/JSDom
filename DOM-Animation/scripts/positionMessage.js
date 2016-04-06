/**
 * Created by chuan.she on 2015/10/14.
 */
//注意onload事件的调用顺序
addLoadEvent(positionMessage);

function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //movement变量不需要var定义，它是全局变量，可以在其它页面clearTimeout(movement)取消“跳跃”
    moveMessage();
}


//移动元素生产动画效果
function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == 200 && ypos == 100){
        return true;
    }
    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }
    if(ypos < 100){
        ypos++;
    }
    if(ypos > 100){
        ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    movement = setTimeout("moveMessage()",10);
}

