/**
 * Created by chuan.she on 2015/10/15.
 */
//将彩色图片转化为灰度图片
function convertToGS(img){
    //判断浏览器是否支持canvas
    if(!Modernizr.canvas) return;
    //存储原始彩色版
    img.color = img.src;
    //创建灰度版
    img.grayscale = createGSCanvas(img);
    //创建鼠标响应事件在彩色版和灰度版之间切换
    img.onmouseover = function(){
        this.src = this.color;
    }
    img.onmouseout = function(){
        this.src = this.grayscale;
    }
    img.onmouseout();
}

//创建灰度图
function createGSCanvas(img){
    var canvas = document.createElement("canvas");
    canvas.height = img.height;
    canvas.width = img.width;

    //获取二维绘图空间的引用,创建彩色图片
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    //getImageData只能操作与脚本位于同一个域的图片
    //遍历图片中每一个像素，求每个像素的红绿蓝成分求平均值，得到对应的灰度值
    var c = ctx.getImageData(0,0,img.width,img.height);
    for(var i=0;i<img.height;i++){
        for(var j=0;j<img.width;j++){
            var x=(i*4)* c.width+(j*4);
            var r= c.data[x];
            var g= c.data[x+1];
            var b= c.data[x+2];
            c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3;
        }
    }
    //把灰度数据放回画布的绘图环境
    ctx.putImageData(c,0,0,0,0, c.width, c.height);
    return canvas.toDataURL();

}
window.onload = function () {
    convertToGS(document.getElementById('avatar'));
}