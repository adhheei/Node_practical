/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let mult=0
    for(let i=0;i<=nums.length;i++){
        if (original == nums[i]){
            original=original*2
            console.log (original)
        }
    }
};

findFinalValue([5,3,6,1,12])