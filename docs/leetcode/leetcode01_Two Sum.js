//两层循环枚举，时间复杂度n2
var twoSum = function(nums, target) {
    for(let i=0;i<=nums.length-1;i++){
        for(let j=1;j<nums.length-1;j++){
        	if(nums[i]+nums[j]==target){
        		let res = [];
        		return res.push(j).push(i);
        	}
        }
    }
};
//使用哈希表，时间复杂度n
var twoSum = function(nums, target) {
	let map = new Map();
	for(let i=0;i<nums.length;i++){
		if(map.has(target-nums[i])){
			return [map.get(target-nums[i]),i];
		}else{
			map.set(nums[i],i);
		}
	}
}