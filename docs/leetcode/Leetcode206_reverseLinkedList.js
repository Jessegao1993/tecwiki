
//反转单链表


// 迭代法
let reverseList = function(head){
	let prev = null
	let curr = head;
	while(curr){
		let next = curr.next;
		curr.next = prev;
		prev = curr;//prev指针后移一位
		curr = next;//curr指针后移一位
	}
}
//递归法
let reverseList = function(head){
	
}