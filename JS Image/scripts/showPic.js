/**
 * Created by chuan.she on 2015/9/28.
 */
//页面加载完成后执行,可以同时添加少量的onload函数
/*window.onload = function()
{
    prepareLinks();
    preparePic();
}*/

addLoadEvent(prepareLinks);
addLoadEvent(preparePic);
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

//分离javascript代码，显示图片
function preparePic()
{
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].getAttribute("class")=="showpic")
        {
            links[i].onclick = function()
            {
                showPic(this);
                return false;
            }

        }

    }

}
//显示图片
function showPic(pic)
{
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;

}

/*function countBodyChildren()
{
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);

}*/
//window.onload = countBodyChildren;      //页面加载执行


//分离javascript代码，弹出窗口
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
}
