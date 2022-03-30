// { apple: 1, oranges: 2}

let result = {};
while (1) {
    let key = prompt("Enter key");
    if (key === "stop") break;
    let value = prompt("Enter value");
    if (value === "stop") break;
    if (value > 1) {
    result[key + 's'] = value;
} else {
    result[key] = value
}
console.log(result);