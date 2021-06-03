// Function that counts the unique values in a sorted array of numbers.

// Params: ARRAY numbers
// Return: INTEGER

function countUniqueValues(numbers) {
    // Variable to keep track of first index
    let i = 0;

    // Returns 0 if numbers array has no values or doesn't exist
    if (numbers.length === 0 || !numbers) return 0;

    // Using pointers, we loop through until j reaches the end of the array. If the values of both positions are the same,
    // then j goes to the next index and compares again. If the values of both positions are different, then i goes to the next index
    // and changes the value at that position to the value of j's position. Then j moves to the next index and it continues.
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] !== numbers[j]) {
            i++;
            numbers[i] = numbers[j];
        }
    }

    // Finally returns where the i position stopped + 1 since it is all unique values that are aligned at the
    // beginning of the array now.
    console.log(i + 1);
    return i + 1;
}

// TESTING
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7