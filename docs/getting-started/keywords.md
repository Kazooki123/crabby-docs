---
sidebar_position: 1
---

# Keywords

Here you can find a list of all the keywords in Crabby!

`pub` - Shorten for `public`, is a keyword used for functions. For example:

```js
// public.crab

pub def foo() {
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

```js
// public.crab

def foo() {
    print("Hello!")
}
```

`let` - Let is a keyword used for variables. For example:

```js
// public.crab

let x = 10
```

`if` - If is a keyword used for conditional statements, with the keyword `else`. For example:

```js
let x = true
let y = false

if x { // If choose 'y', then it'll return it false
    print("True!")
} else {
    print("False!")
}
```

`docstrings` - Docstrings are a way to add comments to functions, they are used to describe what the function does. For example:

```py
def foo() {
    """
    This is a docstring!
    """
    print("Hello!")
}
```

`const` - meaning **constant**, once a value is assigned to a const it cannot be changed or modified in any ways during runtime and compile time.

```js
const PI: Float = 3.14159
const MAX_USERS: Int = 100

pub def area(radius: Float) -> Float {
    return PI * radius * radius
}
```

`decorators` - **EXPERIMENTAL!** just like in **Python**, a decorator is a `powerful` and `flexible` way
to **modify** or **extend** the behavior of a function or method **WITHOUT** changing their `actual` code. For example:

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

> When to use Decorators?

Decorators are a powerful tool for modifying the behavior of functions or methods without changing their actual code. They are often used to add logging, timing, or other functionality to existing code.

`macro` - **`EXPERIMENTAL!`** Macro is a keyword used for defining macros, it is a code, that writes code which is a form of **Metaprogramming** just like `decorators`. For example:

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

> When to use Macros?

Macros are a powerful tool for writing code that generates code. They are often used to generate repetitive code, or to abstract away boilerplate code.

`lambda` - Uses for Math equating and basic maths, Lambda creates **small** anonymous functions, just like in Python! For example:

```js
let x = lambda(a): {
    return a + 10
}

print(x(5))
```

`loop` - A keyword used for looping, Although it supports another looping method which we'll be after this. For example:

```js
loop 100 {
    print("HELLO!") // Prints it 100 times
}
```

`for` A keyword used for looping, uses other keywords like `in` and `range()`. For example:

```js
for i in range(10) {
    print(i)
}
```

`range` - A keyword for a function that **returns** a sequence of numbers. For example:

```js
let x = range(100)

for i in x {
    print("Hello, World!")
}
```

`enums` - short for **enumerations**, it's a custom data type that can be one of several different variants.

```js
pub enum Colors {
    Red,
    Green,
    Pink,
    Purple,
    Blue,
    RGB(r: Int, g: Int, b: Int),
}
```

`structs` - A custom data type that allows you to group together related data under a single name.

```js
struct Point where x >= 0 {
    x: Int,
    y: Int,
}

pub struct Person {
    name: String,
    age: Int,
    hobbies: String,
    birthday: Date,
}
```

`match` & `case` - used for pattern matching

```py
pub def colors(color: Color) {
    match color {
        case Color.Red => print("Red"),
        case Color.Green => print("Green"),
        case Color.Pink => print("Pink"),
        case Color.Purple => print("Purple"),
        case Color.Blue => print("Blue"),
        case Color.RGB => print(f"RGB: {r}, {g}, {b}"),
        case _ => print("Other color")
    }
}
```
