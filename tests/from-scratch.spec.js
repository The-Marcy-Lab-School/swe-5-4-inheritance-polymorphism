const path = require('path');
const ScoreCounter = require('score-tests');
const {
  Quadrilateral,
  Rectangle,
  Square,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('Quadrilateral - creates a new quadrilateral instance', () => {
    const quad1 = new Quadrilateral(3, 5, 9, 4);
    expect(quad1.side1).toBe(3);
    expect(quad1.side2).toBe(5);
    expect(quad1.side3).toBe(9);
    expect(quad1.side4).toBe(4);
    expect(quad1.getPerimeter()).toBe(21);

    const quad2 = new Quadrilateral(6, 7, 5, 9);
    expect(quad2.side1).toBe(6);
    expect(quad2.side2).toBe(7);
    expect(quad2.side3).toBe(5);
    expect(quad2.side4).toBe(9);
    expect(quad2.getPerimeter()).toBe(27);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Rectangle - creates a new rectangle instance', () => {
    const rect1 = new Rectangle(30, 40);
    expect(rect1.side1).toBe(30);
    expect(rect1.side2).toBe(40);
    expect(rect1.side3).toBe(30);
    expect(rect1.side4).toBe(40);
    expect(rect1.getPerimeter()).toBe(140);
    expect(rect1.getArea()).toBe(1200);

    const rect2 = new Rectangle(10, 5);
    expect(rect2.side1).toBe(10);
    expect(rect2.side2).toBe(5);
    expect(rect2.side3).toBe(10);
    expect(rect2.side4).toBe(5);
    expect(rect2.getPerimeter()).toBe(30);
    expect(rect2.getArea()).toBe(50);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Rectangle - inherits from Quadrilateral', () => {
    const rect = new Rectangle(10, 5);
    const quad = new Quadrilateral(6, 7, 5, 9);
    expect(rect instanceof Quadrilateral).toBe(true);
    expect(rect.getPerimeter).toBe(quad.getPerimeter);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Rectangle - uses inheritance properly', () => {
    const rect = new Rectangle(10, 5);

    // The length of a function is the number of parameters
    // Rectangle constructor should only have 2 parameters
    expect(rect.constructor.length).toBe(2);

    // Rectangle constructor should use super
    expect(rect.constructor.toString().includes('super')).toBeTruthy();

    // do some string manipulation to grab the arguments you invoke
    // super with. In the third step, we remove the beginning and ending
    // parentheses, remove white spaces, and then split on the commas.
    const superCallText = rect.constructor.toString().match(/super\(.*\)/g)[0];
    const argsListText = superCallText.match(/\(.*\)/g)[0];
    const argValues = argsListText.replaceAll(" ", "").slice(1, -1).split(',')

    // check to make sure that the first and third arguments are the same
    expect(argValues[0]).toEqual(argValues[2]);

    // check to make sure that the second and fourth arguments are the same
    expect(argValues[1]).toEqual(argValues[3]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Square - creates a new square instance', () => {
    const square1 = new Square(10);
    expect(square1.side1).toBe(10);
    expect(square1.side2).toBe(10);
    expect(square1.side3).toBe(10);
    expect(square1.side4).toBe(10);
    expect(square1.getPerimeter()).toBe(40);
    expect(square1.getArea()).toBe(100);
    expect(square1.getDiagonal()).toBe(Math.sqrt(200));

    const square2 = new Square(5);
    expect(square2.side1).toBe(5);
    expect(square2.side2).toBe(5);
    expect(square2.side3).toBe(5);
    expect(square2.side4).toBe(5);
    expect(square2.getPerimeter()).toBe(20);
    expect(square2.getArea()).toBe(25);
    expect(square2.getDiagonal()).toBe(Math.sqrt(50));

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Square - Square inherits from Rectangle', () => {
    const square = new Square(10);
    const rect = new Rectangle(10, 5);
    const quad = new Quadrilateral(6, 7, 5, 9);
    expect(square instanceof Rectangle).toBe(true);
    expect(square.getPerimeter).toBe(rect.getPerimeter);
    expect(square.getPerimeter).toBe(quad.getPerimeter);
    expect(square.getArea).toBe(rect.getArea);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Square - uses inheritance properly', () => {
    const s = new Square(10);

    // a Square should only need 1 parameter
    expect(s.constructor.length).toBe(1);

    // the Square constructor should use super() to invoke the Rectangle constructor
    expect(s.constructor.toString().includes('super')).toBeTruthy();

    // string manipulation to extract arguments passed to super()
    const superCallText = s.constructor.toString().match(/super\(.*\)/g)[0];
    const argsListText = superCallText.match(/\(.*\)/g)[0];
    const argValues = argsListText.replaceAll(" ", "").slice(1, -1).split(',')

    // check to make sure that both of the arguments are the same
    expect(argValues[0]).toEqual(argValues[1]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
