/**
 * Created by chuan.she on 2015/10/9.
 */
addLoadEvent(displayAbbreviations);
//��ȡ���Դʼ���ȫ�Ƶ��б�
function displayAbbreviations(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //ȡ���������Դ�
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    else{
        var defs = new Array();
        //�������Դ�
        for(var i=0;i<abbreviations.length;i++){
            if(abbreviations[i].childNodes.length<1) continue;
            var definition = abbreviations[i].getAttribute("title");
            var key = abbreviations[i].lastChild.nodeValue;
            defs[key] = definition;
        }
    }
    //���������б�
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        //�����������
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //��ӵ������б�
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;
    //��������
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //�ѱ���Ͷ����б���ӵ�ҳ������
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}