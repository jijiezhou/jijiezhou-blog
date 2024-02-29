# Two Sum

### Description

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

- `2 <= nums.length <= 104`
- `109 <= nums[i] <= 109`
- `109 <= target <= 109`
- **Only one valid answer exists.**

### Idea

- **为什么想到用哈希表 + 哈希表为什么用map** : 想到使用Hash Table：我们不仅要知道元素有没有遍历过，还有知道这个元素对应的下标，**需要使用 <key, value> 结构来存放，key来存元素，value来存下标，那么使用map正合适**
- **为什么不建议用Two Pointers中的左右指针**
    1. 因为本题需要返回的是坐标，而用two pointers需要sorting，index就会改变，而本题需要的是原本的index，所以index不能改变
    2. 但是其实可以sorting时用hashmap保存value和对应index信息

### Hint

- **map的key存放元素值，value存放下标**
- 第二次做体会
    - 第二次做这道题是重启leetcode刷题做grind 75的第一道题，所以非常生疏，一开始想到用two pointers [为什么不能用理由如上] ，然后想到要存储原始下标那么就用hashmap
    - Java for 循环执行顺序
    
    [Java for循环的语法和执行顺序 - 楼兰胡杨 - 博客园](https://www.cnblogs.com/east7/p/11665148.html)
    
- Two-pass HashTable
    - 第一遍只存储所有的nums[i]和对应index
    - 第二遍查找是否存在target - nums[i]
    - 需要考虑一个值不能够重复使用的情况
- 如何将two-pass —> one-pass
    
    可以先查看是否存在target - nums[i]，然后再存储<nums[i], i>
    

![Untitled](Two%20Sum%208a76ee2396374c13b81eff2bb8ca2d98/Untitled.png)

[力扣](https://leetcode.cn/problems/two-sum/solution/dong-hua-cong-liang-shu-zhi-he-zhong-wo-0yvmj/)

### Answer

```java
//1. Brute Force
class Solution{
    public int[] twoSum(int[] nums, int target){
        for (int i = 0; i < nums.length - 1; i++){
            for (int j = i + 1; j < nums.length; j++){
                if (nums[i] + nums[j] == target)
                    return new int[]{i, j};
            }
        }
        return null;
    }
}

//2. Two-pass Hash Table
class Solution{
    public int[] twoSum(int[] nums, int target){
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++){
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++){
            int need = target - nums[i];
            if (map.containsKey(need) && map.get(need) != i)
                return new int[]{i, map.get(need)};
        }
        return null;
    }
}

//3. One-pass Hash Table
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++){
            int need = target - nums[i];
            if (map.containsKey(need)){
                return new int[]{i, map.get(need)};
            }
            map.put(nums[i], i);
        }
        return null;
    }
}
```

### Complexity

1. time complexity：O(n)
2. space complexity：O(n)