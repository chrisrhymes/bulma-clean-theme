---
layout: page
title: Fenwick Trees
menubar: menu_notebooks
categories: [data-structures]
show_sidebar: false
toc: true
---

<!---
# Fenwick Tree
--->

## Sources
1. [https://www.youtube.com/watch?v=kPaJfAUwViY&t=1151s](https://www.youtube.com/watch?v=kPaJfAUwViY&t=1151s)
2. [https://github.com/JonSteinn/Kattis-Solutions/blob/master/src/Movie%20Collection/Python%203/main.py](https://github.com/JonSteinn/Kattis-Solutions/blob/master/src/Movie%20Collection/Python%203/main.py)
3. [https://www.hrwhisper.me/leetcode-range-sum-query-mutable/](https://www.hrwhisper.me/leetcode-range-sum-query-mutable/)
4. [https://leetcode.com/problems/range-sum-query-mutable/solutions/75842/my-python-solution-using-fenwick-tree-208ms/](https://leetcode.com/problems/range-sum-query-mutable/solutions/75842/my-python-solution-using-fenwick-tree-208ms/)

## Problems
1. [https://open.kattis.com/problems/moviecollection](https://open.kattis.com/problems/moviecollection)
2. [https://leetcode.com/problems/range-sum-query-mutable/description/](https://leetcode.com/problems/range-sum-query-mutable/description/)

## Implementation

Based on source [2] and solution [4].

The Kattis problem (Movie Collection) deals with a variational use of the Fenwick Tree, in which cumulative sum over prefix-sums is calculated. In the more usual use case for the Fenwick Tree, we deal with regular prefix-sums. For that case, we need to support changing elements in the original array. Thus, we change the implementation from source [2].

### Change 1

We change `sum_tree` to `sum_array`.
We save the entire initialization array as `self_nums`.
This means we have now two representations for the array:

1. `self_nums`, which allows us to see array elements in O(1), and also print them.
2. `sum_tree`, which allows us to execute the more efficient fenwick tree algorithm for the calculation of prefix sum from our original array.

### Change 2

We differentiate between two types of changes to the fenwick tree:

- Updates deal with changes that rely on some previous valid state of the array, as they use a valid element array.
- Additions deal with changes that do not require past valid values.

This means that:

- Updates can happen only after a valid state of the entire tree is reached.
- Additions can happen at any state. They do not affect the "normal" presentation of the array.


```python
class FenwickTree:
    def __init__(self, arr):
        self.nums = arr
        self.n = len(arr)
        self.sum_array = [0] * (self.n + 1)
        for i,x in enumerate(arr):
            self.add(i+1, x) 

    def update(self, i, value):  
        self.add(i+1, value - self.nums[i])
        self.nums[i] = value 

    def add(self, i, value):
        while i <= self.n:
            self.sum_array[i] += value
            i += self.lowbit(i)

    def lowbit(self, i):
        return i & -i
            
    def sum(self, i):
        s = 0
        while i > 0:
            s += self.sum_array[i]
            i -= self.lowbit(i) 
        return s
```

### Problems

#### The Kattis problem, [2]


```python
def move_top(x,i,r,ft,index):
    c = ft.sum(index[x]) - 1
    ft.add(index[x], -1)
    index[x] = r - i
    ft.add(index[x], 1)
    return f'{c}'

def test_case(m,r,a):
    ft = FenwickTree([0]*r + [1]*m)
    index = [0]+[r+i+1 for i in range(m)]
    print(' '.join(move_top(x,i,r,ft,index) for i,x in enumerate(a)))

def main(getline = input):
    for _ in range(int(getline())):
        test_case(*map(int, getline().split()), map(int, getline().split()))


# Uncomment and supply input to test.
# if __name__ == "__main__":
#    main()
```
