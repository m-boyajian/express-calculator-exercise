const express = require('express');
const app = express();
const ExpressError = require("./expressError")
const {
  validateNumsArray,
  findMode,
  findMean,
  findMedian,
} = require('./helpers');

app.get('/mean', function (request, response) {
  const nums = request.query.nums;

  if (!nums) {
    throw new ExpressError('Numbers are required', 400);
  }

  const numbers = validateNumsArray(nums.split(','));

  const mean = findMean(numbers);
  response.json({ operation: 'mean', value: mean });
});

app.get('/median', function (request, response) {
  const nums = request.query.nums;

  if (!nums) {
    throw new ExpressError('Numbers are required', 400);
  }

  const numbers = validateNumsArray(nums.split(','));

  const median = findMedian(numbers);
  response.json({ operation: 'median', value: median });
});

app.get('/mode', function (request, response) {
  const nums = request.query.nums;

  if (!nums) {
    throw new ExpressError('Numbers are required', 400);
  }

  const numbers = validateNumsArray(nums.split(','));

  const modeValues = findMode(numbers);
  response.json({ operation: 'mode', value: modeValues });
});

app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
