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
//��һ����Ԫ�ز��뵽Ŀ��Ԫ��֮��
function insertAfter(newElement,targetElement){
    var parentNode = targetElement.parentNode;
    if(parentNode.lastChild == targetElement){
        parentNode.appendChild(newElement);
    }
    else{
        parentNode.insertBefore(newElement,targetElement.nextSibling);
    }
}
//Ϊһ��Ԫ������µ�class����
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
//ͻ����ʾ��ǰ�ĵ�������,Ϊ�����here������
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
            //Ϊ��ͬҳ���body��ǩ��Ӳ�ͬ��id����,���ڿ��Ʋ�ͬ��ʽ
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
    //ע��repeat�����ı�д�����ŵ�д��
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
//Ϊ������Ӷ�̬Ԥ��Ч��
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
    //Ϊ�õ�ͼƬ��ӱ߿�
    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);

    //��̬�ƶ���ʾͼƬ�Ĳ�ͬ����
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
//������ҳ����ê�����ز���صĲ���
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
//Ϊ����ê����������Ӧ�¼�
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
        //��ȡ����href����#���沿��,��section��idֵ
        var sectionid = links[i].getAttribute("href").split("#")[1];
        //ҳ�������֮��sectionȫ����������״̬
        document.getElementById(sectionid).style.display = "none";
        //Ԫ�ص�����ӵ�����õ�������,������sectionidֻ���ں����ڲ�����
        links[i].destination = sectionid;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }

    }
}
addLoadEvent(prepareInternalnav);


//ͼƬ��ű�
//��ʾͼƬ
function showPic(pic)
{
    if(!document.getElementById("placeholder")) return false;
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    //��ͼƬ��˵����ʾ��ͼƬ�Ϸ���<p>Ԫ����
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
        if(description.firstChild.nodeType == 3)    //�ı��ڵ�
        {
            description.firstChild.nodeValue = text;
        }

    }
    return true;

}
//��̬��������ͼ��ռλ��ͼƬ
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
//Ϊ����ͼͼƬ������������Ӧ�¼�
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
            return !showPic(this);   //����showPic()�ķ���ֵȷ���Ƿ񴥷����ӵ�Ĭ����Ϊ

        }
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//���������Ϊ����任��ɫ������ɫ
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
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

addLoadEvent(stripeTables);
//�����ͣ��������
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        //�����ͣ������Ϊ�����һ���µ�class���ԣ�����ͻ����ʾ��ʽ
        rows[i].onmouseover = function () {
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }

    }
}
addLoadEvent(highlightRows);

//��ȡ���Դʼ���ȫ�Ƶ��б�
function displayAbbreviations(){
    if(!document.getElementsByTagName||
        !document.createElement||
        !document.createTextNode)  return false;
    //ȡ���������Դ�
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    else{
        var defs = new Array();
        //�������Դ�
        for(var i=0;i<abbreviations.length;i++){
            if(abbreviations[i].childNodes.length<1) continue;
            var definition = abbreviations[i].getAttribute("title");
            var key = abbreviations[i].lastChild.nodeValue;
            //�����Դ���Ϣ�洢��һ����������
            defs[key] = definition;
        }
    }
    //���������б�
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        //�����������
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //��ӵ������б�
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;
    //��������
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;
    var container = articles[0];
    //�ѱ���Ͷ����б���ӵ�ҳ������
    container.appendChild(header);
    container.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

//����label��ǩ��label������inputԪ�ػ�ȡ����
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
//����ռλ��ʹ��
function resetFields(whichform){
    //if(Modernizr.input.placeholder) return;
    for(var i=0;i<whichform.elements.length;i++){
        var elem = whichform.elements[i];
        //����Ϊsubmit�ı�Ԫ�ز�����ռλ��
        if(elem.type == "submit") continue;
        var check = elem.getAttribute("placeholder");
        if(!check) continue;
        //��ý��㴥���¼�
        elem.onfocus = function(){
            //ע��ؼ���this��ʹ��,�˴�������elem����
            var text = this.getAttribute("placeholder");
            if(this.value == text){
                this.value = "";
                this.className = '';
            }
        }
        //ʧȥ���㴥���¼�
        elem.onblur = function(){
            if(this.value == ""){
                this.value = this.getAttribute("placeholder");
                //ʧȥ����ΪinputԪ�������class���Ա���ͻ����ʾ
                this.className = "placeholder";
            }
        }
        elem.onblur();
    }
}


//��֤��
function isFilled(field){
    if(field.value.replace(' ','').length == 0) return false;
    var placeholder = field.getAttribute("placeholder");
    return (field.value != placeholder);
}
function isEmail(field){
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}
//��֤��Ԫ���б����Ԫ�غ�email��Ԫ��
function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var elem = whichform.elements[i];
        //elem.required���ص���boolean���ͣ���������ֵ
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
        //��ռλ����������
        resetFields(thisform);
        thisform.onsubmit = function(){
            //�˴���this�ؼ��ֲ�����thisform
            //��֤������,���ʹ��������䣬����Ч�����ֱ��return���������䲻��ִ��
            //����Ӧ��ֻ��һ������
            //return validateForm(this);
            if(!validateForm(this)) return false;
            //�ύAjax����
            var article = document.getElementsByTagName("article")[0];
            //����ɹ��ύAjax����submitʱ�䷵��false��ֹ������ظ��ύ��
            if(submitFormWithAjax(this,article))  return false;
            return true;
        }
    }
}
addLoadEvent(prepareForms);


//Ϊҳ�����ajax����
//����XMLHttpRequest����
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
//���Ԫ�ص������ӽڵ㲢����һ��ͼ��
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
        //�Ѳ���������ַ�ת��Ϊ��Ӧ��ASCII��
        dataparts[i] = elem.name+'='+encodeURIComponent(elem.value);
    }
    //����Ҫ���͵ĸ����ֶ���&����
    var data = dataparts.join('&');
    //����http����
    request.open('POST',whichform.getAttribute("action"),true);
    //Ϊ�������httpͷ��,��ʾ�����а���URL����ı�
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //������������
    request.send(data);
    request.onreadystatechange = function(){
        //��������ɣ���Ӧ����
        if(request.readyState == 4){
            //match()������������ʽΪ���������ذ�������ƥ����������
            if(request.status == 200 || request.status == 0){
                //����Ӧ���submit.html������ƥ����ȡarticleԪ��
                //innerHTML���ؿ�ʼ�ͽ�����ǩ֮���HTML����responseText����������󷵻ص�����
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    //һ��Բ���ű�ʾһ�������飬����matches����ֻ������Ԫ��
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