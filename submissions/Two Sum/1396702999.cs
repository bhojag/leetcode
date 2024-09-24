# Title: Two Sum
# Submission ID: 1396702999
# Status: Accepted
# Date: September 20, 2024 at 11:18:42 PM GMT+5:30

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
      Dictionary<int, int> mem = new Dictionary<int, int>();
        int n = nums.Length;

        for (int i = 0; i < n; i++)
        {
            int x = target - nums[i];
            if (mem.ContainsKey(x))
            {
                return new int[] { mem[x], i };
            }
            mem[nums[i]] = i;
        }
        return new int[0]; // return an empty array if no solution is found
    }
}