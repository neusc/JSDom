/**
 * Created by chuan.she on 2015/10/9.
 */
function displayAccessKeys(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //取得文档中所有链接
    var link = document.getElementsByTagName("a");
    //保存访问键的数组
    var access = new Array();
    for(var i=0;i<link.length;i++){
        //如果没有accesskey属性，继续下一次循环
        if(!link[i].getAttribute("accesskey")) continue;
        var key = link[i].getAttribute("accesskey");
        var access_text = link[i].lastChild.nodeValue;
        //将accesskey的值和对应的链接文本添加到关联数组
        access[key] = access_text;
    }

    var list = document.createElement("ul");
    //遍历访问键
    for(key in access){
        var access_text = access[key];
        //创建放到列表项的字符串
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
