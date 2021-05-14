### 实现字符串Sunday匹配(leetcode 28)
#### 题目要求：实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
#### 示例：
```
输入: haystack = "hello", needle = "ll"
输出: 2
```
#### 思路：使用Sunday算法。算法如下：
- 从主串和模式串的首位开始比较，记   
	- 主串 S
	- 模式串 P
	- 主串长度 slen
	- 模式串长度 plen
	- 主串位置指针 i
	- 模式串位置指针 j
	- 每次重新匹配时，模式串尾部对应主串位置的下一位 m
- 判断 S[i] 与 P[j] 是否相等
	- 如果相等
		- 判断 j 与 plen-1 是否相等，如果相等则表示 表示模式串匹配完成，直接返回 i - j 即可
		- 如果不相等，则继续比较下一位，即 i++;j++;
	- 如果不相等
		- 查看 S[m] 字符是否存在于 P 中，如果存在，将 P 移至两字符对应的位置上
		- 如果不存在，则移至 S[m] 的后一位
- 如果移动后， m > slen ，说明 S 已经遍历一遍，仍然没有找到目标，模式串 匹配失败。

#### 代码：

```
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle.length===0){
    	return 0;
    }

    const slen = haystack.length;
    const plen = needle.length;

    let i=0;//主串指针
    let j=0;//模式串指针
    let m = plen;//重新匹配时模式串对应主串的下一位
    let k;//失配时模式串回溯位置指针

    while(i<slen){
    	//失配
    	if(haystack[i]!=needle[j]){
    		//查看p中是否包含m位置字符
    		for(k=plen-1;k>=0;k--){
    			if(needle[k]==haystack[m]){
    				break;
    			}
    		}

    		i = m-k;//确认移动位置
    		j = 0;
    		m = i+plen;//移动模式串后更新m

    		//失配，终止条件
    		if(m>slen){
    			return -1;
    		}
    	}else{
    		//已扫描完模式串，匹配完成
    		if(j == plen-1){
    			return i-j;
    		}

    		i++;
    		j++;

    	}

    }

    return -1;
};
```