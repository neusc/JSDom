/**
 * Created by chuan.she on 2015/10/12.
 */
/*function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for(var i=0;i<headers.length;i++){
        var elem = getNextElement(headers[i].nextSibling);
        //����Ԫ�ؽڵ��class����
        addClass(elem,"intro");
    }
}*/

//��styleHeaderSiblings��������ΪstyleElementSibings��������һ�����庯�����г�������һ��������
function styleElementSiblings(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elements = document.getElementsByTagName(tag);
    for(var i=0;i<elements.length;i++){
        var elem = getNextElement(elements[i].nextSibling);
        addClass(elem,theclass);
    }
}
//��ȡnode�ڵ���һ��Ԫ�ؽڵ�
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }else{
        return getNextElement(node.nextSibling);
    }
    return null;
}
//ΪԪ�ؽڵ�׷��class����,ÿ���ڵ㶼��className����
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