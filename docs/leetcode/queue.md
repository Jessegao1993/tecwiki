#### 数据结构：队列
##### 队列的特点
**队列**是遵循FIFO（First In First Out，先进先出）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

##### 队列需要的方法
- 入队
- 出队
- 返回队列中第一个元素
- 判断空队列
- 清空队列
- 返回队列元素个数
##### js实现一个队列
```
function queue(){
	this.items = [];

	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.isEmpty = isEmpty;
	this.size = size;
	this.clear = clear;
	this.print = print;
}

function enqueue(ele){
	this.items.push(ele);
}
function dequeue(){
	this.items.shift();
}
function front(){
	return this.items[0];
}
function isEmpty(){
	return this.items.length===0;
}
function size(){
	return this.items.length;
}
function clear(){
	this.items = [];
}
function print(){
	console.log(this.items.toString());
}
```