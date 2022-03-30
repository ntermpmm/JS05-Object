// function Start(name) {
//     currentValue: "เก็บค่าสะสม";
// }

function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = prompt("Enter Input") + this.currentValue;
    this.show = this.read;
}

let term = new Accumulator("TERM");
alert(term.show);
// alert(term.method);

// let user = new User("Accumulator");
// user.read = function () {
//     return prompt("") + this.currentValue;
// };
// user.show = function () {
//     alert(currentValue);
// };
// alert(user.currentValue);
