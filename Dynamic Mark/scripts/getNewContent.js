/**
 * Created by chuan.she on 2015/10/8.
 */
function getNewContent(){
    var request;
    //�����������ͬ����xmlhttprequest����ķ�����ͬ
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(request){
        request.open("GET","example.txt",true);
        //��������XMLHttpRequest��������Ӧ,readyState���Դ���XMLHttpRequest�����״̬��Ϣ��״̬�ı䴥��onreadystatechange����
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry,your browser don't support XMLHttpRequest!");
    }
}
addLoadEvent(getNewContent);