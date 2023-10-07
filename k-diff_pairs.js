function findKDiffPairs(nums, k) {
    let pairs = 0;
    let numFrequency = new Map();
    
    // Count the frequency of each number
    for (let num of nums) {
        if (!numFrequency.has(num)) {
            numFrequency.set(num, 0);
        }
        numFrequency.set(num, numFrequency.get(num) + 1);
    }
    
    // Iterate through the numbers
    for (let [num, freq] of numFrequency.entries()) {
        if (k === 0) {
            if (freq >= 2) {
                pairs++;
            }
        } else {
            if (numFrequency.has(num + k)) {
                pairs++;
            }
        }
    }
    
    return pairs;
}

// Example usage
let nums = [3, 1, 4, 1, 5];
let k = 2;

let result = findKDiffPairs(nums, k);
console.log(`Number of k-diff pairs: ${result}`);
