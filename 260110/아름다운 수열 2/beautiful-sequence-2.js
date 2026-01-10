const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// 아름다운 수
const beauties = [];
for(let i=0; i<m; i++){
    for(let j=0; j<2; j++){
        beauties.push([...arr2]);
        arr2.reverse()
    }
    arr2.push(arr2.shift())
}

function isSame(arr){
    for(let beauty of beauties){
        let flag = true;
        for(let i=0; i<m; i++){
            if(arr[i]!==beauty[i]){
                flag = false;
                break;
            }
        }
        if(flag){
            return true;
        }
    }
    return false;
}

let ans = 0;

console.log(beauties);
console.log('-----------------------------')
for(let i=0; i<n-m+1; i++){
    const curArr = [];
    for(let j=i; j<i+m; j++){
        curArr.push(arr1[j]);
    }
    if(isSame(curArr)){
        console.log(curArr)
        ans++;
    }
}


console.log(ans)