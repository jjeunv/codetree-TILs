const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

const arrS = Array(1001).fill(0);
const arrN = Array(1001).fill(0);

for(let i=0; i<t; i++){
    const [alphabet, x] = snData[i];
    if(alphabet==='S'){
        arrS[x] = 1;
    }else{
        arrN[x] = 1;
    }
}

let ans =0;

for(let i=a; i<=b; i++){
    let d1= 1000, d2 = 1000;
    for(let j=a; j<=b; j++){
        if(arrS[j]===1){
            d1 = Math.min(d1, Math.abs(i-j));
        }
        if(arrN[j]===1){
            d2 = Math.min(d2, Math.abs(i-j));
        }
    }
    if(d1<=d2){
        ans++;
    }
}
 
 
console.log(ans);