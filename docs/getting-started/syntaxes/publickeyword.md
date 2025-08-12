---
sidebar_position: 1
---

# Pub

In Crabby, the `pub` keyword is used to declare a function as public, which means it can be imported and used by other modules. Here's an example of a public function in Crabby:

```js
pub def foo() {
    print("Hello, World!")
}
```

In this example, the `foo` function is declared as public, which means it can be imported and used by other modules. To use the `foo` function, you would need to import it from another module.

## Importing a Public Function

To import a public function, you would need to use the `import` keyword followed by the name of the function. Here's an example of how to import a public function:

```js
import foo from "./public.crab"

foo()
```

In this example, the `foo` function is imported from the `public.crab` file.
