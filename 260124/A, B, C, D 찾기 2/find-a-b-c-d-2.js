const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);

numbers.sort((a,b)=>a-b);

function isValid(a,b,c,d){
    const arr = [];
    arr.push(a,b,c,d,a+b,b+c,c+d,d+a,a+c,b+d,a+b+c,a+b+d,a+c+d,b+c+d,a+b+c+d);
    arr.sort((a,b)=>a-b);
    for(let i=0; i<numbers.length; i++){
        if(arr[i]!==numbers[i]){
            return false;
        }
    }    
    return true;
}
outer: for(let a=1; a<=40; a++){
    for(let b=a; b<=40; b++){
        for(let c=b; c<=40; c++){
            for(let d=c; d<=40; d++){
                if(isValid(a,b,c,d)){
                    console.log(a,b,c,d);
                    break outer;
                }
            }
        }
    }
}