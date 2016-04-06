/**
 * Created by chuan.she on 2015/9/25.
 */

var beatles = Array("John","Paul","George","Ringo"); //Array()对象首字母大写
for(var count=0;count < beatles.length;count++)
{
    //alert(beatles[count]);
}

/*骆驼式命名法：
* 变量,函数名：int myStudentCount
* 类名，属性，命名空间：public class DataBaseUser;
* */

function square(num)
{
    var total = num*num;    //在函数内部用关键字var将变量声明为局部变量，不影响全局变量的值
    return total;
}
var total = 50;
var number = square(20);
//alert(total);       //total没有改变

var current_date = new Date();  //Date()对象的使用
var today = current_date.getDay();
var month = current_date.getMonth();
alert(month);
alert(today);
