/**
 * Created by chuan.she on 2015/10/14.
 */
//ע��onload�¼��ĵ���˳��
addLoadEvent(positionMessage);

function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //movement��������Ҫvar���壬����ȫ�ֱ���������������ҳ��clearTimeout(movement)ȡ������Ծ��
    moveMessage();
}


//�ƶ�Ԫ����������Ч��
function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == 200 && ypos == 100){
        return true;
    }
    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }
    if(ypos < 100){
        ypos++;
    }
    if(ypos > 100){
        ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    movement = setTimeout("moveMessage()",10);
}

