## 贪心算法
### 算法解释
贪心算法保证每次操作都是局部最优的，可以保证推导出最后得到的结果是全局最优的。
#### 用处
- 分配问题
- 区间问题
### Leetcode相关题目
#### 455
##### 题目描述
有一群孩子和一堆饼干，每个孩子有一个饥饿度，每个饼干都有一个大小。每个孩子只能吃
最多一个饼干，且只有饼干的大小大于孩子的饥饿度时，这个孩子才能吃饱。求解最多有多少孩
子可以吃饱。
##### 输入输出样例
输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数
量。
```
Input: [1,2], [1,2,3]
Output: 2
```
##### 题解
因为饥饿度最小的孩子最容易吃饱，所以我们先考虑这个孩子。为了尽量使得剩下的饼干可
以满足饥饿度更大的孩子，所以我们应该把大于等于这个孩子饥饿度的、且大小最小的饼干给这
个孩子。满足了这个孩子之后，我们采取同样的策略，考虑剩下孩子里饥饿度最小的孩子，直到
没有满足条件的饼干存在。
##### 代码
```
var findContentChildren = function(g, s) {//g数组代表孩子，s数组代表饼干
    g.sort(function(a, b) {return a-b;});//孩子饥饿度从小到大排序
    s.sort(function(a, b) {return a-b;});//饼干大小从小到大排序
    
    let num = 0;//输出:最多孩子吃饱的数量
    let pos = 0;
    for(let i = 0; i < g.length; i++) {
        for(let j = pos; j < s.length; j++) {
            if(s[j] >= g[i]) {
                num++;
                pos = j + 1;
                break;
            }
        }
    }
    return num;
};
```
* * *
#### 605
##### 题目描述
有一个已经种了一些花的花坛，现在想再种一些花进去，要求是相邻地块不能种花。判断能否满足想要新种入花的数量。
##### 输入输出样例
输入一个只包含0和1元素的数组代表花坛，0表示当前地块未种花，1表示已种花；输入一个整数n代表想种入花的数量，输出一个布尔值判断能否满足条件。
```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```
##### 题解
种花问题的贪心局部最优解为：从花坛首第二位开始看，如果可以种就种一朵，然后往后跳一位继续看，直到看完整个花坛。

##### 代码
```
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0]//因为花坛首尾可能存在花，所以在花坛首尾各加一个零，不影响规则。
    for(let i = 1; i < flowerbed.length - 1 && n; i++) //从花坛第二位开始搜索到花坛倒数第二位，并且要满足剩余有花
    {
         if(flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] === 0)//若有空位
            n--, i++ //种一朵，找下一个可种的位置，直到搜索完成
    }
    return n === 0
}
```
* * *
#### 122
##### 题目描述
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
##### 输入输出样例
输入一个数组代表每天股价，输出一个整数代表最大利润。
```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```
##### 题解
贪心算法，一次遍历，只要今天价格小于明天价格就在今天买入然后明天卖出，时间复杂度O(n)
##### 代码
```
var maxProfit = function(prices) {
     let res = 0;
    for(let i=0;i<prices.length;i++){
      if(prices[i+1]>prices[i]){
        res = res + (prices[i+1]-prices[i])
      }
    }
    return res;
};
```
* * *