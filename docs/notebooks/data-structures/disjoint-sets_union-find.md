---
layout: page
title: Disjoint Sets (Union-Find)
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Disjoint Sets (Union-Find)
--->

## Sources
1. Discussion shows use case and an implementation for union-find. Implementations here are not encapsulated in a class. Link: [https://stackoverflow.com/questions/27850002/given-lists-of-related-numbers-merge-related-lists-to-create-disjoint-sets](https://stackoverflow.com/questions/27850002/given-lists-of-related-numbers-merge-related-lists-to-create-disjoint-sets)

2. An okay implementation of the union-find data structure, encapsulated. Link: [https://python.plainenglish.io/union-find-data-structure-in-python-8e55369e2a4f](https://python.plainenglish.io/union-find-data-structure-in-python-8e55369e2a4f)

3. Another okay implementation of the union-find data structure, encapsulated. Link: [https://www.geeksforgeeks.org/union-by-rank-and-path-compression-in-union-find-algorithm/](https://www.geeksforgeeks.org/union-by-rank-and-path-compression-in-union-find-algorithm/)

4. Seems like a very robust implementation of this structure. Link: [https://github.com/deehzee/unionfind](https://github.com/deehzee/unionfind)

## Problems

1. Leetcode: Lexicographically smallest equivalent string. Link: ]https://leetcode.com/problems/lexicographically-smallest-equivalent-string/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)



## Implementation
Based on sources 3,2


```python
from collections import defaultdict

# a structure to represent a graph
class Graph:
    def __init__(self, num_of_v):
        self.num_of_v = num_of_v
        self.edges = defaultdict(list)

    def add_edge(self, u, v):
        self.edges[u].append(v)

class Subset:
    def __init__(self, parent, rank):
        self.parent = parent
        self.rank = rank

class UnionFind:
    # This structure is 1-indexed.
    def __init__(self, num_of_elements):
        self.subsets = [Subset(i,0) for i in range(num_of_elements)]
        self.size = num_of_elements

    # path compression happens here!
    def find(self, node):
        if self.subsets[node].parent != node:
            self.subsets[node].parent = self.find(self.subsets[node].parent)
        return self.subsets[node].parent

    def union(self, u, v):
        u_set = self.find(u)
        v_set = self.find(v)
        if (u_set == v_set):
            return
        elif self.subsets[u_set].rank > self.subsets[v_set].rank:
            self.subsets[v_set].parent = u_set
        elif self.subsets[v_set].rank > self.subsets[u_set].rank:
            self.subsets[u_set].parent = v_set
        else:
            self.subsets[v_set].parent = u_set
            self.subsets[u_set].rank += 1
    
    def get_groups(self):
        groups = defaultdict(set)
        for element in range(self.size):
            # we call self.find so that path compression occurs
            groups[self.find(element)].add(element)
        return groups
```

### Tests

#### Test 1


```python
# From source 3

def isCycle(graph):
    unionfind = UnionFind(graph.num_of_v)

    for u in graph.edges:
        u_rep = unionfind.find(u)

        for v in graph.edges[u]:
            v_rep = unionfind.find(v)

            if u_rep == v_rep:
                return True
            else:
                unionfind.union(u_rep, v_rep)

def testcase1():
    # Driver Code
    g = Graph(3)

    # add edge 0-1
    g.add_edge(0, 1)

    # add edge 1-2
    g.add_edge(1, 2)

    # add edge 0-2
    g.add_edge(0, 2)

    if isCycle(g):
        print('Graph contains cycle')
    else:
        print('Graph does not contain cycle')

testcase1()
```

    Graph contains cycle
    

#### Test 2


```python
def testcase2():
    pairs = [(1,2),(3,4),(5,6),(3,7),(5,7)]


    # unionfind is 1-indexed.
    # pairs have 7 elements, from 1 to 7, inclusive. 
    # From (1-index)-ness, we start with n=8=7+1
    n = 8
    unionfind = UnionFind(n)
    for a,b in pairs:
        unionfind.union(a,b)

    print(unionfind.get_groups())


testcase2()
```

    defaultdict(<class 'set'>, {0: {0}, 1: {1, 2}, 5: {3, 4, 5, 6, 7}})
    
