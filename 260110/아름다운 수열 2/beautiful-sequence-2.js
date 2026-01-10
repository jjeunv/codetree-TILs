const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

const beauty = [];
for(let i=0; i<m; i++){
    beauty.push([...arr2]);
    const cur = [...arr2];
    beauty.push(cur.reverse());
    const num = arr2.shift(); 
    arr2.push(num);
}



let ans = 0;
// Please write your code here.
for(let i=0; i<n-m+1; i++){
    const curArr = [];
    for(let j=i; j<i+m; j++){
        curArr.push(arr1[j]);
    }
     for(let b of beauty){
        let flag = true;
        for(let k=0; k<b.length; k++){

            if(curArr[k]!==b[k]){
                flag = false;
                break;
            }
        }
        if(flag){ 
            ans++;
            break;
        }
     }
}

console.log(ans)