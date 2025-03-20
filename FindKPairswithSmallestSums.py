import heapq
from typing import List

class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        
        res = []
        visited = set()

        if not nums1 or not nums2 or not k:
            return res
        
        heap = []

        heapq.heappush(heap,(nums1[0]+ nums2[0],0,0));
        visited.add((0,0))

        while k and heap:
            _, i, j = heapq.heappop(heap)
            res.append([nums1[i], nums2[j]])

            if i+1 < len(nums1) and (i+1,j) not in visited:
                heapq.heappush(heap,((nums1[i+1] + nums2[j]),i+1,j))

            if j+1 < len(nums2) and (i,j+1) not in visited:
                heapq.heappush(heap,((nums1[i] + nums2[j+1]),i,j+1))

            k-=1

        
        return res


# Calling the function
if __name__ == "__main__":
    nums1 = [1, 7, 11]
    nums2 = [2, 4, 6]
    k = 3

    solution = Solution()
    result = solution.kSmallestPairs(nums1, nums2, k)
    print(result)