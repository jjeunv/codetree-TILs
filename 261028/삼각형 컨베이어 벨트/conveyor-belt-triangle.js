const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input.slice(1).join(' ').split(' ').map(Number);

for(let i=0; i<t; i++){
    let temp = arr[3*n-1];

    for(let j=3*n-1; j>0; j--){
        arr[j]=arr[j-1];
    }

    arr[0] = temp;
}

console.log(arr.slice(0, n).join(' '));
console.log(arr.slice(n, 2*n).join(' '));
console.log(arr.slice(2*n).join(' '));