const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.

class Student{
    constructor(n,k,e,m){
        this.n=n;
        this.k=k;
        this.e=e;
        this.m=m;
    }
}

const students=[];

for(let d of rawStudentData){
    const [n,k,e,m] = d.split(" ");
    students.push(new Student(n,k,e,m));
}

function cmp(a,b){
    if(a.k===b.k){
        if(a.e===b.e){
            return b.m-a.m
        }
        return b.e-a.e;
    }
    return b.k-a.k;
}

students.sort(cmp);

for(let s of students){
    console.log(s.n, s.k, s.e, s.m)
}