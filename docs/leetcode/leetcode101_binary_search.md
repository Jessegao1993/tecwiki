## 二分查找
### 算法解释
二分查找也常被称为二分法或者折半查找，每次查找时通过将待查找区间分成两部分并只取 一部分继续查找，将查找的复杂度大大减少。对于一个长度为 *O*(*n*) 的数组，二分查找的时间复 杂度为 *O*(log *n*)。
#### 用处
- 求开方
- 查找区间
- 旋转数组查找数字

### Leetcode相关题目
#### 69
##### 题目描述
给定一个非负整数，求它的开方，向下取整。
##### 输入输出样例
输入一个整数，输出一个整数。
```
Input: 8
Output: 2
```
##### 题解
可以对[0, *a*] 区间使用二分法找到 *f* (*x*) = 0 的解。

##### 代码
```
var mySqrt = function(x) {
  if(x == 0){
    return x;
  }  
  let l = 1;
  let r = x;
  let mid,sqrt;
  while(l<=r){
    mid = Math.floor((l+r)/2);
    sqrt = x/mid;
    if(sqrt==mid){
      return mid;
    }else if(mid>sqrt){
      r = mid-1;
    }else{
      l = mid+1;
    }
  }
  return r;
};
```
* * *
