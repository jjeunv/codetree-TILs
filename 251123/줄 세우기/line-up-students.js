const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

class Student{
    constructor(h,w,n){
        this.h=h;
        this.w=w;
        this.n=n;
    }
}

const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

function cmp(a,b){
    if(a.h===b.h){
        if(a.w===b.w){
            return a.n-b.n;
        }
        return b.w-a.w;
    }
    return b.h-a.h;
}

students.sort(cmp);

students.forEach((s)=>{
    console.log(s.h,s.w,s.n)
})