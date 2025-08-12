---
sidebar_position: 1
---

# Private

The `private` keyword is used to declare a private function, which means it can only be accessed within the same module or file. Private functions are useful for encapsulating functionality and preventing unauthorized access to sensitive data or operations.

For example:

```js
private def foo() {
    print("Hello, World!")
}
```

In this example, the `foo` function is declared as private, which means it can only be accessed within the same module or file. Private functions are useful for encapsulating functionality and preventing unauthorized access to sensitive data or operations.

## Public V.S Private keywords

The `public` keyword is used to declare a function as public, which means it can be imported and used by other modules. Here's an example of a public function in Crabby:

```js
pub def foo() {
    print("Hello, World!")
}
```

In this example, the `foo` function is declared as public, which means it can be imported and used by other modules. To use the `foo` function, you would need to import it from another module.

Meanwhile the `private` keyword is used to declare a private function, which means it can only be accessed within the same module or file.

## Note

You can declare a variable or function without the `private` keyword and it will still automatically treat
it as private object or function.

```js
def foo() {
    print("Private function!")
}
```
