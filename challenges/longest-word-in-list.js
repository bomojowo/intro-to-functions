//Write a function that, given a list of strings, returns the string which has the greatest character count (including duplicates).

// function:
// =========
// name: longestInList
// parameter: words: list of strings
// return type: string

/**
 * Given a list of strings, returns the string which has the greatest chracter count (including duplicates).
 * @param {string} words 
 * @returns {string} - has the longest length in list
 */
// pseudo code:
// ============
function longestInList(words){
    // set longest to first string in words
    let longest = words[0];
    //console.log(longest)
    // for each string word in words
    for (let word of words){
        // 	if word has more characters than longest
        //console.log(word)
        if (word.length > longest.length){
            //set longest to word 
            longest = word;
            //console.log(longest)
        }
    }
    // return longest
    return longest;
}


// test cases:
// ===========
console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), 'should be:"Northern Ireland"')
console.log(longestInList(["the", "quick", "brown", "fox"]), 'should be "quick"')
console.log(longestInList(["hello", "hi", "greetings", "hey"]), 'should be "greetings"')
console.log(longestInList(["Orange", "Apple", "Grape", "Grapefruit"]), 'should be "Grapefruit"')
console.log(longestInList(["Bee", "Wasp", "Fly", "Spider", "Centipede", ]), 'should be "Centipede"')
console.log(longestInList(["Pen", "Sharpner", "Rubber", "Ruler"]), 'should be: "Sharpner"')