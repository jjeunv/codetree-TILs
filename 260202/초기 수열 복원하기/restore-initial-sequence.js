const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const sums = input[1].split(' ').map(Number);


let res = 0;

outer: for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i===j) continue;
        const ans = [];
        let curNum, startNum;
        if(i+j===sums[0]){
            startNum = i;
            curNum = j;
        }
        ans.push(startNum, curNum);
        for(let k=1; k<sums.length; k++){
            let num = sums[k]-curNum;
            if(num>0 && num<=n && ans.indexOf(num)===-1){
                ans.push(num);
                curNum = num;
            }else{
                break;
            }
        }
        if(ans.length===n){
            res = ans.join(' ');
            break outer;
        }
        
    } 
}


console.log(res)