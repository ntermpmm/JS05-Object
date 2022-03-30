let name = prompt("Enter name");
let amout = prompt("Enter amout");
let price = prompt("Enter price");
let discount = prompt("Enter discount");

const product = {
    name,
    amount,
    price,
};

if (discount > 0) {
    product.discount = discount;
}

const calcPrice = (obj) => {
    // if (obj.discount) {
    //     return obj.price * obj.amout * (1 - obj.discount / 100);
    // }
    return obj.price * obj.amout * (1 - (obj.discount || 0) / 100);
};
