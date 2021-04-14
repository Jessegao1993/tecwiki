#### 数据结构：链表
##### 链表的特点
**链表**是一种常见的线性结构。它通过指针即可将一组零散的内存块串联起来。每个链表的节点除了存储数据之外，还需要记录链表的下一个节点的地址。

##### 链表的优缺点
- 优点
	修改快。动态扩容，不需要占用过多的内存，能够以较高的效率在任意位置插入或者删除一个节点。
- 缺点
	访问慢。不能随机访问，如果要访问一个元素的话，不能根据索引访问，只能从头开始遍历，找到对应的元素。搜索链表需要O(N)的时间复杂度。
	
##### 链表的种类
- 单向链表
- 双向链表
- 循环链表

##### 常见题型

1. 反转类
- Leetcode 206 Reverse Linked List 【easy】
题意：翻转一个单向链表
```
Input：1->2->3->4->5->NULL
Output：5->4->3->2->1->NULL
```
代码（迭代法）
```
/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let pre = null;
   let curr = head;
   while(curr){
   		let next = curr.next;
   		curr.next = pre;
   		pre = curr;
   		curr = next;
   }
   return pre;
};
```
代码（递归法）
```
/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if(!head||!head.next){
		return head;
	}else{
		let tail = reverseList(head.next);
		head.next.next = head;
		head.next = null;
		return tail;
	}
};
```

- Leetcode 92 Reverse Linked List 【medium】
题意：从m->n的位置翻转链表(1<=m<=n<=length(list))（翻转单链表局部）
```
Input:1->2->3->4->5->NULL, m = 2, n = 4
Output:1->4->3->2->5->NULL
```
	
	
	
	
	
	
	
	
	
	
	
	
	
	
