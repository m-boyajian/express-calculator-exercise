const ExpressError = require("./expressError");

// Function to build a frequency counter object from an array
function createFrequencyCounter(arr) {
    return arr.reduce(function (acc, next) {
      // If the element is not in the accumulator, initialize it to 0
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }

// Function to find the mode (most frequent element) in an array
function findMode(arr) {
  // Create a frequency counter object using the helper function
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  // Iterate over the keys in the frequency counter
  for (let key in freqCounter) {
    // If the current frequency is greater than the current count
    if (freqCounter[key] > count) {
      // Update the mostFrequent variable and count
      mostFrequent = key;
      count = freqCounter[key];
    }
  }
  // Parse the mostFrequent value to ensure it's an integer
  return parseInt(mostFrequent, 10);
}

// Function to validate an array of strings and convert them to an array of numbers
function validateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    // If the conversion is NaN, throw an ExpressError
    if (Number.isNaN(valToNumber)) {
      throw new ExpressError(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`,
        400  // Set an appropriate status code
      );
    }

    result.push(valToNumber);
  }
  return result;
}

// Function to calculate the mean (average) of an array of numbers
function findMean(nums) {
  // If the array is empty, return 0 to avoid division by zero
  if (nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    // Calculate the mean by summing up the numbers and dividing by the length
    return acc + cur;
  }) / nums.length;
}

// Function to find the median of a sorted array of numbers
function findMedian(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    // Check if the array length is even or odd to determine the median
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    // If odd, take the middle element as the median
    median = nums[middleIndex];
  }
  return median;
}

// Export the functions to be used in other modules
module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  validateNumsArray,
};
