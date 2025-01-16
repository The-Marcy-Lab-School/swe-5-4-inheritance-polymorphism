/* eslint-disable global-require */
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

// import functions from src/from-scratch.js
const { functionOne } = require('../src/from-scratch');

describe(testSuiteName, () => {
  test('test description', () => {
    expect(functionOne()).toBe('something');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });


  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
