const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function printRectangular(n){
    let cnt=1;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            process.stdout.write(cnt+" ");
            cnt++;
            if(cnt>9) cnt=1;
        }
        process.stdout.write('\n');
    }
}

printRectangular(N);