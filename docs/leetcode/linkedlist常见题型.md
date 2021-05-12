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
- 题意：翻转一个单向链表
```
Input：1->2->3->4->5->NULL
Output：5->4->3->2->1->NULL
```
- 代码（迭代法）

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
- 代码（递归法）

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
---
2. 合并类
- Leetcode 21 merge two sorted lists 【easy】
- 题意：合并两个有序链表
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
- 代码（迭代法）

```
/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
 	let mergelist = new ListNode(0);
 	let x = mergelist;
 	
 	while(l1&&l2){
 		if(l1.val>l2.val){
 			x.next = l2;
 			l2 = l2.next;
 		}else{
 			x.next = l1;
 			l1 = l1.next;
 		}
 		x = x.next;
 	}
 	if(l1){
 		x.next = l1;
 	}
 	if(l2){
 		x.next = l2;
 	}
 	return mergelist.next;
 }
```
- 代码（递归法）

```
/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
 	if(!l1){
 		return l2;
 	}
 	if(!l2){
 		return l1;
 	}
 	if(l1.val<l2.val){
 		l1.next = mergeTwoLists(l1.next,l2);
 		return l1;
 	}else{
 		l2.next = mergeTwoLists(l2.next,l1);
 		return l2;
 	}
 }
```
---
3. 环形链表
- Leetcode 141 Linked List Cycle 【easy】
- 题意：判断一个单链表是否存在环。
- 思路：使用快慢指针法。
```
Input : head = [3, 2, 0, -4], pos = 1
Output : true
why：在这个单链表中存在一个环，尾节点指向第二个节点
```
- 代码（快慢指针）

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	let fast = head;
	let slow = head;
	while(fast&&fast.next.next){
		fast = fast.next.next;
		slow = slow.next;
		if(fast==slow){
			return true;
		}
	}
	return false;
}
```
---
4. 拆分链表
- Leetcode 86 Partition List 【medium】
- 题意：给定一个链表以及一个目标值，把小于该目标值的所有节点都移至链表的前端，大于或等于目标值的节点移至链表的尾端，同时要保持这两部分在原先链表中的相对位置。
- 思路：建立一个链表头less和链表头greater，遍历链表head，如果head.val<x，放入less中，如果head.val>=x放入greater中。最后合并less和greater。
- 代码

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	let node = new ListNode(0),less = node, node2 = new ListNode(0), greater = node2;
	
	while(head){
		if(head.val<x){
			less.next = head;
			less = less.next
		}else{
			greater.next = head;
			greater = greater.next
		}
		head = head.next;
	}
	
	less.next = node2.next;
	greater.next = null;
	
	return node.next;
}
```
---
5. 排序链表
- Leetcode 148 Sort List【medium】
- 题意：在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
- 思路：使用归并排序的思路，把链表分成一个一个的两段，然后合并这两段链表。找到链表的中点，以中点为分界，将链表拆分成两个子链表。寻找链表的中点可以使用快慢指针的做法，快指针每次移动 2 步，慢指针每次移动 1 步，当快指针到达链表末尾时，慢指针指向的链表节点即为链表的中点。对两个子链表分别排序。将两个排序后的子链表合并，得到完整的排序后的链表。
```
Input: 4->2->1->3
Output: 1->2->3->4
```

- 代码：

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if(head == null || head.next == null){
    return head;
  }

  let slow = head;
  let fast = head;
  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(mid);
  
  const dummy = new ListNode(0);
  let h = dummy;

  while(left&&right){
    if(left.val<right.val){
        h.next = left;
        left = left.next;
    }else{
        h.next = right;
        right = right.next;
    }
    h = h.next;
  }

  if(left){
    h.next = left;
  }
  if(right){
    h.next = right;
  }

  return dummy.next;
};
```
---
6. 删除类
- Leetcode 19 Remove Nth Node From End of List 【Medium】
- 题意：删除链表中倒数第n个节点。
```
Given a list: 1->2->3->4->5, and n = 2.
删除链表中导数第二个节点，变成1->2->3->5.
```
- 思路：双指针法 。设置两个指针fast和slow。 fast指针先向前移动n个节点，然后fast和slow同时开始移动，当fast.next == null时，slow节点指向的就是需要删除的节点前面的一个节点，将其指向.next.next即可
- 代码：

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    
    while(n--){
    	fast = fast.next;
    }
    while(fast&&fast.next){
    	slow = slow.next;
    	fast = fast.next;
    }
    
    if(!fast){
    	head = head.next;
    }else{
    	slow.next = slow.next.next;
    }
    
    

    return head;
};
```