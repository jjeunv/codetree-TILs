const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

let v=1;
while((v+1)*(v+1)<=x){
    v+=1;
}   

let t = v;
let distance = v*(v+1)/2;

while(distance!==x){
    if(v*(v+1)/2 <= x-distance){
        distance+=v;
        t+=1;
    }else{
        v-=1;
        distance+=v;
        t+=1;
    }
}

console.log(t)