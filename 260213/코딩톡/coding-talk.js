const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, p] = input[0].split(' ').map(Number);
const cmd = input.slice(1).map((c)=>c.split(' '));

const ans = [];

for(let i='A'.charCodeAt(); i<'A'.charCodeAt()+n; i++){
    let isValid = true;
    for(let j=p-1; j<n; j++){
        const [c, cnt] = cmd[j];
        if(Number(cnt)===0){
            isValid = false;
            break;
        }
        if(c.charCodeAt()===i){
            isValid = false;
            break;
        }
    }
    if(isValid){
        ans.push(String.fromCharCode(i));
    }
}

ans.sort();

console.log(ans.join(' '))