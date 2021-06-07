//Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

// function:
// =========
// name: isEqual
// parameter a: number
// parameter b: number
// return: boolean

/**
 * Given two numbers, returns a boolean representing whether or not the two numbers are equal
 * @param {number} a -input number
 * @param {number} b -input number
 * @returns {boolean} -true or false
 */

// pseudo code:
// ============
function isEqual(a,b){
// if a is equal to b
    if(a === b){
        // 	return True
        return true;
        // else
    }else {
        // 	return False
        return false;
    }
}

//test cases:
//===========
console.log('isEqual(4,4):',isEqual(4, 4), 'should be True');
console.log('isEqual(0, 0):', isEqual(0, 0), 'should be True');
console.log('isEqual(-4, -4):', isEqual(-4, -4), 'should be True');
console.log('sEqual(4, -4):',isEqual(4, -4), 'should be False');
console.log('isEqual(0, 1):', isEqual(0, 1), 'should be False');
console.log('isEqual(100, -100):', isEqual(100, -100), 'should be false');
console.log('isEqual(0, 00):', isEqual(0, 00), 'should be True');
console.log('isEqual(4, 44:)', isEqual(4, 44), 'should be False')