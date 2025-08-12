---
sidebar_position: 1
---

# Decorators

Just like in **Python**, a decorator in Crabby is a `powerful` and `flexible` way
to **modify** or **extend** the behavior of a function or method **WITHOUT** changing their `actual` code.
This can be done with the `@` (at) symbol.

For example:

```py
def sprinkles() {
    print("Adding Sprinkles!❄️")
}

// This is a decorator
@sprinkles
def ice_cream() {
    print("Here is your ice cream!🍨❄️")
}
```

## When to use Decorators?

Decorators are a powerful tool for **modifying** the behavior of functions or methods without changing their actual code. They are often used to add logging, timing, or other functionality to existing code.
