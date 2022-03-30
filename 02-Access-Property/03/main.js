const product1 = {
    name: "Water",
    distributor: {
        name: "Giraffe Water Company",
        address: {
            street: "Phetchaburi",
            subdistrict: "Thanonphetchaburi",
            district: "Ratchathewi",
            province: "Bangkok",
        },
    },
};

console.log(product1?.distributor?.address?.province);

// const g = "distributo";
let product2 = {};

// for (let k in g) {
//     product2 = {
//         name: "Water",
//         distributor: {
//             name: "Giraffe Water Company",
//             address: {
//                 street: "Phetchaburi",
//                 subdistrict: "Thanonphetchaburi",
//                 district: "Ratchathewi",
//                 province: "Bangkok",
//             },
//         },
//     };
// }
console.log(product2?.distributor?.address?.province?.());
