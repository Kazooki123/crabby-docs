---
sidebar_position: 1
---

# Macros

In Crabby, the **macro** is used for defining macros, it is a code, that writes code which is a form of **Metaprogramming** just like the `decorators`.
This can be done with the `macro` keyword, following with the `!` (exclamation mark) symbol for calling the macro.

Example:

```rs
macro repeat {
    (value, count) => {
        for i in 0..count {
            print(value)
        }
    }
}

pub def bar() {
    repeat!("Hello, World!", 10)
}
```
