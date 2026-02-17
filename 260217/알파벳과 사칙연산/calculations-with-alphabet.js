const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

const alphabet=[];
const symbol = [];
const nums = [];

for(let i=0; i<expression.length; i++){
    const num = expression[i].charCodeAt();
    if('a'.charCodeAt()<=num && num<='z'.charCodeAt()){
        alphabet.push(expression[i]);
    }else{
        symbol.push(expression[i]);
    }
}

function calc(){
    const arr = [...nums];
    const sym = [...symbol];
    while(sym.length!==0){
        const a = arr.shift();
        const b = arr.shift();
        const s = sym.shift()
        let res;

        switch (s){
            case '+':
                res = a+b;
                break;
            case '-':
                res = a-b;
                break;
            case '*':
                res = a*b;
                break;
        }
        arr.unshift(res);
    }
    return arr.shift();
}

let ans = Number.MIN_SAFE_INTEGER;

function chooseNumber(cnt){
    if(cnt===alphabet.length){
        ans = Math.max(ans, calc());
        return;
    }

    for(let i=1; i<=4; i++){
        nums.push(i);
        chooseNumber(cnt+1);
        nums.pop();
    }
}

chooseNumber(0);
console.log(ans);
