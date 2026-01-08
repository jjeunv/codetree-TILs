const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n);

// Please Write your code here.
function carry(arr){
    const nums = Array.from({length:n}, ()=>Array(0));
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            nums[j].push(Number(arr[i][arr[i].length-j-1]))
        }

    }

    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=0; j<nums[i].length; j++){
            sum+=nums[i][j];
        }
        if(sum>=10){
            return -1;
        }
    }

    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=Number(arr[i]);
    }
    return sum;
}


let ans = -1;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            ans = Math.max(ans, carry([arr[i], arr[j], arr[k]]))
        }
    }
}

console.log(ans)
