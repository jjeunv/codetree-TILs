const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input.slice(1, n + 1).map(Number);
const inform = input.slice(n + 1).map((line) => line.split(' ').map(Number));

for (let i = 0; i < inform.length; i++) {
    const [s, e] = inform[i];

    for (let j = s - 1; j < e; j++) {
        arr[j] = 0;
    }

    const temp = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            temp.push(arr[j]);
        }
    }

    arr = [...temp];
}

console.log(arr.length);
for (const val of arr) {
    console.log(val);
}