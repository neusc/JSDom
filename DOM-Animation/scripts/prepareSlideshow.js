/**
 * Created by chuan.she on 2015/10/15.
 */
function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;

    if(!document.getElementById("linklist")) return false;

    //��list.html�е�div��Ǻ�img���תΪDOM��̬����������ֻ��Ϊ�˶���Ч��,��ֹ�û�����javascript����
    //��̬����div��ǩ
    var slideshow  = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    //��̬����img��ǩ������
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    //ȡ���б�����������
    var links = list.getElementsByTagName("a");

    //����ͼƬ��ʽ
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";

    //Ϊ�������������ͣ������Ӧ�¼�
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10);
    }
}
addLoadEvent(prepareSlideshow);