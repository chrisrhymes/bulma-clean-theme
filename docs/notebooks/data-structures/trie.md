---
layout: page
title: Tries
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Tries
--->

A trie is a tree data structure optimized for storing strings that might have common prefixes. In this notebook I will analyse one implemenation of this data structure. This analysis is not complete as it does not contain time and space complexity analysis.

## Sources
1. [https://stackoverflow.com/questions/11015320/how-to-create-a-trie-in-python](https://stackoverflow.com/questions/11015320/how-to-create-a-trie-in-python)
2. [https://stackoverflow.com/a/64303618/8552542](https://stackoverflow.com/a/64303618/8552542)


## Implementation

Based on the discussion from source [1], and especially the comment in [2].


```python
from functools import reduce
from collections import defaultdict

class Trie:
    def __init__(self):
        self._trie_function = lambda: defaultdict(self._trie_function)
        self.trie = self._trie_function()
        self.ENDSTRING = "_end"
    
    def add_word(self, word):
        curr = self.trie
        for c in word:
            curr = curr[c]
        curr.setdefault(self.ENDSTRING)
    
    def word_exists(self, word):
        temp = self.trie
        for c in word:
            if c not in temp:
                return False
            temp = temp[c]
        return self.ENDSTRING in temp
```

### Explanation
This implementation is unusual in its use of a lambda function calling a default dictionary, set to return the same lambda function. There are few interesting points to be made here:

#### Implemenataion Components and Details
1. The lambda function is chosen so that we are always able to expand the trie using a new unnamed default dictionary. 
2. We have many unnamed default dictonaries here. They all return the same lambda function, that allows to build new nodes when necessary.
3. Every unnamed default dictionary represents a single node in our trie.
4. A default dictionary combines the searching and building operations for a dictionary. 

#### Operations
The main operations in a trie are building and searching for a string in it. That said, the backbone of both these operations is traversing the trie. We first examine traversal, and then continue to searching and building the tree.

##### Traversal
During every step of a traversal, we will always "sit" on a given node. As mentioned previously, a node is represented by a default dictionary. Our traversal is determined by what we want to search for next, which is a key in our current dictionary. Our next stop is determined by the value of that key. Let us suppose that we reach a node and that we have a latter in mind, say `a`:
1. If `a` was previously inserted to the trie from our current node, then that letter is a key in the current default dictionary. Its value is the new default dictionary that represents the node that was created when `a` was inserted into the trie.
2. If `a` was not previously inserted to the trie from our current node, than indexing into the current dictionary initiates its default function to create a new default dictionary that represents the node that will be created when a is inserted into the trie.

By laverging a tree illustration, using nodes and edges, it might help to consider the following:
1. Our node is a default dictionary.
2. Letters symbolize the edges connecting to our node.
3. Our default dictionary treats these letters as keys.
4. The value of each key / letter is the node to which we arrive after traversing the edge symbolized by that letter.
5. We then arrive at a new node / default dictionary. This brings us back to (1).

##### Searching
When searching for a work in the tree, if we have a suitable new node to go to (another unnamed default dictionary), the line `temp = temp[c]` does this transition. We are now in a new node of the tree, which is a child node of the last node. This node represents a shared prefix between inserted words. It still does not necessarily represent a word that was inserted into the tree. For that we need some way to signify, during the build process, that we finished adding a word in the current node. This an be done by adding a key to the default dictionary representing this node. This is done by adding the `_end` key to be set to `True`.

##### Building
When building the tree, and after inserting a whole word, the `curr` variable "sits" at the last node. This node is represented by a default dictionary. We then insert a default key to signify that this node is special, as it was inserted into the tree. This is done using the `setdeafult` method, which inserts the `_end` key. Then, as mentioned earlier, when searching for a word, we know the word exists in the tree if and only if we had a valid traversal for every letter in the word, and we have this special key in the last node.


#### Printed representation
Here's a printed trie that illustrated points in this explanation:

```
defaultdict(<function <lambda> at 0x7f234916bd30>,
    {'h': defaultdict(<function <lambda> at 0x7f234916bd30>,
        {'o': defaultdict(<function <lambda> at 0x7f234916bd30>, 
            {'w': defaultdict(<function <lambda> at 0x7f234916bd30>, 
            {'isEnd': True, 
                's': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                    {'i': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                        {'t': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                            {'g': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                                {'o': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                                    {'i': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                                        {'n': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                                            {'g': defaultdict(<function <lambda> at 0x7f234916bd30>, 
                                            {'isEnd': True})}
                                                )})})})})})})})})})})
```



### Tests

#### Test 1


```python
def testcase():
    trie = Trie()
    words = ["cat", "bat", "rat", "cam"]
    for w in words:
        trie.add_word(w)
    print(trie.word_exists('cam'))
    print(trie.word_exists('cal'))


testcase()
```

    True
    False
    
