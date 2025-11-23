const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());

// Please write your code here.

class Student{
    constructor(n,a,b,c){
        this.n=n;
        this.a=a;
        this.b=b;
        this.c=c;
    }
}

const students=[];
for(let d of input){
    const [n,a,b,c]= d.split(" ");
    students.push(new Student(n,Number(a),Number(b),Number(c)));
}

students.sort((p,c)=>(p.a+p.b+p.c)-(c.a+c.b+c.c));

for(let s of students){
    console.log(s.n,s.a,s.b,s.c)
}