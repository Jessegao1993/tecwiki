//合并两个有序链表

//暴力法
var mergeTwoLists = function(l1,l2){
	let mergeList = new ListNode(0);
	let x = mergeList;

	while(l1 && l2){
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

	return mergeList.next;
}

//递归法
var mergeTwoLists = function(l1,l2){
	if (l1==null) {
		return l2;
	}
	if (l2==null) {
		return l1;
	}
	if (l1.val<l2.val) {
		l1.next = mergeTwoLists(l1.next,l2);
		return l1;
	}else{
		l2.next = mergeTwoLists(l2.next,l1);
		return l2;
	}
}

