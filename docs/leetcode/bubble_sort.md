## 基本排序算法
#### 1. 冒泡排序
##### 算法解释
1. 从头开始每次只比较两个相邻的元素，如果它们的顺序错误就把它们交换过来，直到进行到数组末尾。
2. 对于有n个元素的数组进行n-1轮比较，得出最终结果。
##### 性质
1. 时间复杂度：最好O(n)   最坏  O(n2)
2. 空间复杂度：O(1)  （只需要temp变量占用内存空间）
3. 稳定性：稳定
##### 代码
```
function bubble_sort(arr){//从小到大
for(let j=0; j<arr.length-1;j++){
  for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp;
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
}  
}
```
##### Leetcode相关题目
* * *
#### 2. 快速排序
##### 算法解释
1. 从头开始每次只比较两个相邻的元素，如果它们的顺序错误就把它们交换过来，直到进行到数组末尾。
2. 对于有n个元素的数组进行n-1轮比较，得出最终结果。
##### 性质
1. 时间复杂度：最好O(n)   最坏  O(n2)
2. 空间复杂度：O(1)  （只需要temp变量占用内存空间）
3. 稳定性：稳定
4. 
##### 代码
```
function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除,剩下的和基准作比较
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    const left=[];
    const right=[];

    //比基准小的放在left，比基准大的放在right
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    //递归
    // return quickSort(left).concat([pivot],quickSort(right));
        
    //或者用es6的三点扩展运算符 做连接
    return [...quickSort(left), pivot, ...quickSort(right)]
}  
```
