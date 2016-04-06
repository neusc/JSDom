/**
 * Created by chuan.she on 2015/9/28.
 */
//ҳ�������ɺ�ִ��,����ͬʱ���������onload����
/*window.onload = function()
{
    prepareLinks();
    preparePic();
}*/

addLoadEvent(prepareLinks);
addLoadEvent(preparePic);
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

//����javascript���룬��ʾͼƬ
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
//��ʾͼƬ
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
//window.onload = countBodyChildren;      //ҳ�����ִ��


//����javascript���룬��������
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
}
