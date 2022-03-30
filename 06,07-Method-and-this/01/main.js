let user = {
    name: "John",
    sayHi: function () {
        console.log("Hi" + this.name);
    },
};

user.sayHi(); // * John
