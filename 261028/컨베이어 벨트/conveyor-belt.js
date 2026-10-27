const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input.slice(1).join(' ').split(' ').map(Number);

for (let i = 0; i < t; i++) {
    let tmp = arr[n * 2 - 1];
    for(let j=n*2-1; j>0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = tmp;
}

console.log(arr.slice(0, n).join(' '));
console.log(arr.slice(n).join(' '));