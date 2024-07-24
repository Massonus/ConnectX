// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
    return Math.min(...arr);
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    const diameter = circle.radius * 2;
    return diameter * Math.PI;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const resultArray = [];
    for (const objKey in obj) {
        if (objKey.length === 5) resultArray.push(objKey);
        if (obj[objKey].length === 5) resultArray.push(obj[objKey]);
    }
    return resultArray;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
    const res = [];

    for (let i = 0; i < n; i++) {
        res.push(function () {
            console.log(i);
            return i;
        });
    }
    return res;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
