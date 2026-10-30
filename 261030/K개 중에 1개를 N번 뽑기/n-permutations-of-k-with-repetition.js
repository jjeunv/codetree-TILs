const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].trim().split(' ').map(Number);
const numbers = [];

function printAnswer() {
    console.log(numbers.join(' '));
}

function choose(currNum) {
    if (currNum === n + 1) {
        printAnswer();
        return;
    }

    for (let i = 1; i <= k; i++) {
        numbers.push(i);
        choose(currNum + 1);
        numbers.pop();
    }
}

choose(1);