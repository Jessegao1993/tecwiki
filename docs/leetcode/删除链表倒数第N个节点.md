### 删除链表倒数第N个节点(leetcode 19)

#### 题目要求：给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
#### 示例：
```
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.
```
#### 思路：删除倒数第N个元素，只要找到倒数第N个元素就可以了，只需要设置两个指针变量，中间间隔N-1元素。当后面的指针遍历完所有元素指向nil时，前面的指针就指向了我们要删除的元素。
#### 代码：

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
    while (n-- && fast) {
        fast = fast.next
    }
    
    if (!fast) return slow.next
    
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};
```