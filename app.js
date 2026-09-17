function analyzeRange(start, end) {

    // Check if the range is invalid
    if (start > end) {
        return "Invalid range";
    }

    // Counters and accumulators
    let evenCount = 0;
    let oddCount = 0;
    let evenSum = 0;
    let totalSum = 0;

    // Loop from start to end
    for (let number = start; number <= end; number++) {

        // Calculate the sum of all numbers
        totalSum += number;

        // Check if the number is even
        if (number % 2 === 0) {
            evenCount++;
            evenSum += number;
        } else {
            oddCount++;
        }
    }

    // Return the summary
    return `Range: ${start} to ${end}
Even numbers: ${evenCount}
Odd numbers: ${oddCount}
Sum of even numbers: ${evenSum}
Sum of all numbers: ${totalSum}`;
}


// Store the returned value in a variable
let result = analyzeRange(1, 10);

// Print the result
console.log(result);


// ====================
// Bonus
// ====================

function countMultiples(start, end, divisor) {

    let multipleCount = 0;

    for (let number = start; number <= end; number++) {

        if (number % divisor === 0) {
            multipleCount++;
        }
    }

    return multipleCount;
}


// Store the returned value
let multiplesResult = countMultiples(1, 20, 5);

// Print the result
console.log("Number of multiples:", multiplesResult);