const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const lines = input.slice(1).map((line)=>line.split(' '));

const grid = Array(2001).fill(0);
let cur =1000;

for(let line of lines){
    let [distance, direction]= line;
    distance=Number(distance);
    while(distance>0){
        grid[cur]++;
        distance--;
        if(direction==='R'){
                cur++;
        }else{
                cur--;
        }
    }
    
// console.log(grid.slice(980,1004).join(' '), cur)
}

console.log(grid.filter((e)=>e>=2).length)