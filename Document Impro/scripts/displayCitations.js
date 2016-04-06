/**
 * Created by chuan.she on 2015/10/9.
 */
function displayCitations(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //获取所有引用
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        //如果没有cite属性，继续下一次循环
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        //获得引用blockquote的所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //如果没有元素节点，继续下一次循环
        if(quoteChildren.length<1)  continue;
        //获取引用最后一个元素节点,lastChild表示最后一个子节点，但不一定是元素节点
        var elem = quoteChildren[quoteChildren.length-1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);