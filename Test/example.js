/**
 * Created by chuan.she on 2015/9/25.
 */

var beatles = Array("John","Paul","George","Ringo"); //Array()��������ĸ��д
for(var count=0;count < beatles.length;count++)
{
    //alert(beatles[count]);
}

/*����ʽ��������
* ����,��������int myStudentCount
* ���������ԣ������ռ䣺public class DataBaseUser;
* */

function square(num)
{
    var total = num*num;    //�ں����ڲ��ùؼ���var����������Ϊ�ֲ���������Ӱ��ȫ�ֱ�����ֵ
    return total;
}
var total = 50;
var number = square(20);
//alert(total);       //totalû�иı�

var current_date = new Date();  //Date()�����ʹ��
var today = current_date.getDay();
var month = current_date.getMonth();
alert(month);
alert(today);
