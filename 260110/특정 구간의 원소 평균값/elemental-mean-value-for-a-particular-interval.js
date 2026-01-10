const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let ans = 0;
for(let i = 0; i<n; i++){
    for(let j=i; j<n; j++){
        let num = [];
        let sum = 0;
        for(let k=i; k<j+1; k++){
            num.push(arr[k]);
            sum+=arr[k];
        }
        let avg = sum/num.length;

        for(let n of num){
            if(n===avg){
                ans++;
                break;
            }
        }

    }
}

console.log(ans)