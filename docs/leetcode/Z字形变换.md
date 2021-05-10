### Z字形变换(leetcode 6)
#### 题目要求：将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下；之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
```
L   C   I   R
E T O E S I I G
E   D   H   N
```
#### 示例：
```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"

解释:
L     D     R
E   O E   I I
E C   I H   N
T     S     G
```
#### 思路：按行打印，所以只需要存储每行的数据，就设置一个numRows为行数的数组，根据 numRows 的大小来回进行放置即可（即从0到n-1，再从n-1到0）

#### 代码：

```
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s,numRows){
  if(s.length<numRows||numRows===1){
    return s;
  }

  let rows = [];
  let converted = '';
  let reverse = false;
  let count = 0;

  for(let i=0;i<numRows;i++){
    rows[i]='';
  }

  for(let j=0;j<s.length;j++){
    rows[count]+=s[j];
    reverse ? count--: count++;
    if(count ===0 || count ===numRows-1){
      reverse = !reverse;
    }
  }
 return rows.join('');  
}
```