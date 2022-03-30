let calculator = {
    read(input1, input2) {
        this.input1 = +prompt("enter number");
        this.input2 = +prompt("enter number");
    },
    sum() {
        return this.input1 + this.input2;
    },
    mul() {
        return this.input1 * this.input2;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
