/**
 * Created by chuan.she on 2015/10/14.
 */
//����moveMessage���������moveElement�����������Ը���
function moveElement(elementID,final_x,final_y,internal){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    //�������ִ��ǰ�Ѿ���һ��movement���ԣ����и�λ,��ֹsetTimeout�����ۻ��¼�
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    //����һ���ַ���������һ������
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    //���ݵ�ǰλ�õ�Ŀ��λ�õľ��룬��̬�仯ÿ���ƶ��ľ���dist
    var dist = 0;
    if(xpos == final_x && ypos== final_y){
        return true;
        //����Ŀ��λ��,moveElement�������ڼ���ִ��
    }
    if(xpos < final_x){
        //Math.ceil��������һ����С��distֵ��һ������
        dist = Math.ceil((final_x-xpos)/10);
        xpos += dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos-final_x)/10);
        xpos -= dist;
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10);
        ypos += dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos-final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+internal+")";
    elem.movement = setTimeout(repeat,internal);
}