const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            let area;
            const [x1,y1] = points[i], [x2,y2] = points[j], [x3,y3]= points[k];

            if(y1===y2 && (x1===x3|| x2===x3)){
                area = Math.abs((x2-x1)*(y3-y1)/2);
            }
            else if(x1===x2 && (y1===y3|| y2===y3)){
                area = Math.abs((y2-y1)*(x3-x1)/2);
            }else{
                continue;
            }

            ans = Math.max(ans,area);
        }
    }
}

console.log(ans*2);