
/*
 * Created by chuan.she on 2015/9/28.
 */

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
//��Ӷ��onload�¼��ĺ���
function addLoadEvent(func)
{
    var oldonload = window.onload;
    //�ж��Ƿ��Ѿ�����onload�¼�
    if(typeof window.onload!="function")
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}
//��ĳԪ����ӵ��Ѿ�����Ԫ�صĺ���
function insertAfter(newElement,targetElement)
{
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)
    {
        parent.appendChild(newElement);
    }
    else
    {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function prepareGallery()
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onmouseover = function()
        {
           return !showPic(this);   //����showPic()�ķ���ֵȷ���Ƿ񴥷����ӵ�Ĭ����Ϊ

        }
    }
}

//��ʾͼƬ
function showPic(pic)
{
    if(!document.getElementById("placeholder")) return false;
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description") )
    {
        if(pic.getAttribute("title"))
        {
            var text = pic.getAttribute("title");
        }
        else
        {
            var text = "";
        }
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3)    //�ı��ڵ�
        {
            description.firstChild.nodeValue = text;
        }

    }
    return true;

}

function preparePlaceholder()
{
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}



//����javascript���룬��������,����������Ч
/*
function prepareLinks()
{
    if(!document.getElementsByTagName) return false;    //�ж�������Ƿ�֧�ִ˷���
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].getAttribute("class")=="popup")
        {
            links[i].onclick = function()
            {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

//��������
function popUp(winURL)
{
    window.open(winURL,"popup","width=320,height=480");
}*/
