const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));

let ans =0;

for(let i=1; i<=9; i++){
    for(let j=i+1; j<=9; j++){
        let win = false;

        // 가로선
        for(let k=0; k<3; k++){
            let [cnti, cntj] = [0,0];
            for(let l=0; l<3; l++){
                if(board[k][l]===i){
                    cnti+=1;
                }else if(board[k][l]===j){
                    cntj+=1;
                }
            }
            if(cnti!==0 && cntj!==0 && cnti+cntj===3){
                win = true;
                break;
            }
        }
        if(win){
            ans++;
            continue;
        }

        win = false;

        // 세로선
        for(let k=0; k<3; k++){
            let [cnti, cntj] = [0,0];
            for(let l=0; l<3; l++){
                if(board[l][k]===i){
                    cnti+=1;
                }else if(board[l][k]===j){
                    cntj+=1;
                }
            }
            if(cnti!==0 && cntj!==0 && cnti+cntj===3){
                win = true;
                break;
            }
        }    
        if(win){
            ans++;
            continue;
        }


        // 대각선
        let [cnti, cntj]= [0,0];
        let index = 0;
        for(let k=0; k<3; k++){
            if(board[index][index]===i){
                cnti+=1;
            }else if(board[index][index]===j){
                cntj+=1;
            }
            index+=1;
        }
        if(cnti!==0 && cntj!==0 && cnti+cntj===3){
            ans++;
            continue;
        }

        [cnti, cntj]= [0,0];
        index = 2;
        for(let k=0; k<3; k++){
            if(board[k][index]===i){
                cnti+=1;
            }else if(board[k][index]===j){
                cntj+=1;
            }
            index-=1;
        }
        if(cnti!==0 && cntj!==0 && cnti+cntj===3){
            ans++;
            continue;
        }
    }
}

console.log(ans);