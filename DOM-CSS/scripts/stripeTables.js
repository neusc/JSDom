/**
 * Created by chuan.she on 2015/10/13.
 */
//���������Ϊ����任��ɫ������ɫ
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                //���ַ����Կ�,ÿ��Ԫ�ض���style����,ʹ��DOM�޸�style���Բ����ڱ�ʾ�����Ϊ�����
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
addLoadEvent(stripeTables);