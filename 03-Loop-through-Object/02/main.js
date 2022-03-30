let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj, num) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = num * obj[key];
        } else {
            result[key] = obj[key];
        }
        return obj;
        // if (menu[key] !== Number) {
        //     sum = [key] + ":" + menu[key] * num;
        //     console.log(sum);
        //     // console.log(key);
        // } else {
        //     console.log(sum);
        // }
    }
}

const testObj = { width: 200, height: 300, title: "MY menu" };
const resultObj = multiplyNumeric(testObj, 3);
console.log(testObj);
console.log(resultObj);
