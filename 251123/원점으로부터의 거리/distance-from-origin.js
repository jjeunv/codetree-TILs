const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());

// Please Write your code here.
class Point{
    constructor(x,y,n){
        this.x=x;
        this.y=y;
        this.n=n;
    }
}

const points=[];
for(let i=0; i<n; i++){
    const [x,y]= input[i].split(" ").map(Number);
    points.push(new Point(x,y,i+1));
}

function distance(a){
    return Math.abs(a.x)+Math.abs(a.y)
}
function cmp(a,b){
    return distance(a)-distance(b);
}

points.sort(cmp);

points.forEach((p)=>{
    console.log(p.n)
})