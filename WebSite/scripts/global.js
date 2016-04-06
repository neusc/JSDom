/**
 * Created by chuan.she on 2015/10/19.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//将一个新元素插入到目标元素之后
function insertAfter(newElement,targetElement){
    var parentNode = targetElement.parentNode;
    if(parentNode.lastChild == targetElement){
        parentNode.appendChild(newElement);
    }
    else{
        parentNode.insertBefore(newElement,targetElement.nextSibling);
    }
}
//为一个元素添加新的class属性
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }
    else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
//突出显示当前的导航链接,为其添加here类属性
function highlightPage(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("header");
    if(headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        var linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className = "here";
            //为不同页面的body标签添加不同的id属性,便于控制不同样式
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highlightPage);
function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
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
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //注意repeat参数的编写，引号的写法
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
//为链接添加动态预览效果
function prepareSlideshow(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("intro")) return false;
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    //为幻灯图片添加边框
    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);

    //动态移动显示图片的不同部分
    var links = document.getElementsByTagName('a');
    var destination;
    for(var i=0;i<links.length;i++) {
            links[i].onmouseover = function () {
                destination = this.getAttribute("href");
                if (destination.indexOf("index.html") != -1) {
                    moveElement("preview", 0, 0, 5);
                }
                if (destination.indexOf("abouts.html") != -1) {
                    moveElement("preview", -150, 0, 5);
                }
                if (destination.indexOf("photos.html") != -1) {
                    moveElement("preview", -300, 0, 5);
                }
                if (destination.indexOf("live.html") != -1) {
                    moveElement("preview", -450, 0, 5);
                }
                if (destination.indexOf("contacts.html") != -1) {
                    moveElement("preview", -600, 0, 5);
                }

            }
    }
}
addLoadEvent(prepareSlideshow);
//创建网页导航锚，隐藏不相关的部分
function showSection(id){
    var sections = document.getElementsByTagName("section");
    for(var i=0;i<sections.length;i++){
        if(sections[i].getAttribute("id") != id){
            sections[i].style.display = "none";
        }
        else{
            sections[i].style.display = "block";
        }
    }
}
//为导航锚创建单击响应事件
function prepareInternalnav(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        //获取链接href属性#后面部分,即section的id值
        var sectionid = links[i].getAttribute("href").split("#")[1];
        //页面加载完之后section全部处于隐藏状态
        document.getElementById(sectionid).style.display = "none";
        //元素的属性拥有永久的作用于,而变量sectionid只能在函数内部存在
        links[i].destination = sectionid;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }

    }
}
addLoadEvent(prepareInternalnav);


//图片库脚本
//显示图片
function showPic(pic)
{
    if(!document.getElementById("placeholder")) return false;
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    //把图片的说明显示在图片上方的<p>元素内
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
//动态创建缩略图的占位符图片
function preparePlaceholder()
{
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}
//为缩略图图片链接添加鼠标响应事件
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
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//将表格设置为交替变换颜色即斑马色
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                //两种方法皆可,每个元素都有style属性,使用DOM修改style属性不便于表示层和行为层分离
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

addLoadEvent(stripeTables);
//鼠标悬停高亮此行
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        //鼠标悬停所在行为其添加一个新的class属性，便于突出显示样式
        rows[i].onmouseover = function () {
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }

    }
}
addLoadEvent(highlightRows);

//获取缩略词及其全称的列表
function displayAbbreviations(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    else{
        var defs = new Array();
        //遍历缩略词
        for(var i=0;i<abbreviations.length;i++){
            if(abbreviations[i].childNodes.length<1) continue;
            var definition = abbreviations[i].getAttribute("title");
            var key = abbreviations[i].lastChild.nodeValue;
            //将缩略词信息存储在一个关联数组
            defs[key] = definition;
        }
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;
    //创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;
    var container = articles[0];
    //把标题和定义列表添加到页面主体
    container.appendChild(header);
    container.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

//单击label标签，label关联的input元素获取焦点
function focusLabels(){
    if(!document.getElementsByTagName) return false;
    var labels = document.getElementsByTagName("label");
    for(var i=0;i<labels.length;i++){
        if(!labels[i].getAttribute("for")) continue;
        labels[i].onclick = function(){
            var id = labels[i].getAttribute("for");
            if(!document.getElementById(id)) return false;
            var elem = document.getElementById(id);
            elem.focus();
        }

    }
}
addLoadEvent(focusLabels);
//表单的占位符使用
function resetFields(whichform){
    //if(Modernizr.input.placeholder) return;
    for(var i=0;i<whichform.elements.length;i++){
        var elem = whichform.elements[i];
        //类型为submit的表单元素不适用占位符
        if(elem.type == "submit") continue;
        var check = elem.getAttribute("placeholder");
        if(!check) continue;
        //获得焦点触发事件
        elem.onfocus = function(){
            //注意关键词this的使用,此处不能用elem代替
            var text = this.getAttribute("placeholder");
            if(this.value == text){
                this.value = "";
                this.className = '';
            }
        }
        //失去焦点触发事件
        elem.onblur = function(){
            if(this.value == ""){
                this.value = this.getAttribute("placeholder");
                //失去焦点为input元素添加新class属性便于突出显示
                this.className = "placeholder";
            }
        }
        elem.onblur();
    }
}


//验证表单
function isFilled(field){
    if(field.value.replace(' ','').length == 0) return false;
    var placeholder = field.getAttribute("placeholder");
    return (field.value != placeholder);
}
function isEmail(field){
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}
//验证表单元素中必填表单元素和email表单元素
function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var elem = whichform.elements[i];
        //elem.required返回的是boolean类型，不是属性值
        if(elem.required == true){
        //if(elem.getAttribute("required") == "required"){
            if(!isFilled(elem)){
                alert("Please fill in the "+elem.name+" field.");
                return false;
            }
        }
        if(elem.type == "email"){
            if(!isEmail(elem)){
                alert("The "+elem.name+" field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

function prepareForms(){
    for(var i=0;i<document.forms.length;i++){
        var thisform = document.forms[i];
        //表单占位符函数调用
        resetFields(thisform);
        thisform.onsubmit = function(){
            //此处用this关键字不必用thisform
            //验证表单数据,如果使用如下语句，表单有效情况下直接return，下面的语句不再执行
            //函数应该只有一个出口
            //return validateForm(this);
            if(!validateForm(this)) return false;
            //提交Ajax请求
            var article = document.getElementsByTagName("article")[0];
            //如果成功提交Ajax请求，submit时间返回false防止浏览器重复提交表单
            if(submitFormWithAjax(this,article))  return false;
            return true;
        }
    }
}
addLoadEvent(prepareForms);


//为页面添加ajax交互
//创建XMLHttpRequest对象
//function getHTTPObject(){
//    if(typeof XMLHttpRequest == "undefined"){
//        XMLHttpRequest = function(){
//            try{
//                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
//            }catch(e){}
//            try{
//                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
//            }catch(e){}
//            try{
//                return new ActiveXObject("Msxml2.XMLHTTP");
//            }catch(e){}
//            return false;
//        }
//
//    }
//    return  new XMLHttpRequest();
//}
//情况元素的所有子节点并加载一副图像
function displayAjaxLoading(elem){
    while(elem.hasChildNodes()){
        elem.removeChild(elem.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src","images/loading.gif");
    content.setAttribute("alt","Loading...");
    elem.appendChild(content);
}
//
function submitFormWithAjax(whichform,thetarget){
    var request = new XMLHttpRequest();
    //var request = getHTTPObject();
    if(!request) return false;
    displayAjaxLoading(thetarget);

    var dataparts = [];
    var elem;
    for(var i=0;i<whichform.elements.length;i++){
        elem = whichform.elements[i];
        //把产生歧义的字符转换为对应的ASCII码
        dataparts[i] = elem.name+'='+encodeURIComponent(elem.value);
    }
    //将需要发送的各个字段用&相连
    var data = dataparts.join('&');
    //发送http请求
    request.open('POST',whichform.getAttribute("action"),true);
    //为请求添加http头部,表示请求中包含URL编码的表单
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //发送请求数据
    request.send(data);
    request.onreadystatechange = function(){
        //请求已完成，响应就绪
        if(request.readyState == 4){
            //match()函数以正则表达式为参数，返回包含各种匹配结果的数组
            if(request.status == 200 || request.status == 0){
                //从响应结果submit.html中正则匹配提取article元素
                //innerHTML返回开始和结束标签之间的HTML，而responseText返回请求处理后返回的数据
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    //一对圆括号表示一个捕获组，所有matches数组只有两个元素
                    thetarget.innerHTML = matches[1];
                }else{
                    thetarget.innerHTML = '<p>Oops.There was an error.Sorry.</p>';
                }
            }else{
                thetarget.innerHTML = '<p>'+request.statusText+'</p>';
            }
        }
    }
    return true;
}