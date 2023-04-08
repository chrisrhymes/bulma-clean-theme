---
layout: page
title: Math function with modulo
categories: [concepts]
menubar: menu_notebooks
show_sidebar: false
toc: true
---

<!---
# Math functions (with modulo)
--->

## Sources
1. [Book: Competitive Programming in Python by Durr, Vie](https://www.amazon.com/Competitive-Programming-Python-Algorithms-Develop/dp/1108716822)
2. [https://docs.python.org/3/library/math.html](https://docs.python.org/3/library/math.html)
3. [https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity)
4. [https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm)
5. [https://codeforces.com/blog/entry/78873](https://codeforces.com/blog/entry/78873)
6. [https://cp-algorithms.com/algebra/factorial-modulo.html#algorithm](https://cp-algorithms.com/algebra/factorial-modulo.html#algorithm)

## Imports



```python
import math
```

## Greatest Common Divisor (GCD)

### Details and Implementation

To calculate `gcd` for two numbers, `a,b`, we can use the Euclidean Algorithm. However, there's a built-in implemenation for the calculation of `gcd(a,b)` in Python.

Python docs function signature: `math.gcd(*integers)`

More information:
* Return the greatest common divisor of the specified integer arguments (we can have more than 2). 
* If any of the arguments is nonzero, then the returned value is the largest positive integer that is a divisor of all arguments. 
* If all arguments are zero, then the returned value is 0. 
* gcd() without arguments returns 0.


```python
print(math.gcd(4, 8))
print(math.gcd(4,8,12))
print(math.gcd(4,8,7))
```

    4
    4
    1
    

## Bezout Coefficients
* The Euclidean Algorithm takes two numbers `a,b` and calculates `gcd(a,b)`.
* The Extended Euclidean Algorithm takes two numbers `a,b` and calculates the triplet `u,v,gcd(a,b)` such that `a*u+b*v=gcd(a,b)`.
* `u,v` are called Bezout Coefficients.



```python
def bezout(a, b):
    if b == 0:
        return (1, 0)
    u, v = bezout(b, a % b)
    return (v, u - (a // b) * v)
```


```python
a = 12
b = 42
print(bezout(a, b))
u,v = bezout(a, b)

print(f'We need a*u + b*v = gcd(a,b). We should have: {a}*({u}) + {b}*({v}) = {math.gcd(a,b)}')
print(f'We have {a}*({u}) + {b}*{v} = {a*u + b*v} = math.gcd({a},{b})')

```

    (-3, 1)
    We need a*u + b*v = gcd(a,b). We should have: 12*(-3) + 42*(1) = 6
    We have 12*(-3) + 42*1 = 6 = math.gcd(12,42)
    

## Extended Euclidean Algorithm
We can combine the two function above to get the Extended Euclidean Algorithm


```python
def extended_euclidean_algorithm(a,b):
    u,v = bezout(a,b)
    return (u,v,math.gcd(a,b))
```


```python
a = 12
b = 42
print(extended_euclidean_algorithm(a,b))
```

    (-3, 1, 6)
    

## Variant: Dealing with modulo
Quoting the book [source 2]:

Certain problems involve the calculation of extremely large numbers. Consequently,they require a response modulo a large prime number `p` in order to test if the solution is correct.

Since `p` is prime, we can easily divide by an integer a non-multiple of `p` as follows: 
* `a` and `p` are relatively prime.
* Hence, their Bézout coefficients satisfy `au+pv = 1`.
* hence, `au = 1 (mod(p))`.
* Hence, `u` is the inverse of `a`. 
* Hence, to divide by `a`, we can instead multiply by `u (mod(p))`.

Thus, leveraging modular combinatrics, multiplying by `inv(a,p)` is analogous to dividing by `a`.

I think more explanation about this can be found in source 5.


```python
def inv(a, p):
    return bezout(a, p)[0] % p
```


```python
a = 800
p = 7

print(inv(a,p))
print(bezout(a,p))

# We can see that `inv(a,p)` gives us `u (mod(p))`.
```

    4
    (-3, 343)
    

## Factorial

### Single calculation without modulo
Python docs function signature: `math.factorial(n)`

More information:
* Returns `n!` as an integer. 
* Raises ValueError if `n` is not integral or is negative.
* Deprecated since version 3.9: Accepting floats with integral values (like 5.0) is deprecated.



```python
print(f'3! = {math.factorial(3)}')
print(f'4! = {math.factorial(4)}')
```

    3! = 6
    4! = 24
    

### Single calculation with modulo
According to source 6.


```python
def factmod(n, p):
    # Precompute the factorials 0!, 1!, ..., (p-1)! and insert them to array
    array = [0] * p
    array[0] = 1
    for i in range(1,p):
        array[i] = (array[i-1] * i) % p

    # Follows the logic explained in source 6
    res = 1;
    while (n > 1):
        if ((n//p) % 2):
            res = p - res # multiplication by -1 (mod(p))
        res = res * array[n%p] % p
        n = n // p
    
    return res;
```


```python
print(factmod(4,3))
print(factmod(4,7))
print(factmod(2,2))
```

    2
    3
    1
    

### Array calculation without modulo
We create an array, denoted `fact[]` such that `fact[i]` contains `i!`.


```python
def get_factorial_array_until_n(n):
    array = [1] * n
    for i in range(1,n):
        array[i] = array[i-1] * i
    return array
```


```python
print(get_factorial_array_until_n(5))
```

    [1, 1, 2, 6, 24]
    

### Array calculation with modulo
I did two attempts:
1. Brute force. This did not take into account source 6.
2. Building on the discussion in source 6, with its implementation of `factmod(n,p)`.

#### Attempt 1
From source 6, I think there should be a better way of doing this:
* I should be able to do this without going all the way to `n`.
* I should be able to do this going upto `min(n,k)`.


```python
def get_factorial_modulo_array_until_n(n, p):
    array = [1] * n
    for i in range(1,n):
        array[i] = (array[i-1] * i) % p
    return array
```

#### Attempt 2
It seems like the calculation of `factmod` only extracts all the necessary memoization we need.

Thus, we just need a small refactoring for the memoization part, and we are okay.


```python
def calculate_array_factorial_with_modulo_until_p(p):
    array = [0] * p
    array[0] = 1
    for i in range(1,p):
        array[i] = (array[i-1] * i) % p
    return array

def calculate_factmod_with_array(n, p, array):
    # Follows the logic explained in source 6
    res = 1;
    while (n > 1):
        if ((n//p) % 2):
            res = p - res # multiplication by -1 (mod(p))
        res = res * array[n%p] % p
        n = n // p
    
    return res;

def get_factorial_modulo_array_until_n(n, p):
    target = [0] * (n+1)
    fact_mod_array_until_p = calculate_array_factorial_with_modulo_until_p(p)

    for i in range(n+1):
        target[i] = calculate_factmod_with_array(i, p, fact_mod_array_until_p)

    return target

```


```python
print(factmod(0,3))
print(factmod(1,3))
print(factmod(2,3))
print(factmod(3,3))
print(factmod(4,3))
print(factmod(5,3))

```

    1
    1
    2
    2
    2
    1
    


```python
print(get_factorial_modulo_array_until_n(5,3))
```

    [1, 1, 2, 2, 2, 1]
    


```python
assert [factmod(i,3) for i in range(6)] == get_factorial_modulo_array_until_n(5,3)
```

## Binomial Coefficients

###  Without modulo
Python docs function signature: `math.comb(n,k)`

More information:
* Returns the number of ways to choose k items from n items without repetition and without order.
* Evaluates to `n! / (k! * (n - k)!)` when `k <= n` and evaluates to zero when `k > n`.
* Also called the binomial coefficient because it is equivalent to the coefficient of k-th term in polynomial expansion of `(1 + x)ⁿ`.


```python
print(math.comb(3, 2))
print(math.comb(2, 3))
print(math.comb(4, 2))
```

    3
    0
    6
    

### With modulo
There are two approaches mentioned in the book [source 2]:
1. Using loop, and leveraging the inverse function `inv(a)`. 
2. Using Dynamic Programming (DP). This can be implemented using Pascal's Triangle.

Which approach is better, assuming `k` is constant:
1. Approach 1 should be used when we need to calculate `nCk (mod(p))` for a single `(n,k)` pair.
2. Approach 2 should be used when we need to calculate `nCk (mod(p))` for multiple `(n,k)` pairs.

#### Approach 1: Loop


```python
def binom_modulo_loop(n, k, p):
    prod = 1
    for i in range(k):
        prod = (prod * (n-i) * inv(i+1, p)) % p
    return prod
```

#### Approach 2: DP [TODO]



```python
# TODO
```

## Final Notes

## Motivation

The following problem in leetcode got me to write this notebook: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/

In it:
* We have `n` dice
* Each die has `k` sides numberd from `1` to `k`.
* We need to find the number of ways to roll the dice, so the sum of the face-up numbers equals `target`.
* As input, we receive `(n, k, target)`.

Solutins:
1. The official solution uses memoization and DP. 
2. There is also a mathematical solution.

I set out to write the mathematical solution to the problem, following directions from the following references:
1. https://math.stackexchange.com/questions/107329/ways-of-getting-a-number-with-n-dice-each-with-k-sides
2. https://mathworld.wolfram.com/Dice.html

And I did it(!):
https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/submissions/911465342/
