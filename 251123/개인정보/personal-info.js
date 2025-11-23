const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student{
    constructor(n,h,w){
        this.n=n;
        this.h=h;
        this.w=w;
    }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Student( name, height, weight ));
}


students.sort((a,b)=>{
    if(a.n<b.n) return -1;
    if(a.n>b.n) return 1;
    return 0;
})

console.log("name");
students.forEach((s)=> console.log(s.n,s.h,s.w));

console.log()
students.sort((a,b)=>b.h-a.h);

console.log("height");
students.forEach((s)=> console.log(s.n,s.h,s.w));