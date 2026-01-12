const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);

// Please Write your code here.
let sum = 0;
arr.forEach((num)=>{
    sum+=num;
})

let ans = 5000;
for(let i=0; i<5; i++){
    for(let j=i+1; j<5; j++){
        for(let k=0; k<5; k++){
            if(k===i|| k===j) continue;
            let t1=arr[i]+arr[j];
            let t2 = arr[k];
            let t3 = sum-(arr[i]+arr[j]+arr[k]);
            if(t1===t2 || t2===t3 || t3===t1) continue;
            ans = Math.min(ans, Math.max(t1,t2,t3)-Math.min(t1,t2,t3));
        }
    }
}

console.log(ans===5000?-1:ans);