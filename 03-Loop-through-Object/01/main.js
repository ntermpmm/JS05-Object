let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let salaries2 = {};
let sum = 0;

// for (let key in salaries) {
//     // sum = salaries.Ann + salaries.John + salaries.Pete;
//     console.log(key); // รอบแรก John, รอบ2 Ann รอบ3Pete
//     sum = sum + salaries[key];
//     console.log(sum);
//     // console.log(salaries[key]);
// }
// // console.log(sum);
const calcSalary = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
};

const salaries = { john: 100, ann: 160, pete: 130 };
console.log(calcSalary(salaries));
