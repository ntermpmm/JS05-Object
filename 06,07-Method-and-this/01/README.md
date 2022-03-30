ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร

```js
let user = {
    name: "John",
    sayHi: function () {
        console.log("Hi" + this.name);
    },
};

user.sayHi(); // * John
```
