const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, p] = input[0].split(' ').map(Number);
const cmd = input.slice(1).map((c)=>c.split(' '));

if(Number(cmd[p-1][1]===0)){
    process.exit();
}

let result = "";

for(let i=0; i<n; i++){
    const person = String.fromCharCode('A'.charCodeAt(0)+i);
    let read = false;

    cmd.forEach(([c, u])=>{
        u = Number(u);
        if(u>=Number(cmd[p-1][1]) && c === person){
            read = true;
        }
    })

    if(!read){
        result+=`${person} `;
    }
}

console.log(result.trim());