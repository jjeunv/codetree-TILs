const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));


function isAllSame(arr){
    const num = arr[0];
    for(let i=1; i<5; i++){
        if(num!==arr[i]){
            return false;
        }
    }
    return true;
}

let winner = 0;
let [row, col] = [-1, -1];

// Please Write your code here.
for(let i=0; i<19; i++){
    for(let j=0; j<15; j++){
        if(arr[i][j]===0){
            continue;
        }

        // 오른쪽 방향
        if(isAllSame([arr[i][j],arr[i][j+1],arr[i][j+2],arr[i][j+3],arr[i][j+4]])){
            winner = arr[i][j];
            [row, col] = [i+1, j+3];
            break;
        }

        // 아래 방향
        if(i<15){
            if(isAllSame([arr[i][j], arr[i+1][j], arr[i+2][j], arr[i+3][j], arr[i+4][j]])){
                winner = arr[i][j];
                [row, col] = [i+3, j+1];
                break;
            }
        }

        // 오른쪽 위 대각선 방향
        if(i>=4){
            if(isAllSame([arr[i][j], arr[i-1][j+1], arr[i-2][j+2], arr[i-3][j+3], arr[i-4][j+4]])){
                winner = arr[i][j];
                [row, col] = [i-1, j+3];
                break;
            }
        }

        // 오른쪽 아래 대각선 방향
        if(i<15)
            if(isAllSame([arr[i][j], arr[i+1][j+1], arr[i+2][j+2], arr[i+3][j+3], arr[i+4][j+4]])){
                winner = arr[i][j];
                [row, col] = [i+3, j+3];
                break;
            }
    }
}

console.log(winner);
if(winner!==0){
    console.log(row, col);
}