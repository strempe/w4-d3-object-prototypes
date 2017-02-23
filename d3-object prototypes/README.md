Notes and thoughts on: Master the JavaScript Interview

All the talk of instances had me wishing I understood this in an instance. After reading it twice, and googling some terms, I'm still a bit lost BUT I do know that class inhertiance is the less efficent way to code and has a lot pf potential to make life difficult. 

Below are my notes, questions, and thoughts:
OO Design = object oriented design 
prototypes
not classes

Developers need to know about prototypes and classes

Differences between Class Inheritance and Prototypal Inheritance 
- Class Inheritance: A class is like a blueprint - a description of the object to be created 
    - Subclass Relationships: when a class inherits from another class
        - hierarchical class taxonomies (way to group things together)

Instances are represented by constructor functions with the ‘new’ keyword
- The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.

ES6 - the ES6 ‘class’ keyword turns into a constructor function 
- class is really a constructor?? 

Class inheritance works on top of prototypal inheritance 
- class inheritance uses prototype chain to wire the child ‘Constructor.prototype’   to its parent ‘Constructor.prototype’
    - Usually the ‘super()’ constructor is called. 
    - super is a constructor?!
- This creates THE TIGHTEST coupling in OO design.

Prototypal Inheritance: A prototype is a working object instance 
- objects inherit directly from other objects

Instances are made of different source objects
- what is source object?
- flat [[Prototype]] delegation hierarchy

Class taxonomies are not an automatic side-effect of prototypal OO (a critical distinction)

Instances are typically represented through factory functions, object literals or ‘object.create()’

Inheritance is fundamentally a code reuse mechanism: A way for different kinds of objects to share code.

Why does this matter?
base class - hard to fix when you get them wrong - class inheritance cause MANY well known problems in OO design
- tight coupling problem 
    - its the tightest
- inflexible hierarchy
