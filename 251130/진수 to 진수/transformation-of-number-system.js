const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1].split('').map(Number);
// Please Write your code here.

let num = 0;
n.forEach((bit)=>{
    num=num*a+bit;
})

let arr=[];
while(true){
    if(num<b){
        arr.push(num);
        break;
    }
    arr.push(num%b);
    num=Math.floor(num/b);
}

console.log(arr.reverse().join(""))