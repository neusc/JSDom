/**
 * Created by chuan.she on 2015/10/15.
 */
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