const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

class Element{
    constructor(num,index){
        this.num=num;
        this.index=index;
    }
}

const elements = [];

for(let i=0; i<n; i++){
    elements.push(new Element(arr[i],i+1));
}

elements.sort((a,b)=>a.num-b.num);


const res= new Array(n).fill(0);



for(let i=0; i<n; i++){
    res[elements[i].index]= i+1;
}

for(let i=1; i<=n; i++){
    process.stdout.write(res[i]+" ")
}