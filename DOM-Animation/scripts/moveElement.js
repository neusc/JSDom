/**
 * Created by chuan.she on 2015/10/14.
 */
//根据moveMessage函数抽象出moveElement函数，适用性更广
function moveElement(elementID,final_x,final_y,internal){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    //如果函数执行前已经有一个movement属性，进行复位,防止setTimeout队列累积事件
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    //解析一个字符串，返回一个整数
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    //根据当前位置到目标位置的距离，动态变化每次移动的距离dist
    var dist = 0;
    if(xpos == final_x && ypos== final_y){
        return true;
        //到达目标位置,moveElement函数不在继续执行
    }
    if(xpos < final_x){
        //Math.ceil函数返回一个不小于dist值的一个整数
        dist = Math.ceil((final_x-xpos)/10);
        xpos += dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos-final_x)/10);
        xpos -= dist;
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10);
        ypos += dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos-final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+internal+")";
    elem.movement = setTimeout(repeat,internal);
}