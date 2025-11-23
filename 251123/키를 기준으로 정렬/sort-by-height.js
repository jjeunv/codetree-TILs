const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.


class Student{
    constructor(name, height, weight){
        this.name=name;
        this.height=height;
        this.weight=weight;
    }
}

const students = [];

for(let s of studentsInput){
    const [name, height, weight] = s;
    students.push(new Student(name, Number(height), Number(weight)));
}

students.sort((prev,cur)=>prev.height-cur.height);

for(let s of students){
    console.log(s.name, s.height, s.weight)
}