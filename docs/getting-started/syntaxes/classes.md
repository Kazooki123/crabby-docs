---
sidebar_position: 1
---

# Classes

In Crabby, a class is a blueprint for creating objects. A class defines the properties and methods that an object of that class will have.

## Defining a Class

To define a class, use the `class` keyword followed by the name of the class. The body of the class is enclosed in curly braces `{}`. Inside the body, you can define properties and methods.

Here's an example of a class definition:

```py
class Person {
  let name: String
  let age: Int

  def init(name: String, age: Int) {
    self.name = name
    self.age = age
  }

  def introduce() {
    print("Hi, my name is \(self.name) and I am \(self.age) years old.")
  }
}
```
