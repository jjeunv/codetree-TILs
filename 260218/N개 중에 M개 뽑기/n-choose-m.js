const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [];

function choose(cnt, prevNum){
    if(cnt===m){
        console.log(arr.join(' '));
        return;
    }

    for(let i=1; i<=n; i++){
        if(arr.indexOf(i)!==-1) continue;
        if(prevNum<i){
            arr.push(i);
            choose(cnt+1, i);
            arr.pop();
        }
    }
}

choose(0,0);

