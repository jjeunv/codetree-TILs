const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const lines = input.slice(1).map((line)=>line.split(' '));

const grid = Array(2001).fill(0);
let cur =1000;

for(let line of lines){
    let [distance, direction]= line;
    distance=Number(distance);
    for(let i=0; i<distance; i++){
      if(direction==='R'){
        grid[cur]++;
        cur++;
      }else{
        cur--;
        grid[cur]++;
      }
    }
}
console.log(grid.filter((e)=>e>=2).length)