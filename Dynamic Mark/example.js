/**
 * Created by chuan.she on 2015/9/30.
 */

window.onload = function()
{
    var testdiv=document.getElementById("testdiv");
    //testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>"

    var para = document.createElement("p");
    /*var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);*/
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode(" content. ");
    para.appendChild(txt3);
    testdiv.appendChild(para);
}