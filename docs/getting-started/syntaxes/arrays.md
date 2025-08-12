---
sidebar_position: 1
---

# Arrays

In **Crabby**, arrays are a collection of values of the same type. They are created using square brackets `[]` and can contain any number of elements of the same type.

```js
let myArray = [1, 2, 3, 4, 5]
```

Arrays can be indexed and accessed using square brackets `[]`. The index starts at 0 for the first element and goes up to the length of the array minus 1.

```js
let myArray = [1, 2, 3, 4, 5]
print(myArray[0]) // prints 1
print(myArray[2]) // prints 3
```

You can also use negative indices to access elements from the end of the array. The index -1 refers to the last element, -2 refers to the second-to-last element, and so on.

```js
let myArray = [1, 2, 3, 4, 5]
print(myArray[-1]) // prints 5
print(myArray[-2]) // prints 4
```

## Array Methods

Crabby provides several built-in methods for working with arrays. Here are some of the most commonly used methods:

- `length`: Returns the number of elements in the array.
- `append(element)`: Adds an element to the end of the array.
- `insert(index, element)`: Inserts an element at a specific index in the array.
- `remove(index)`: Removes an element at a specific index in the array.
- `sort(comparator)`: Sorts the elements of the array in ascending order.
- `reverse()`: Reverses the order of the elements in the array.

Here's an example of how to use these methods:

```js
let myArray = [1, 2, 3, 4, 5]
myArray.length // prints 5
myArray.append(6)
myArray.insert(2, 0)
myArray.remove(3)
myArray.sort((a, b) => a - b)
myArray.reverse()
```

## Multi-Dimensional Arrays

Crabby also supports multi-dimensional arrays, which are arrays of arrays. You can create a multi-dimensional array by nesting square brackets `[[]]`.

```js
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

You can access elements in a multi-dimensional array using multiple indices. The first index specifies the row, and the second index specifies the column.

```js
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(myArray[0][1]) // prints 2
print(myArray[1][2]) // prints 6
```

## Array Comprehensions

Crabby also supports array comprehensions, which are a concise way to create arrays. You can use array comprehensions to create arrays with a specific length or to create arrays based on a condition. Here's an example of how to use array comprehensions:

```js
let myArray = [1, 2, 3, 4, 5]
let evenNumbers = [for i in myArray if i % 2 == 0]
```

In this example, we create an array `evenNumbers` that contains only the even numbers from the `myArray` array.

## Array Slices

Crabby also supports array slices, which are a way to extract a portion of an array. You can use array slices to extract a range of elements from an array. Here's an example of how to use array slices:

```js
let myArray = [1, 2, 3, 4, 5]
let slice = myArray[1..3]
```

In this example, we create a slice `slice` that contains the elements at indices 1, 2, and 3 of the `myArray` array.
