---
title: Functional Programming in JavaScript
date: 2023-05-12
---

Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative type of programming. The key principles of functional programming in JavaScript are:

1. **Pure Functions:** These are functions that take an input and return an output without modifying any data outside its scope.

2. **Immutability:** In functional programming, state is not changed, instead, new objects are created that copy the existing data and modify it.

3. **Higher Order Functions:** These are functions that take other functions as arguments and/or return functions as output.

Here's an example of a higher order function in JavaScript:

```javascript
const map = (fn, arr) => arr.map(fn);

const square = (num) => num * num;

const squaredNumbers = map(square, [1, 2, 3, 4, 5]);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

In this example, map is a higher order function that takes a function fn and an array arr, and applies fn to each element of arr.
