/**
 * Created by chuan.she on 2015/10/9.
 */
function addLoadEvent(func){
    var oldload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function () {
            oldload();
            func();
        }
    }
}

