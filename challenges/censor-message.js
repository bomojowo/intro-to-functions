// function:
// =========
// name: censorMessage
// parameter: message: string
// parameter: banList: list of strings
// return type: string
// pseudo code:
// ============
function censorMessage(message, banList){
    //console.log(banList)
    // set rawWords to the list of strings created by separating the string message into sub-strings at every space (' ')
    let rawWords = message.split(' ');
    //console.log(rawWords)
    // set scrubbedWords to an empty list
    let scrubbedWords = [];
    // for each string word in rawWords
    for (stringWord of rawWords){
        // 	set lowercaseWord to lowercase(word)
        let lowercaseWord = stringWord.toLowerCase();
        //console.log(lowercaseWord)
        //  if lowercaseWord is contained in the list banList
        if (banList.includes(lowercaseWord)){
            //  insert the string '*****' at the end of scrubbedWord
            scrubbedWords.push('*****');
            //console.log(scrubbedWords)
        } else{
        //else
        //   insert word at the end of scrubbedWords
            scrubbedWords.push(stringWord)
            //console.log(scrubbedWords)
        }
        //set scrubbedMessage to the string created by joining together every string in scrubbedWords with a space (' ') as a join character
        scrubbedMessage = scrubbedWords.join(' ');
        //console.log(scrubbedMessage)
    }
    // return scrubbedMessage
    return scrubbedMessage;
    
}

// test cases:
// ===========
console.log(censorMessage("don't mess with cats", ["mess"]), 'should be "don\'t ***** with cats"')
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), 'should be "***** you sure that this ***** safe"')
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), 'should be "I CANNOT ***** *****"')
console.log(censorMessage("the Bat sat on the mat", ["bat", "sat", "mat"]), 'should be "the ***** ***** on the *****"')
console.log(censorMessage("Melon or Watermelon ?", ["melon", "watermelon"]), 'should be "***** or ***** ?"')
console.log(censorMessage("What time should I come over ?", ["what", "I"]), 'should be "***** time should ***** come over ?"')