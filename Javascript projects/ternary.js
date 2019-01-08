// const myAge = 7
// let message = myAge >= 18 ? "YOU CAN VOTE" : "YOU CANNOT VOTE";
// console.log(message);

const myAge = 27
const showPage = () => {
    return 'showing the page';
}
const showErrorPage = () => {
    return 'showing the error';
}
const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Tyler', 'Porter', 'karma', 'drukpa', 'jee'];

console.log( team.length >= 4 ?  `Team size: ${team.length}` : 'To many people on you team')