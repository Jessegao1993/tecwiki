# Leetcode中Array问题

本文档描述leetcode中Array问题使用到的标准内置对象Array的方法。

### [26] 有序数组去重 Remove Duplicates From Sorted Array
#### 要求：在不使用额外空间的情况下删除有序数组中的重复元素。
#### 一种方法：set the first element as a variable. Check from the second element of the array to compare with the former one, if them are equal, run splice method to remove the current one, or set the next element as the "first" one. 
#### 代码：
```
var removeDuplicates = function (nums) {//nums is input array
	let last = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === last) {
			nums.splice(i, 1);
			--i;
			}
		last = nums[i];
	}

return nums.length ;
};
```
#### 使用到的方法：
1. [Array.prototype.splice( );](Js/Array方法.md)