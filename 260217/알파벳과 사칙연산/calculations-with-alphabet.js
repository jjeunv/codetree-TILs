const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

const alphabet=[];
const symbol = [];
const match_nums = [];

for(let i=0; i<expression.length; i++){
    const num = expression[i].charCodeAt();
    if('a'.charCodeAt()<=num && num<='z'.charCodeAt()){
        alphabet.push(expression[i]);
    }else{
        symbol.push(expression[i]);
    }
}
function calc(){

}
function calc(){
    const arr = [];
    const sym = [...symbol];
    for(let i=0; i<alphabet.length; i++){
        arr.push(match_nums[alphabet[i].charCodeAt()-'a'.charCodeAt()]);
    }
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
    if(cnt===6){
        ans = Math.max(ans, calc());
        return;
    }

    for(let i=1; i<=4; i++){
        match_nums.push(i);
        chooseNumber(cnt+1);
        match_nums.pop();
    }
}

chooseNumber(0);
console.log(ans);
