const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get())

// Adder
const add = (a, b) => a + b;
const creatAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = creatAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = creatAdder(100);
console.log(add100(-90));

// Tipper

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.1);
const tip30 = createTipper(.2);
console.log(tip20(100))
console.log(tip30(100))