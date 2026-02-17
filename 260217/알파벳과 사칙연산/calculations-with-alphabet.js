const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

const alphabet=[];
const symbol = [];
const nums = [];

for(let i=0; i<expression.length; i++){
    const num = expression[i].charCodeAt();
    if('a'.charCodeAt()<=num && num<='f'.charCodeAt()){
        alphabet.push(expression[i]);
    }else{
        symbol.push(expression[i]);
    }
}

function calc(){
    while(symbol.length!==0){
        const a = nums.shift();
        const b = nums.shift();
        const s = symbol.shift()
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
        nums.
    }
}

function chooseNumber(cnt){
    if(cnt===alphabet.length){

        return;
    }

    for(let i=1; i<=4; i++){
        nums.push(i);
        chooseNumber(cnt+1);
        nums.pop();
    }
}