//// 1. Sum Zero ////

const addToZero = (arr) => {
    let solution = false;
    for( let i = 0; i < arr.length; i++){
        for( let j = 0; j < arr.length; j++){
            if(i !== j ){
                if(arr[i] + arr[j] === 0){
                    solution = true;
                }
            }
        }
    }
    return solution
}

console.log(addToZero([28, 43, -12, 30, 4, 0, 12]))

///Runtime = O(n^2)
///Space Complexity = O(1)


//// 2. Unique Characters ////

const hasUnique = (string) => {
    
    let set_string = new Set(string);
    if(set_string.size === string.length){
        return true
    }
    return false
}

console.log(hasUnique('moonday'))

///Runtime = O(n)
///Space Complexity = O(1)


//// 3. Pangram Sentence ////

const isPangram = (string) => {
    let lowerCase = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for( let i = 0; i < alphabet.length; i++){
        if (lowerCase.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

///Runtime = O(n)
///Space Complexity = O(1)


//// 4. Longest Word ////

const findLongestWord = (array) => {
    let maxLength = 0
    for(let i = 0; i < array.length; i++){
        if(array[i].length > maxLength){
            maxLength = array[i].length;
        }
    }
    return maxLength
}

console.log(findLongestWord(["hi", "hello", "chicken"]))

///Runtime = O(n)
///Space Complexity = O(1)
