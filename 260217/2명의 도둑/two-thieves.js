const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, c] = input[0].split(' ').map(Number);
const weights = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let res = 0;

let ans=0;
let weight;
let arr = []

function calMaxWeight(cnt){
    if(cnt===m){
        let sum1 = 0;
        arr.forEach((n)=>sum1+=n);
        let sum2 = 0;
        arr.forEach((n)=>sum2+=n*n)
        if(sum1<=c){
            ans = Math.max(ans, sum2);
        }
        return;
    }

    arr.push(weight[cnt]);
    calMaxWeight(cnt+1);
    arr.pop();

    calMaxWeight(cnt+1);
}

function isValid(x1, y1, x2, y2){
    if(x1===x2){
        if((y1<=y2 && y2<y1+m)||(y2<=y1 && y1<y2+m)){
            return false;
        }
    }
    if(y1>n-m || y2>n-m){
        return false;
    }
    return true;
}


function findMaxWeight(x1,y1,x2,y2){
    let sum = 0;
    weight=[];
    ans=0;
    for(let i=y1; i<y1+m; i++){
        weight.push(weights[x1][i]);
    }

    calMaxWeight(0);
        // console.log(x1, y1, x2, y2,weight, ans)
    sum+=ans;

    ans=0;
    weight=[];
    for(let i=y2; i<y2+m; i++){
        weight.push(weights[x2][i]);
    }

    calMaxWeight(0);
            // console.log(x1, y1, x2, y2,weight, ans)
    sum+=ans;
    res = Math.max(sum,res)
    // console.log(x1,y1,x2,y2, res)
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
            for(let l=0; l<n; l++){
                if(isValid(i,j,k,l)){
                    findMaxWeight(i,j,k,l);
                }
            }
        }
    }
}

console.log(res);