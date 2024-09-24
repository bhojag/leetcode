# Title: Two Sum
# Submission ID: 1396709105
# Status: Accepted
# Date: September 20, 2024 at 11:24:40 PM GMT+5:30

function twoSum(nums: number[], target: number): number[] {
    const mem: { [key: number]: number } = {};  // Object to map number to its index
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const x = target - nums[i];
        if (x in mem) {
            return [mem[x], i];
        }
        mem[nums[i]] = i;
    }
    return [];
}
