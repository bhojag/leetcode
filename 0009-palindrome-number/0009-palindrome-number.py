class Solution:
    def isPalindrome(self, x: int) -> bool:
        # A negative number cannot be a palindrome
        if x < 0:
            return False

        # Numbers that end with 0 (except 0 itself) are not palindromes
        if x % 10 == 0 and x != 0:
            return False

        reversed_half = 0
        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10

        # Check if the first half equals the reversed second half
        # For odd-length numbers, we can remove the middle digit by reversed_half // 10
        return x == reversed_half or x == reversed_half // 10
