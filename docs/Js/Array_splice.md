#### 作用：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。
#### 语法：
`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
* 参数 `start`：指定修改的开始位置（从0计数）。
	1. 如果超出了数组的长度，则从数组末尾开始添加内容；
	2. 如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；
* 参数 `deleteCount`(可选)：整数，表示要移除的数组元素的个数。
	1. 如果 deleteCount 被省略，或大于或等于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
	2. 如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
* 参数 `item1,item2...`(可选)：要添加进数组的元素,从start 位置开始。
#### 示例：
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
#### 特性：此方法会改变原数组。

#### leetcode中的应用：

1. [[26] 有序数组去重 Remove Duplicates From Sorted Array](leetcode/Array问题.md)

* * *