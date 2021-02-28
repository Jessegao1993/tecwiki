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
#### 81
##### 题目描述
一个原本增序的数组被首尾相连后按某个位置断开(如 [1,2,2,3,4,5] → [2,3,4,5,1,2]，在第一 位和第二位断开)，我们称其为旋转数组。给定一个值，判断这个值是否存在于这个为旋转数组中。
##### 输入输出样例
输入是一个数组和一个值，输出是一个布尔值，表示数组中是否存在该值。
```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```
##### 题解
即使数组被旋转过，我们仍然可以利用这个数组的递增性，使用二分查找。对于当前的中点， 如果它指向的值小于等于右端，那么说明右区间是排好序的;反之，那么说明左区间是排好序的。 如果目标值位于排好序的区间内，我们可以对这个区间继续二分查找;反之，我们对于另一半区 间继续二分查找。
注意，因为数组存在重复数字，如果中点和左端的数字相同，我们并不能确定是左区间全部 相同，还是右区间完全相同。在这种情况下，我们可以简单地将左端点右移一位，然后继续进行 二分查找。
##### 代码
```
var search = function(nums, target) {
  let start = 0;
  let end = nums.length-1;
  while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(target == nums[mid]){
      return true;
    }
    if(nums[end] == nums[mid]){//如果不能判断哪个区间是增序
        --end;
      }else if(nums[start]<=nums[mid]){//左有序
        if(target>=nums[start]&&target<nums[mid]){
            end = mid - 1;//折半
        }else{
            start = mid + 1;
        }
      }else{//右有序
         if(target>nums[mid]&&target<=nums[end]){
            start = mid + 1;//折半
        }else{
            end = mid - 1;
        }
      } 
  }  
  return false;
};
```