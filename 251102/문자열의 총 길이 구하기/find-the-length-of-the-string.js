const fs =require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");

let cnt =0;
for(let i=0; i<input.length; i++){
    cnt+=input[i].length;
}

console.log(cnt)