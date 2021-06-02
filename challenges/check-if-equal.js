// function:
// =========
// name: isEqual
// parameter a: number
// parameter b: number
// return: boolean

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
console.log('isEqual(0, 0)', isEqual(0, 0), 'should be True');
console.log('isEqual(-4, -4)', isEqual(-4, -4), 'should be True');
console.log('sEqual(4, -4)',isEqual(4, -4), 'should be False');
console.log('isEqual(0, 1)', isEqual(0, 1), 'should be False');