const puzzleEle = document.querySelector('#puzzle');
const guessesEle = document.querySelector("#guesses");
const game1 = new Hangman('Car Parts', 2);

puzzleEle.textContent = game1.puzzle;
guessesEle.textContent = game1.statusMessage;
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess);
    puzzleEle.textContent = game1.puzzle;
    guessesEle.textContent = game1.statusMessage;
  
});