const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

function isPalindrom(number){
    const arr = Array.from(String(number),Number);
    let head, tail;
    if(arr.length%2!==0){
        head = arr.slice(0, (arr.length-1)/2);
        tail = arr.slice((arr.length-1)/2 +1); 
    }else{
        head = arr.slice(0, arr.length/2);
        tail = arr.slice(arr.length/2);
    }
    tail.reverse();
    for(let i=0; i<head.length; i++){
        if(head[i]!==tail[i]) return false;
    }
    return true;
}

let ans =0;
for(let i=x; i<=y; i++){
    if(isPalindrom(i)){
        ans++;
    }
}

console.log(ans);