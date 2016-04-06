/**
 * Created by chuan.she on 2015/10/9.
 */
function displayCitations(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //��ȡ��������
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        //���û��cite���ԣ�������һ��ѭ��
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        //�������blockquote������Ԫ�ؽڵ�
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //���û��Ԫ�ؽڵ㣬������һ��ѭ��
        if(quoteChildren.length<1)  continue;
        //��ȡ�������һ��Ԫ�ؽڵ�,lastChild��ʾ���һ���ӽڵ㣬����һ����Ԫ�ؽڵ�
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