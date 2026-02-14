const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = [];

let ans = 0;

function isBeautifulNumber(){
    let index = 0;
    while(true){
        if(index>=n) break;
        let cnt = 1;
        for(let j=index+1; j<n; j++){
            if(arr[index]!==arr[j]){
                break;
            }else{
                cnt+=1;
            }
        }
        if(cnt%arr[index]!==0){
            return false;
        }
        index+=cnt;
    }
    return true;
}
function choose(currNum){
    if(currNum===n+1){
        if(isBeautifulNumber()){
            ans+=1;
        }
        return;
    }
    
    for(let i=1; i<=4; i++){
        arr.push(i);
        choose(currNum+1);
        arr.pop();
    }
}

choose(1);

console.log(ans);