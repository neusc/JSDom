/**
 * Created by chuan.she on 2015/10/14.
 */
function positionMessageAbstract(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message",200,100,10);
}
addLoadEvent(positionMessageAbstract);