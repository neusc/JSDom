/**
 * Created by chuan.she on 2015/10/13.
 */
//将表格设置为交替变换颜色即斑马色
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                //两种方法皆可,每个元素都有style属性,使用DOM修改style属性不便于表示层和行为层分离
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
addLoadEvent(stripeTables);