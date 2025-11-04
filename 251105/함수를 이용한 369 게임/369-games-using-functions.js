const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function multiple3(n){
    return n%3===0;
}

function include369(n){
    const str = n.toString();
    for(let i=0; i<str.length; i++){
        if(str[i]==='3' || str[i]==='6' || str[i]==='9')
        return true;
    }
    return false;
}

let cnt=0;

for(let i=A; i<=B; i++){
    if(include369(i)||multiple3(i)) {
        cnt++;
    }
}

console.log(cnt)