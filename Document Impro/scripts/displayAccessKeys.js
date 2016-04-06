/**
 * Created by chuan.she on 2015/10/9.
 */
function displayAccessKeys(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //ȡ���ĵ�����������
    var link = document.getElementsByTagName("a");
    //������ʼ�������
    var access = new Array();
    for(var i=0;i<link.length;i++){
        //���û��accesskey���ԣ�������һ��ѭ��
        if(!link[i].getAttribute("accesskey")) continue;
        var key = link[i].getAttribute("accesskey");
        var access_text = link[i].lastChild.nodeValue;
        //��accesskey��ֵ�Ͷ�Ӧ�������ı���ӵ���������
        access[key] = access_text;
    }

    var list = document.createElement("ul");
    //�������ʼ�
    for(key in access){
        var access_text = access[key];
        //�����ŵ��б�����ַ���
        str = key+":"+access_text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }

    var header = document.createElement("h3");
    var header_text = document.createTextNode("AccessKeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);
