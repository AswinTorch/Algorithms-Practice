// Function to determine if second string is an anagram of the first

// Params: STRING string1, STRING string2
// Return: BOOL

// Using the frequency counter pattern, the idea would be to keep track of the frequency of each letter in 
// the strings and then comparing if they are the same in both strings. 

function validAnagram(string1, string2) {
    // Objects to keep track of frequency of letters
    let string1Counter = {}, string2Counter = {};

    // If the strings have different lengths, it's not an anagram so returns false immediately
    if (string1.length != string2.length) return false;

    // Counting the frequency of letters in both strings
    for (let letter of string1) {
        string1Counter[letter] = string1Counter[letter] ? string1Counter[letter] + 1 : 1;
    }
    for (let letter of string2) {
        string2Counter[letter] = string2Counter[letter] ? string2Counter[letter] + 1 : 1;
    }

    // LOGS
    console.log(string1Counter)
    console.log(string2Counter)

    // Comparing the frequencies
    for (let key in string1Counter) {
        if (string1Counter[key] !== string2Counter[key]) return false;
    }

    return true;

}

// TESTING
validAnagram("", ""); // true
validAnagram("aaz", "aza"); // true
validAnagram("mon", "noms"); // false
validAnagram("mans", "snam"); // true
