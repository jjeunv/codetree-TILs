const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [k,n] = input[0].split(" ").map(Number);

const arr = [];

function printAnswer(){
    console.log(arr.join(' '));
}

function choose(currNum){
    if(currNum===n+1){
        printAnswer();
        return;
    }

    for(let i=1; i<=k; i++){
        arr.push(i);
        choose(currNum+1);
        arr.pop();
    }
}

choose(1);