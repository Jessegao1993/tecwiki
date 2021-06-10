### 搜素旋转排序数组II(leetcode 81)
#### 题目要求：已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。给你旋转后的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

#### 示例：
```
输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
```
#### 思路：
    二分查找的通用思路：
    1. 定义搜索区间
    2. 根据搜索区间定义循环结束条件
    3. 取中间元素和目标元素做对比（目标元素可能是需要查找的元素，或者是数组的第一个和最后一个元素）
    4. 根据比较的结果收缩区间（二分）

    这题难在去重和如何决定舍弃范围（需要用mid和left比较）
#### 代码：

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return true;
        }
        if(nums[mid]==nums[left]){//去重
            left++;
            continue;
        }

        if(nums[mid]>nums[left]){
            if(nums[left]<=target&&target<nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid]<target&&target<=nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return false;
};
```