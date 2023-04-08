---
layout: page
title: Wrapping elements in lists
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Wrapping elements in iterable by function
--->

## Sources
1. [https://stackoverflow.com/questions/65415186/how-to-group-similar-numbers-with-condition-range](https://stackoverflow.com/questions/65415186/how-to-group-similar-numbers-with-condition-range)
2. [https://stackoverflow.com/questions/15800895/finding-clusters-of-numbers-in-a-list/15801233#15801233](https://stackoverflow.com/questions/15800895/finding-clusters-of-numbers-in-a-list/15801233#15801233)
3. [https://stackoverflow.com/questions/773/how-do-i-use-itertools-groupby](https://stackoverflow.com/questions/773/how-do-i-use-itertools-groupby)
4. [https://stackoverflow.com/questions/3992735/python-generator-that-groups-another-iterable-into-groups-of-n](https://stackoverflow.com/questions/3992735/python-generator-that-groups-another-iterable-into-groups-of-n)
5. [https://docs.python.org/3/library/functions.html#iter](https://docs.python.org/3/library/functions.html#iter)
6. [https://stackoverflow.com/questions/31164731/python-chunking-csv-file-multiproccessing/31170795#31170795](https://stackoverflow.com/questions/31164731/python-chunking-csv-file-multiproccessing/31170795#31170795)
7. [https://stackoverflow.com/questions/46752146/take-sequence-of-values-from-a-python-list/46752214#46752214](https://stackoverflow.com/questions/46752146/take-sequence-of-values-from-a-python-list/46752214#46752214)
8. [https://docs.python.org/3/library/itertools.html#itertools.groupby](https://docs.python.org/3/library/itertools.html#itertools.groupby)

## Option 1: Stream approach


```python
def condition(item, prev):
    return item - prev <= 15

def grouper_by_stream(iterable, function):
    prev = None
    group = []
    for item in iterable:
        if prev is None or function(item, prev):
            group.append(item)
        else:
            yield group
            group = [item]
        prev = item
    if group:
        yield group

numbers = [123, 124, 128, 160, 167, 213, 215, 230, 245, 255, 257, 400, 401, 402, 430]
result = dict(enumerate(grouper_by_stream(numbers, condition), 1))

print(result)
```

    {1: [123, 124, 128], 2: [160, 167], 3: [213, 215, 230, 245, 255, 257], 4: [400, 401, 402], 5: [430]}
    


```python
numbers = [123, 124, 128, 160, 167, 213, 215, 230, 245, 255, 257, 400, 401, 402, 430]

def cut_indices(numbers):
    # this function iterate over the indices that need to be 'cut'
    for i in range(len(numbers)-1):
        if numbers[i+1] - numbers[i] > 15:
            yield i+1

def splitter(numbers):
    # this function split the original list into sublists.
    px = 0
    for x in cut_indices(numbers):
        yield numbers[px:x]
        px = x
    yield numbers[px:]

def cluster(numbers):
    # using the above result, to form a dict object.
    cluster_ids = range(1,len(numbers))
    return dict(zip(cluster_ids, splitter(numbers)))

result = cluster(numbers)

print(result)
```

    {1: [123, 124, 128], 2: [160, 167], 3: [213, 215, 230, 245, 255, 257], 4: [400, 401, 402], 5: [430]}
    

## Option 2: General Approach

### Non-Stream Approach with generator

A non-stream approach would not go hand-in-hand with a generator because a generator traverses iterables element-by-element, which is, by definition, a stream approach.


```python
def grouper_by_general_condition(iterable, function):
    group = []
    for item in iterable:
        if function(item):
            group.append(item)
        else:
            yield group
            group = [item] # Why?
    if group:
        yield group
```

### Non-Stream Approach without generators

A non-stream non-generator approach can be implemented using the `itertools` module.

#### Chunking


```python
import itertools

def group_iterables_in_pairs(iterable):
    return list(itertools.pairwise(iterable))

sequence = list(range(7))
target = group_iterables_in_pairs(sequence)

print(target)

# Grouping without padding
def grouper_without_padding(n, iterable):
    it = iter(iterable)
    return iter(lambda: list(itertools.islice(it, n)), [])

target = list(grouper_without_padding(3, sequence))

print(target)

# Grouping with padding
def grouper_with_padding(n, iterable):
    it = iter(iterable)
    return itertools.zip_longest(*[it]*n, fillvalue='x')
                                 
target = list(grouper_with_padding(3, sequence))
# target = list(itertools.zip_longest(*[iter(sequence)]*3, fillvalue='x'))

print(target)

```

    [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6)]
    [[0, 1, 2], [3, 4, 5], [6]]
    [(0, 1, 2), (3, 4, 5), (6, 'x', 'x')]
    


```python
# Under the hood
sequence = list(range(7))
a = [iter(sequence)]*3
print(a)
```

    [<list_iterator object at 0x000001558669A7D0>, <list_iterator object at 0x000001558669A7D0>, <list_iterator object at 0x000001558669A7D0>]
    

##### Explanation: Diving to `grouper_with_padding()`

1. `[iter(sequence)]*3` gives us the same iterator 3 times!
2. This iterator goes over the entire sequence.
3. `*[iter(sequence)]*3` flattens the iterators in order.
4. Now, Zipping occurs.

The zipping process:
Notice that:
* Since we have 3 iterables going into the method, this is a generator of 3-tuples.
* Since we have 3 iterables which are all the same iterator.

This creates a very interesting behavior:
1. When we take the first element of the iterator, that element is gone.
2. The first element in this iterator is now the second element.
3. But all our iterables arguments are the same iterator!
4. Hence, the first element in the second iterator is the originally second element in the list.
5. We thus add the second element to the current tuple, where the first element is first.
6. According to the same logic, the last element in the tuple is now the third element!

This goes on until the generator is exhausted.

If we still need elements for the last tuple, we use a fillvalue.

#### Group by break function: Existing element


```python
from itertools import groupby

def break_function(x):
    return x < 7

def group_by_break_function(sequence, function):
    return [list(g) for k, g in groupby(sequence, function) if k]


sequence = [3,2,5,7,4,5,6,3,8,4,5,7,8,9,5,7,8,4,9,7,6]

# [list(g) for k, g in groupby(a, lambda x:x<7) if k]
target = group_by_break_function(sequence, break_function)

print(target)
```

    [[3, 2, 5], [4, 5, 6, 3], [4, 5], [5], [4], [6]]
    


```python
# Under the hood
a = [3,2,5,7,4,5,6,3,8,4,5,7,8,9,5,7,8,4,9,7,6]

result = [(k,list(g)) for k, g in groupby(a, lambda x:x<7)]

print(result)

```

    [(True, [3, 2, 5]), (False, [7]), (True, [4, 5, 6, 3]), (False, [8]), (True, [4, 5]), (False, [7, 8, 9]), (True, [5]), (False, [7, 8]), (True, [4]), (False, [9, 7]), (True, [6])]
    

##### Explanation: Diving to `groupby()`
This is a great example for:
* When sorting should not always happen on a sequence before using `groupby()`.
* Where `SQL's GROUPBY` differs from `Python's groupby()`

`SQL's GROUPBY` does not care about the order of keys. As the Python docs states, "it aggreates common elements regardless of their input order".

However, notice what happens here - The keys are from `Python's groupby()` are allowed to not be unique! 

This allows to to group elements in a sequence according to any function we want, as long as we put a "barrier" between chunks, for which the grouping function returns `False`. Beautiful!


#### Other groupby use cases

See: https://stackoverflow.com/a/45873519/8552542

#### Group by break function: Indices


```python
from itertools import groupby

a = [3,2,5,7,4,5,6,3,8,4,5,7,8,9,5,7,8,4,9,7,6]
indices_list = [5,7,9]
indices_set = set(indices_list)

result = [[x for _,x in list(g)] for _, g in groupby(enumerate(a), lambda x :x[0] in indices_set)]

print(result)
```

    [[3, 2, 5, 7, 4], [5], [6], [3], [8], [4], [5, 7, 8, 9, 5, 7, 8, 4, 9, 7, 6]]
    
