---
layout: page
title: Flatenning lists
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Flattening lists: The General Case
--->

Flattening nested iterable containers.

## Sources
1. [https://docs.python.org/3/library/itertools.html#itertools.chain]()
2. [https://stackoverflow.com/questions/2158395/flatten-an-irregular-arbitrarily-nested-list-of-lists](https://stackoverflow.com/questions/2158395/flatten-an-irregular-arbitrarily-nested-list-of-lists)
3. [http://simeonvisser.com/posts/python-3-using-yield-from-in-generators-part-1.html](http://simeonvisser.com/posts/python-3-using-yield-from-in-generators-part-1.html)
4. [https://docs.python.org/3/library/collections.abc.html](https://docs.python.org/3/library/collections.abc.html)
5. [https://stackoverflow.com/questions/120886/python-idiom-to-chain-flatten-an-infinite-iterable-of-finite-iterables](https://stackoverflow.com/questions/120886/python-idiom-to-chain-flatten-an-infinite-iterable-of-finite-iterables)
6. [https://iteration-utilities.readthedocs.io/en/latest/index.html](https://iteration-utilities.readthedocs.io/en/latest/index.html)
7. [https://stackoverflow.com/questions/406121/flattening-a-shallow-list-in-python](https://stackoverflow.com/questions/406121/flattening-a-shallow-list-in-python)

## The `itertools` builtin module
The `itertools` python module takes care of this. Two methods help (Explanations for the methods are taken from the official Python docs, see source 1):

1. `chain()`: Make an iterator that returns elements from the first iterable until it is exhausted, then proceeds to the next iterable, until all of the iterables are exhausted
2. `chain.from_iterable()`: Alternate constructor for chain(). Gets chained inputs from a single iterable argument that is evaluated lazily.

### Example for `itertools.chain()`


```python
import itertools

iterable1 = 'abc'
iterable2 = 'def'
iterables = [iterable1, iterable2]

target = list(itertools.chain(*iterables))

print(target)
```

    ['a', 'b', 'c', 'd', 'e', 'f']
    


```python
print(list(itertools.chain(iterables)))
```

    ['abc', 'def']
    

### Example for `itertools.chain.from_iterable()`


```python
import itertools

iterable1 = 'abc'
iterable2 = 'def'
iterables = [iterable1, iterable2]

target = list(itertools.chain.from_iterable(iterables))

print(target)
```

    ['a', 'b', 'c', 'd', 'e', 'f']
    

##### Notice 1
The last example hints towards the equivalence of `itertools.chain.from_iterable(iterables)` and `itertools.chain(*iterables)`

### Considering `itertools.chain.()` and `itertools.chain.from_iterable()`


```python
import itertools

iterable1 = 'abc'
iterable2 = 'def'
iterables1 = [iterable1, iterable2]
iterables2 = [iterable1, iterable2]
iterables3 = [iterables1, iterables2]

print(f'iterables3 is {iterables3}')

target = list(itertools.chain.from_iterable(iterables3))

print(target)
```

    iterables3 is [['abc', 'def'], ['abc', 'def']]
    ['abc', 'def', 'abc', 'def']
    


```python
import itertools

iterable1 = 'abc'
iterable2 = 'def'
iterables1 = [iterable1, iterable2]
iterables2 = [iterable1, iterable2]
iterables3 = [iterables1, iterables2]

print(f'iterables3 is {iterables3}')

target = list(itertools.chain(*iterables3))

print(target)
```

    iterables3 is [['abc', 'def'], ['abc', 'def']]
    ['abc', 'def', 'abc', 'def']
    

##### Notice 2
This seems to strengthen the equivalence of `itertools.chain.from_iterable(iterables)` and `itertools.chain(*iterables)`

##### Insight 1
It seems that `itertools.chain.from_iterable(iterables)` and `itertools.chain(*iterables)` both flatten exactly one level off an iterable.

What happens when we want to use flattening all the way to the bottom?

## Flattening to the bottom

### Problem description

We have:
1. A list of iterables.
2. A function that takes this list and flattens it 1 time.
3. We can still have iterables as output from step 2.

We want to find out how to gain flattening until no iterables are present anymore. In other words, we require a full decomposition of a possibly hierarchical iterable container.

This problem can be generalized:
* Say we have a given function that we know works `1` time.
* We want it to work an arbitrary number of times

### Depth and Homogeneity
* There's a concept of "depth" to the number of times the function can execute: If the function flattens one level of an iterable, the resulting components might not be iterables. Such is the case with the iterable `[1,2,3]` - After flattening, we get `1 2 3`. I don't think this applies to strings in Python3, since in Python3, single characters are considered strings.
* We do not assume homogeneity. In other words, if the iterable has a member which is an iterable of depth `1` (as in `[1,2,3]`), then all members in the iterable are also iterable of depth `1`. This makes the encompassing iterable an iterable of depth `2`. We do not assume this as this seems to be redundant from the found solutions. Using list comprehensions, as discussed in source [7] only works for one level.



##### Checking Distinction
Is there a difference between a single character and a string in Python3?


```python
# No distinction between single character strings and strings in Pyton3
# Both are strings, and hence - iterables.

depth_1_iterable_1 = "abc"
target = list(itertools.chain(*depth_1_iterable_1))

print(target)

depth_1_iterable_2 = "a"
target = list(itertools.chain(depth_1_iterable_2))

print(target)

```

    ['a', 'b', 'c']
    ['a']
    


```python
# No distinction between single character strings and strings in Pyton3
# Both are strings, and hence - iterable.

depth_1_iterable_1 = [0,1,2]
target = list(itertools.chain(depth_1_iterable_1))

print(target)

depth_1_iterable_2 = 0

# The following line results in an error: `TypeError: 'int' object is not iterable`
# target = list(itertools.chain(depth_1_iterable_2))

# print(target)
```

    [0, 1, 2]
    

### Solution

This is described in sources [2], [3], [4]


```python
from collections.abc import Iterable

def flatten(xs):
    for x in xs:
        if isinstance(x, Iterable) and not isinstance(x, (str, bytes)):
            yield from flatten(x)
        else:
            yield x
```


```python
sequence = [[[1, 2, 3], [4, 5]], 6]
target = list(flatten(sequence))

print(target)
```

    [1, 2, 3, 4, 5, 6]
    


```python
sequence = [[["abc", "b", 3], [4, 5]], 6]
target = list(flatten(sequence))

print(target)
```

    ['abc', 'b', 3, 4, 5, 6]
    

##### Notice 3
Here we still have `"abc"` as a single element.

We can try and decompose it as well:

##### Attempt 1


```python
from collections.abc import Iterable
import itertools

def flatten_with_str(xs):
    for x in xs:
        if isinstance(x, Iterable):
            yield from flatten_with_str(x)
        else:
            yield x
```


```python
sequence1 = "abc"
sequence2 = ["abc"]
sequence3 = [[["abc", "b", 3], [4, 5]], 6]

# Will cause crash

# target1 = list(flatten_with_str(sequence1))
# target2 = list(flatten_with_str(sequence2))
# target3 = list(flatten_with_str(sequence)) 

# print(target1)
# print(target2)
# print(target3)
```

##### Notice 4
These cause the Kernel to crash. 

I think this is because of never ending recursion: A single character is still as string and thus still an iterable

##### Attempt 2


```python
from collections.abc import Iterable
import itertools

def flatten_with_str(xs):
    for x in xs:
        if isinstance(x, Iterable):
            if isinstance(x, (str, bytes)) and len(x) == 1:
                yield x
            else:
                yield from flatten_with_str(x)
        else:
            yield x
```


```python
sequence1 = "abc"
sequence2 = ["abc"]
sequence3 = [[["abc", "b", 3], [4, 5]], 6]

target1 = list(flatten_with_str(sequence1))
target2 = list(flatten_with_str(sequence2))
target3 = list(flatten_with_str(sequence3))

print(target1)
print(target2)
print(target3)
```

    ['a', 'b', 'c']
    ['a', 'b', 'c']
    ['a', 'b', 'c', 'b', 3, 4, 5, 6]
    

## More details
Here's a link to an interesting 3rd party library that deals with flattening and also grouping!

Source [6]: [https://iteration-utilities.readthedocs.io/en/latest/index.html](https://iteration-utilities.readthedocs.io/en/latest/index.html)


