---
sidebar_position: 1
---

# Keywords

`pub` - Shorten for `public`, is a keyword used for functions. For example:

```rs
// public.crab

pub def foo(): {
    print("Hello!")
}
```

Note: **If a function has no `pub`, then it is automatically a private function, and can't be imported.**

`import` - Importing a `.crab/.cb` file or **Crabby** module. For example:

```js
import foo from "./public.crab"

foo()
```

`def` - Shorten for `define`, is a keyword used for functions. For example:

```rs
// public.crab

def foo(): {
    print("Hello!")
}
```

`let` - Let is a keyword used for variables. For example:

```rs
// public.crab

let x = 10
```

`if` - If is a keyword used for conditional statements, with the keyword `else`. For example:

```rs
let true = 1

if true: {
    print("True!")
} else {
    print("False!")
}
```

`macro` - **EXPERIMENTAL!** Macro is a keyword used for defining macros, it is a code, that writes code. For example:

```rs
macro def add(a, b): {
    return a + b
}

print(add(10, 20))
```

`lambda` - Uses for Math equating and basic maths, Lambda creates **small** anonymous functions, just like in Python! For example:

```rs
let x = lambda(a): {
    return a + 10
}

print(x(5))
```

`loop` - A keyword used for looping, Although it supports another looping method which we'll be after this. For example:

```rs
loop 100: {
    print("HELLO!") // Prints it 100 times
}
```

`for` A keyword used for looping, uses other keywords like `in` and `range()`. For example:

```py
for i in range(10): {
    print(i)
}
```

`range` - A keyword for a function that **returns** a sequence of numbers. For example:

```py
let x = range(100)

for i in x: {
    print("Hello, World!")
}
```
