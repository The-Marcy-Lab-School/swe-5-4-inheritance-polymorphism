/* eslint-disable global-require */
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

// import functions from src/debug.js
const { functionOne } = require('../src/debug');

describe(testSuiteName, () => {
  test('test description', () => {
    expect(functionOne()).toBe('something');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });


  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
