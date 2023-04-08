---
layout: page
title: Changing Iterables in Loop
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Changing Iterables in Loop
--->

We know it's wrong, but why?

## Sources
1. [https://stackoverflow.com/questions/6260089/strange-result-when-removing-item-from-a-list-while-iterating-over-it](https://stackoverflow.com/questions/6260089/strange-result-when-removing-item-from-a-list-while-iterating-over-it)
2. [https://stackoverflow.com/questions/1637807/modifying-list-while-iterating](https://stackoverflow.com/questions/1637807/modifying-list-while-iterating)

## Example 1
Here we demonstrate the effect of changing an iterable in an iterator loop body on the traversing iterator. 
We print everything for convenience.


```python
l = list(range(10))

index = 1
for i in l:
    print(f'Iteration {index}')
    index += 1
    
    print(f'List: \n{l}')
    print(f'Iterator value: {i}')
    print(f'Element pop: {l.pop(0)}')

    print(f'List: \n{l}')
    print(f'Element pop: {l.pop(0)}')

    print(f'List: \n{l}')
    print()


```

    Iteration 1
    List: 
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Iterator value: 0
    Element pop: 0
    List: 
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Element pop: 1
    List: 
    [2, 3, 4, 5, 6, 7, 8, 9]
    
    Iteration 2
    List: 
    [2, 3, 4, 5, 6, 7, 8, 9]
    Iterator value: 3
    Element pop: 2
    List: 
    [3, 4, 5, 6, 7, 8, 9]
    Element pop: 3
    List: 
    [4, 5, 6, 7, 8, 9]
    
    Iteration 3
    List: 
    [4, 5, 6, 7, 8, 9]
    Iterator value: 6
    Element pop: 4
    List: 
    [5, 6, 7, 8, 9]
    Element pop: 5
    List: 
    [6, 7, 8, 9]
    
    Iteration 4
    List: 
    [6, 7, 8, 9]
    Iterator value: 9
    Element pop: 6
    List: 
    [7, 8, 9]
    Element pop: 7
    List: 
    [8, 9]
    
    

#### Analysis

Notice:
* The iterator `i` does not communicate with the list `l`.
* Thus, when the iterable `l` changed in iteration 2, the iterator does not care - it still points to the second element in the iterable.
* This means that in the second iteration, our iterator points at `3` even though it was originally the 4th element in `l`, simply because it is now the second element in `l`, and the iterator proceeds according to the order of iteration.


## Example 2: Variation

Let's examine the effect of changing the iterable inside the iterator loop body on the traversing iterator using a variant iterator.


```python
l = list(range(10))

for index, elem in enumerate(l):
    print(f'Iteration {index}')
    
    print(f'List: \n{l}')
    print(f'Iterator index: {index}')
    print(f'Iterator value: {elem}')
    print(f'Element pop: {l.pop(0)}')

    print(f'List: \n{l}')
    print(f'Element pop: {l.pop(0)}')

    print(f'List: \n{l}')
    print()


```

    Iteration 0
    List: 
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Iterator index: 0
    Iterator value: 0
    Element pop: 0
    List: 
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Element pop: 1
    List: 
    [2, 3, 4, 5, 6, 7, 8, 9]
    
    Iteration 1
    List: 
    [2, 3, 4, 5, 6, 7, 8, 9]
    Iterator index: 1
    Iterator value: 3
    Element pop: 2
    List: 
    [3, 4, 5, 6, 7, 8, 9]
    Element pop: 3
    List: 
    [4, 5, 6, 7, 8, 9]
    
    Iteration 2
    List: 
    [4, 5, 6, 7, 8, 9]
    Iterator index: 2
    Iterator value: 6
    Element pop: 4
    List: 
    [5, 6, 7, 8, 9]
    Element pop: 5
    List: 
    [6, 7, 8, 9]
    
    Iteration 3
    List: 
    [6, 7, 8, 9]
    Iterator index: 3
    Iterator value: 9
    Element pop: 6
    List: 
    [7, 8, 9]
    Element pop: 7
    List: 
    [8, 9]
    
    

### Analysis

Here we see exactly the "ignorance" of the iterator according to the `index` variable: 
* The iterator does as its supposed to: Element 1 -> Element 2 -> ... -> Itarble End
* Changing `l` does not affect the iterator traversal, but it can affect what the iterator finds in those positions.
