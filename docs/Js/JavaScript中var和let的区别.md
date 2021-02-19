# JavaScrip中var和let的区别

## let没有变量提升

使用var时存在变量提升现象，即不论在代码任何地方声明var变量，在执行时都等同于在顶部声明，并先于代码运行。
如下写法并不会报错：

```
bla = 2;
var bla;
```
而使用let声明变量不存在变量提升。

## let变量不能重复声明
let不允许在相同作用域内，重复声明同一个变量。否则报错

## let变量只在块级作用域内有效
在ES6之前，我们都是用var来声明变量，而且JS只有函数作用域和全局作用域，没有块级作用域，所以`{}`限定不了var声明变量的访问范围。
```
{ 
  var i = 9;
} 
console.log(i);  // 9
```
ES6新增的let，可以声明块级作用域的变量。
```
{ 
  let i = 9;     // i变量只在 花括号内有效！！！
} 
console.log(i);  // Uncaught ReferenceError: i is not defined
```

