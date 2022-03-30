// let key = prompt("Enter key");
// if (key !== "stop") {
//     let value = prompt("Enter value");
//     if (value !== "stop") {
//         while (key !== "stop" && value !== "stop") {}
//     }
// }

let result = {};
while (1) {
    let key = prompt("Enter key");
    if (key === "stop") break;
    let value = prompt("Enter value");
    if (value === "stop") break;
    result[key] = value;
}
console.log(result);
