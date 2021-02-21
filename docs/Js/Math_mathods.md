## Math对象的方法
### 1. Math.random( )
#### 作用：`Math.random()` 函数返回一个浮点数,  伪随机数在范围从0到小于1，从0（包括0）往上，但是不包括1（排除1）
#### 应用：
1. 得到一个两数之间的随机数。
	代码：
	```
	function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
	```
2. 得到一个两数之间的随机整数。
	代码：
	```
	function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
	```
3. 得到一个两数之间的随机整数，包括两个数在内。
	代码：
	```
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
	```
* * *
### 2. Math.floor( )
#### 语法：`Math.floor(x)`x为给定数字。
#### 作用：`Math.floor()` 返回小于或等于一个给定数字的最大整数。
* * *
### 3. Math.ceil( )
#### 语法：`Math.ceil(x)`x为给定数字。
#### 作用：`Math.ceil()` 返回大于或等于一个给定数字的最大整数。