/**
 * Created by chuan.she on 2015/10/15.
 */
//����ɫͼƬת��Ϊ�Ҷ�ͼƬ
function convertToGS(img){
    //�ж�������Ƿ�֧��canvas
    if(!Modernizr.canvas) return;
    //�洢ԭʼ��ɫ��
    img.color = img.src;
    //�����ҶȰ�
    img.grayscale = createGSCanvas(img);
    //���������Ӧ�¼��ڲ�ɫ��ͻҶȰ�֮���л�
    img.onmouseover = function(){
        this.src = this.color;
    }
    img.onmouseout = function(){
        this.src = this.grayscale;
    }
    img.onmouseout();
}

//�����Ҷ�ͼ
function createGSCanvas(img){
    var canvas = document.createElement("canvas");
    canvas.height = img.height;
    canvas.width = img.width;

    //��ȡ��ά��ͼ�ռ������,������ɫͼƬ
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    //getImageDataֻ�ܲ�����ű�λ��ͬһ�����ͼƬ
    //����ͼƬ��ÿһ�����أ���ÿ�����صĺ������ɷ���ƽ��ֵ���õ���Ӧ�ĻҶ�ֵ
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
    //�ѻҶ����ݷŻػ����Ļ�ͼ����
    ctx.putImageData(c,0,0,0,0, c.width, c.height);
    return canvas.toDataURL();

}
window.onload = function () {
    convertToGS(document.getElementById('avatar'));
}