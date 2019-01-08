// const Hangman = function (word, remaingGuesses) {
//     this.word = word.toLowerCase().split('');
//     this.remaingGuesses = remaingGuesses;
//     this.guessedLetters = ['c', 'e'];
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = '';
//     this.word.forEach(letter => {
//         if (this.guessedLetters.includes(letter) || letter === '') {
//             puzzle += letter;
//         } else {
//             puzzle += "*";
//         }
//     });
//     return puzzle;
// }


// const game1 = new Hangman('cat', 2);
// console.log(game1.getPuzzle());

// const game2 = new Hangman('new jersey', 3);
// console.log(game2.getPuzzle());



// declare the empty arr 
// conver the string into arr and map through,
// check to see if the index % 2 == 0, if it then push in the empty arr
// then return 


function capitalize(s) {
    let arr = [...s];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (i % 2 === 0) {
            result.push(ele.toUpperCase())
        } else if ( i % 2 !== 0 ){
            result.push(ele.toLowerCase());
        }
    }
    return result.join('');
};

console.log(capitalize("abcdef"));
//,['AbCdEf', 'aBcDeF']);