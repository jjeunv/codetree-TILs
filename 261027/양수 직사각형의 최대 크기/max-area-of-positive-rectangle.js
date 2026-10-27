const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line)=>line.split(' ').map(Number));

function findArea(x1, y1, x2, y2){
    for(let i=x1; i<=x2; i++){
        for(let j=y1; j<=y2; j++){
            if(grid[i][j]<=0){
                return -1;
            }
        }
    }
    return (x2-x1+1)*(y2-y1+1);
}

function findAreaMax(){
    let maxArea = -1;

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            for(let k=i; k<n; k++){
                for(let l=j; l<m; l++){
                    maxArea = Math.max(maxArea, findArea(i, j, k , l));
                }
            }
        }
    }

    return maxArea;
}

const ans = findAreaMax();
console.log(ans);