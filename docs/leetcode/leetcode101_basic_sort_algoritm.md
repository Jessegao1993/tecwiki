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
* * *
#### 2. 快速排序
##### 算法解释
1. 从头开始每次只比较两个相邻的元素，如果它们的顺序错误就把它们交换过来，直到进行到数组末尾。
2. 对于有n个元素的数组进行n-1轮比较，得出最终结果。
##### 性质
1. 时间复杂度：
2. 空间复杂度：
3. 稳定性：
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
* * *
#### 3. 插入排序
##### 算法解释
设第一个元素有序；对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。在从后向前扫描过程中，反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
   1. 从第一个元素开始，该元素可以认为已经被排序；
   2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
   3. 如果该元素（已排序）大于新元素，将该元素移到下(前)一位置；
   4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
   5. 将新元素插入到该位置后；
   6. 重复步骤2~5。
##### 性质
1. 时间复杂度：
2. 空间复杂度：
3. 稳定性：
##### 代码
```
function insertionSort(arr) {
    
        for(let i=1; i<arr.length;i++){//假设第一位有序，从第二位逐次向后扫描排序
          let key = arr[i];//保存需要插入的元素的值
          let j = i-1;
          while(j>=0&&arr[j]>key){//在有序数组中从后向前对比
            arr[j+1] = arr[j];//寻找插入的空间，直到第一个元素
            j--;
          }
            arr[j+1] = key;//找到后进行插入操作
        }
       return arr;
    
}
```
* * *
#### 4.希尔排序
##### 算法解释
使用不断递减直到为一的增量把数列进行分组(不停使用插入排序)，直至从宏观上看起来有序，最后插入排序起来就容易了(无须多次移位或交换)。
##### 性质
##### 代码
```
function shellSort(arr) {
    let len = arr.length; //长度
    let gap = 1
    while (gap < len / 3) {          // 动态定义间隔序列（最大值）
        gap = gap * 3 + 1;  
    }
//上面是设置动态增量算法
//下面是其实是插入排序 和 冒泡排序交换位置
    while (gap >= 1) {
        for (let i = 0; i < len; i++) {      //插入排序
            for (let j = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
                //类似冒泡排序中的交换位置
                let temp =  arr[j-gap]
                arr[j- gap] = arr[j]
                arr[j] = temp
            }
        }
        gap = (gap-1)/3;
    }
    return arr;
}
```
* * *
#### 5. 选择排序
##### 算法解释
选择排序的基本思路是不断找到未排序数组中最小（大）的元素，将其与从数组第一个元素开始的元素进行交换，直到全部排完。设数组首个元素最小，保存其索引，在剩余元素中比较找出小于首个元素的元素，交换位置，然后重复这一步骤直到整个数组排序完成。
##### 性质
##### 代码
```
function selectsort(arr){
  let len = arr.length;
  for(let i=0;i<len-1;i++){
    let min = i;//设第一个数最小，保存其索引
    for(let j=i+1;j<len;j++){//
      if(arr[j]<arr[i]){
        min = j;
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
```
* * *
#### 6. 归并排序
##### 算法解释
算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
-  分解（Divide）：将n个元素分成个含n/2个元素的子序列。
-  解决（Conquer）：用合并排序法对两个子序列递归的排序。
-  合并（Combine）：合并两个已排序的子序列已得到排序结果。
##### 性质
##### 代码
```
function mergesort(arr){
	let len = arr.length;
  if(len<2){//如果数组只有一个或零个元素，直接返回数组
  	return arr;
  }
  
  let mid = Math.floor(len/2);//分治法，以数组中间位置分割
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  
 	return merge(mergesort(left),mergesort(right));//递归
}

function merge(left,right){//归并
	const res = [];
  while(left.length&&right.length){
  	if(left[0]<=right[0]){
    	res.push(left.shift());
    }else{
    	res.push(right.shift());
    }
  }
  while(left.length){
  	res.push(left.shift());
  }
  while(right.length){
  	res.push(right.shift());
  }
  return res;
}
```
* * *
#### 7.堆排序
##### 算法解释
堆是一种特殊的树。
- 堆是一个完全二叉树。完全二叉树：除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。
- 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。也可以说：堆中每个节点的值都大于等于（或者小于等于）其左右子节点的值。
- 对于每个节点的值都大于等于子树中每个节点值的堆，我们叫作大顶堆。对于每个节点的值都小于等于子树中每个节点值的堆，我们叫作小顶堆。

堆排序的原理是先按大（小）顶堆构建堆，其中大（小）顶堆的一个特性是数据将被从大到小（从小到大）取出，将取出的数字按照相反的顺序进行排列，数字就完成了排序。

堆排序步骤：
1. 创建一个堆 H[0……n-1]；
2. 把堆首（最大值）和堆尾互换；
3. 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
4. 重复步骤 2，直到堆的尺寸为 1。

##### 性质
##### 代码
```
function heapsort(arr){
	//初始化堆
  for(let i = Math.floor(arr.length/2-1);i>=0;i--){//基于根结点和所有子树根结点
  	heapify(arr,i,arr.length);
  }
  //堆排序
  for(let i = Math.floor(arr.length-1);i>0;i--){
  	swap(arr,0,i);//交换根结点和最末尾叶子结点
    heapify(arr,0,i);//针对新的根结点，重新维护最大堆的性质，最后一个子结点是已找到的最大值，不用比较
  }
  return arr;
}
//交换函数
function swap(arr,i,j){
	let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//维护堆的性质
function heapify(arr,i,length){
	let temp = arr[i];
  for(let j=2*i+1;j<length;j=j*2+1){
    if(j+1<length&&arr[j]<arr[j+1]){
    	j++;//找到两个子结点中较小的一个，与父结点比较
    }
    if(temp < arr[j]){
    	swap(arr,i,j);
      i=j;
    }else{
    break;
    }
  }
}
```