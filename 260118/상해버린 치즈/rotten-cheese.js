const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);
const eating_record = input.slice(1, d+1).map((r)=> r.split(' ').map(Number));
const painful_record = input.slice(d+1).map((r)=>r.split(' ').map(Number));

// 상한 치즈 후보
const cheese = [];
for(let i=0; i<s; i++){
    const [p1, t1] = painful_record[i]; 
    eating_record.forEach(([p2,m,t2])=>{
        if(p1===p2 && t2<t1 && cheese.indexOf(m)===-1){
            cheese.push(m);
        }
    })
}

// 아픈 사람 후보
const people = [];
eating_record.forEach(([p, m, t])=>{
    if(cheese.indexOf(m)!==-1 && people.indexOf(p)===-1){
        people.push(p);
    }
})

console.log(people.length)