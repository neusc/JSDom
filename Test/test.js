/**
 * Created by chuan.she on 2015/10/12.
 */
window.onload = getDiv;
function getDiv(){
    var first = document.getElementsByTagName("div")[0].firstChild.nodeName;
    alert(first);
}