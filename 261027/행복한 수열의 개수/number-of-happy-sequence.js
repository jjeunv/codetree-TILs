const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line)=>line.split(' ').map(Number));

// 가로(행)
function isHappyRow(x){
    let curCntNum = 1;

    for(let y=0; y<n-1; y++){
        if(arr[x][y] === arr[x][y+1]){
            curCntNum++;
        }else{
            curCntNum = 1;
        }
        
        if(curCntNum >= m) return true;
    }

    return false;
}

// 세로(열)
function isHappyCol(y){
    let curCntNum = 1;

    for(let x=0; x<n-1; x++){
        if(arr[x][y]===arr[x+1][y]){
            curCntNum++;
        }else{
            curCntNum = 1;
        }

        if(curCntNum >= m) return true;
    }

    return false;
}

let cntNum = 0;

for(let i=0; i<n; i++){
    if(m===1) cntNum += 2;

    else{
        if(isHappyRow(i)) cntNum++;
        if(isHappyCol(i)) cntNum++;
    }
}

console.log(cntNum);