/**
 * Created by chuan.she on 2015/10/14.
 */
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }

    }
}
addLoadEvent(highlightRows);