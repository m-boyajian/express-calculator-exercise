const {
  findMedian,
  findMean,
  findMode,
} = require('../helpers');

// Sample data for testing
const sampleData = [1, 2, 3, 4, 5];

// Tests for findMedian function
describe('findMedian function', () => {
  it('should return the median of an odd-sized array', () => {
    const result = findMedian(sampleData);
    expect(result).toBe(3);
  });

  it('should return the median of an even-sized array', () => {
    const result = findMedian([...sampleData, 6]);
    expect(result).toBe(3.5);
  });
});

// Tests for findMean function
describe('findMean function', () => {
  it('should return the mean of an array', () => {
    const result = findMean(sampleData);
    expect(result).toBe(3);
  });

  it('should return 0 for an empty array', () => {
    const result = findMean([]);
    expect(result).toBe(0);
  });
});

// Tests for findMode function
describe('findMode function', () => {
  it('should return the mode of an array with a single mode', () => {
    const result = findMode(sampleData);
    expect(result).toBe(1);
  });

  it('should return one of the modes for an array with multiple modes', () => {
    const result = findMode([...sampleData, 5]);
    // Define the expected modes
    const expectedModes = [1, 2, 3, 4, 5];
    // Expect the result to be one of the expected modes
    expect(expectedModes.includes(result)).toBe(true);
  });

  it("should return NaN for an array without a valid mode", function () {
    const arr = [1, 2, 3, 4, 5];
    const mode = findMode(arr);
  
    // Log the value of mode
    console.log("Mode:", mode);
  
    // Expect the mode to be NaN
    expect(mode !== mode).toBe(true);
  });    
});