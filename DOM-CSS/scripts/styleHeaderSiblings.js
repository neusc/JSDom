/**
 * Created by chuan.she on 2015/10/12.
 */
/*function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for(var i=0;i<headers.length;i++){
        var elem = getNextElement(headers[i].nextSibling);
        //设置元素节点的class属性
        addClass(elem,"intro");
    }
}*/

//将styleHeaderSiblings函数抽象为styleElementSibings函数，把一个具体函数进行抽象总是一个好主意
function styleElementSiblings(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elements = document.getElementsByTagName(tag);
    for(var i=0;i<elements.length;i++){
        var elem = getNextElement(elements[i].nextSibling);
        addClass(elem,theclass);
    }
}
//获取node节点下一个元素节点
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }else{
        return getNextElement(node.nextSibling);
    }
    return null;
}
//为元素节点追加class属性,每个节点都有className属性
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
addLoadEvent(function(){styleElementSiblings("h1","intro")});