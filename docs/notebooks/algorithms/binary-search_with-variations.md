---
layout: page
title: Binary Search with Variations
categories: [algorithms]
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Binary Search with Variations
--->

## Sources
1. [https://www.youtube.com/watch?v=GU7DpgHINWQ&t=767s](https://www.youtube.com/watch?v=GU7DpgHINWQ&t=767s)
2. [https://www.geeksforgeeks.org/namedtuple-in-python/](https://www.geeksforgeeks.org/namedtuple-in-python/)
3. [https://realpython.com/python-assert-statement/](https://realpython.com/python-assert-statement/)
4. [https://www.youtube.com/watch?v=P9OSkJOVf6U&t=185s](https://www.youtube.com/watch?v=P9OSkJOVf6U&t=185s) (for the use of `assert`)
5. [https://stackoverflow.com/questions/18591778/how-to-pass-an-operator-to-a-python-function](https://stackoverflow.com/questions/18591778/how-to-pass-an-operator-to-a-python-function)


## Imports



```python
import math
import collections
import operator

TestCaseForArray = collections.namedtuple('TestCaseForArray', ['array', 'target'])
TestCaseForIntegers = collections.namedtuple('TestCaseForIntegers', ['left', 'right', 'target'])
```

## Considerations in binary search
1. Search space: array vs. integers?
2. Function on elements: Are we using the identity function or another function for the comparison?
3. Variation: Are we searching for an equality or are we searching for the first element to satisfy something. 

Notice that it is optional to use a predicate instead of the operator to direct the next side of search: We can insert any logic that fits there into the the function to be applied on elements, from consideration 2.

## Normal version
We start with a sorted array. We look for an element in that array. Our predicate function is equality.

### Using an identity function on elements


```python
def binary_search_index(array, target):
    L = 0
    R = len(array) - 1
    while L <= R:
        mid = L + (R - L) // 2
        if array[mid] == target:
            return mid
        if array[mid] < target:
            L = mid + 1
        else:
            R = mid - 1
    return -1
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=4)

index = binary_search_index(test1.array, test1.target)

assert test1.array[index] == test1.target
```


```python
def binary_search_index(array, target, function = lambda x: x):
    L = 0
    R = len(array) - 1
    while L <= R:
        mid = L + (R - L) // 2
        if function(array[mid]) == target:
            return mid
        if function(array[mid]) < target:
            L = mid + 1
        else:
            R = mid - 1
    return -1
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=4)

index = binary_search_index(test1.array, test1.target)

assert test1.array[index] == test1.target
```

### Using another function on elements


```python
def binary_search_index_with_function(array, target, function = lambda x: x):
    L = 0
    R = len(array) - 1
    while L <= R:
        mid = L + (R - L) // 2
        if function(array[mid]) == target:
            return mid
        if function(array[mid]) < target:
            L = mid + 1
        else:
            R = mid - 1
    return -1
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=4)

# We are looking for a number `x` such that `x^2 == test1.target`

index = binary_search_index_with_function(test1.array, test1.target, lambda x : x**2)

assert test1.array[index] == math.sqrt(test1.target)
```

### Dealing with integers
If we are dealing with a large but continuous search space such as a specific integer, our binary search will not consider indices, but integers.


```python
def binary_search_integers_with_function(left, right, target, function = lambda x: x):
    L = left
    R = right
    while L <= R:
        mid = L + (R - L) // 2
        if function(mid) == target:
            return mid
        if function(mid) < target:
            L = mid + 1
        else:
            R = mid - 1
    return -1
```


```python
test1 = TestCaseForIntegers(left = 1, right = 10**5, target=121)

# We are searching for the integer whose sequare equals target

result = binary_search_integers_with_function(test1.left, test1.right, test1.target, lambda x : x**2)

assert result ** 2 == test1.target
```

## Variation 1
Finding first elemet in sorted array, such that it is the first to satisfy a given predicate.

### Using an identity function on elements

#### Without predicate


```python
def binary_search_index(array, target):
    L = 0
    R = len(array) - 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if array[mid] >= target: 
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

# We are looking for the first number `x` such that `x >= test1.target`

index = binary_search_index(test1.array, test1.target)

assert test1.array[index] >= test1.target and (index == 0 or not test1.array[index-1] >= test1.target)
```

#### With predicate
This is redundant. We can insert the logic into the function operating on elements.


```python
def binary_search_index_with_predicate(array, target, predicate):
    L = 0
    R = len(array) - 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if predicate(array[mid],target): # This is redundant. Better to just use normal operators
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

# We are looking for the first number `x` such that `x >= test1.target`

index = binary_search_index_with_predicate(test1.array, test1.target, operator.ge)

assert test1.array[index] >= test1.target and (index == 0 or not test1.array[index-1] >= test1.target)
```

### Using another function on elements

#### Without predicate


```python
def binary_search_index_with_function(array, target, function = lambda x : x):
    L = 0
    R = len(array) - 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if function(array[mid]) >= target:
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

index = binary_search_index_with_function(test1.array, test1.target)

assert test1.array[index] >= test1.target
```


```python
test2 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

# We are looking for the first number `x` such that `x**2 >= test1.target`

index = binary_search_index_with_function(test2.array, test2.target, lambda x : x**2)

assert test2.array[index] >= math.sqrt(test2.target) and (index == 0 or not test2.array[index-1] >= math.sqrt(test2.target))
```

#### With predicate


```python
def binary_search_index_with_predicate_function(array, target, predicate, function = lambda x : x):
    L = 0
    R = len(array) - 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if predicate(function(array[mid]), target):
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

index = binary_search_index_with_predicate_function(test1.array, test1.target, operator.ge)

assert test1.array[index] >= test1.target
```


```python
test2 = TestCaseForArray(array=[2,3,4,5,6,7,12], target=6)

# We are looking for the first number `x` such that `x**2 >= test1.target`

index = binary_search_index_with_predicate_function(test2.array, test2.target, operator.ge, lambda x : x**2)

assert test2.array[index] >= math.sqrt(test2.target) and (index == 0 or not test2.array[index-1] >= math.sqrt(test2.target))
```

### Dealing with integers
If we are dealing with a large but continuous search space such as a specific integer, our binary search will not consider indices, but integers.

#### Without predicate


```python
def binary_search_integers_with_function(left, right, target, function = lambda x : x):
    L = left
    R = right + 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if function(mid) >= target:
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForIntegers(left = 1, right = 10**5, target=678)

# We are searching for the first integer whose sequare is greater-equal than target

result = binary_search_integers_with_function(test1.left, test1.right, test1.target, lambda x : x**2)

assert result ** 2 >= test1.target and (result == test1.left or not (result - 1) ** 2 >= test1.target)
```

#### With predicate


```python
def binary_search_integers_with_predicate_function(left, right, target, predicate, function = lambda x : x):
    L = left
    R = right + 1
    ans = -1
    while L <= R:
        mid = L + (R - L) // 2
        if predicate(function(mid), target):
            ans = mid
            R = mid - 1
        else:
            L = mid + 1
    return ans
```


```python
test1 = TestCaseForIntegers(left = 1, right = 10**5, target=678)

# We are searching for the first integer whose sequare is greater-equal than target

result = binary_search_integers_with_predicate_function(test1.left, test1.right, test1.target, operator.ge, lambda x : x**2)

assert result ** 2 >= test1.target and (result == test1.left or not (result - 1) ** 2 >= test1.target)
```
