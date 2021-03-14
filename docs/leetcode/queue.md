#### 数据结构：队列
##### 队列的特点
栈是一种遵循后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。
##### 队列需要的方法
- 入栈
- 出栈
- 返回栈顶元素
- 判断空栈
- 清空栈
- 返回栈元素个数
##### js实现一个队列
```
function stack(){
	this.items = [];
	
	this.push = push;//入栈
	this.pop = pop;//出栈
	this.peak = peak;//读取栈顶元素
	this.isEmpty = isEmpty;//判断空栈
	this.clear = clear;//清空栈
	this.size = size;//返回栈元素个数
	this.print = print;//打印栈元素
}
function push(ele){
	this.items.push(ele);
}

function pop(){
	return this.items.pop();
}

function peak(){
	return this.items[this.items.length-1];
}

function isEmpty(){
	return this.items.length===0;
}

function clear(){
	this.items = [];
}

function size(){
	return this.items.length;
}	

function print(){
	console.log(this.items.toString());
}
```