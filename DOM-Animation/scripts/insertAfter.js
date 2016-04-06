/**
 * Created by chuan.she on 2015/10/15.
 */
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