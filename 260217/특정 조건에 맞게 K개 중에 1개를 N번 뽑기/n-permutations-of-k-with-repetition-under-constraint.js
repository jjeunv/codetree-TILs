const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const numbers = [];

function findNumbers(cnt){
    if(cnt===n){
        console.log(numbers.join(' '));
        return;
    }

    for(let i=1; i<=k; i++){
        if(cnt>1 && numbers[cnt-1]===i && numbers[cnt-2]===i){
            continue;
        }
        numbers.push(i);
        findNumbers(cnt+1);
        numbers.pop();
    }
}

findNumbers(0);
