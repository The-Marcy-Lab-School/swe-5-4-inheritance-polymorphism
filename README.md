# Assignment

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
  - [npm test](#npm-test)
- [Questions](#questions)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files.

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

## Questions

### Question 1 - Quadrilateral

Create a `Quadrilateral` class. Check the tests to see what arguments it's expecting and whether or not it has any methods on it.

### Question 2 - Rectangle

Now make a `Rectangle` class that inherits from the `Quadrilateral` class. Pay very careful attention to how the arguments for `Rectangle` differ from `Quadrilateral`. How should this class deal with its parent? Does it need any methods of its own or is it borrowing from the parent?

### Question 3 - Square

Finally, make a `Square` class that inherits from...someone. Check the tests to see who the direct parent is, and what arguments `Square` takes on each instance.

Now, there are some methods that square *should* add:

- getPerimeter
- getArea
- getDiagonal

Hopefully you know how to get those things from the sides, but google or GPT is your friend here. Whenever you have a question, always think about where you're staring from (what do you know about the square) and where you're going (what are you trying to calculate).

## Design Challenge

Design a `Person` class.

**Instance Properties / Methods**: An instance of `Person` should have three *or more* data properties which can be any type (string, number, boolean, array, object, etc.). Your `Person` class should have at least three **non-trivial** instance methods. For this assignment, a trivial method is one that either gets the data property or sets the data property to the parameter value. In other words, methods like `setName()` or `changeName()` or `get name()` will not be accepted.

**Class Properties / Methods**: As for the *class* of Person, it should have a private variable to track each new instance, a `list` method that returns that variable, and a `find` method that allows you to look up a person by some attribute (you're choice).

This design challenge is purposefully ambiguous and open-ended to encourage creativity. There are no tests, so you will be responsible for QAing the code yourself with the `playground.js` file. Basically just log stuff out.

...Though if you wanted to add some *literal* tests yourself in a new `person.spec.js`, who's gonna stop you?
(don't add the scoring engine, just regular jest tests are fine).
