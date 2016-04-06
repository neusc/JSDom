/**
 * Created by chuan.she on 2015/10/8.
 */
function getNewContent(){
    var request;
    //根据浏览器不同创建xmlhttprequest对象的方法不同
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(request){
        request.open("GET","example.txt",true);
        //服务器给XMLHttpRequest对象发送响应,readyState属性存有XMLHttpRequest对象的状态信息，状态改变触发onreadystatechange函数
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