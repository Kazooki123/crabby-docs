---
sidebar_position: 1
---

# Match Case

In Crabby, **pattern matching** is usually done with the `match` && `case` keyword!

For example, in this code we are going to *match different variants* of colors and print them!

```rs
pub enum Colors {
    Red,
    Green,
    Pink,
    Purple,
    Blue,
    RGB(r: Int, g: Int, b: Int),
}

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
