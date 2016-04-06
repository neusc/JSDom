
/*
 * Created by chuan.she on 2015/9/28.
 */

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
//添加多个onload事件的函数
function addLoadEvent(func)
{
    var oldonload = window.onload;
    //判断是否已经存在onload事件
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
//将某元素添加到已经存在元素的后面
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
           return !showPic(this);   //根据showPic()的返回值确定是否触发链接的默认行为

        }
    }
}

//显示图片
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
        if(description.firstChild.nodeType == 3)    //文本节点
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



//分离javascript代码，弹出窗口,此例子中无效
/*
function prepareLinks()
{
    if(!document.getElementsByTagName) return false;    //判断浏览器是否支持此方法
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

//弹出窗口
function popUp(winURL)
{
    window.open(winURL,"popup","width=320,height=480");
}*/
