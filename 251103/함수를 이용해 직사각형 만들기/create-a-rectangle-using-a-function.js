const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

function printRectangular(n,m){
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            process.stdout.write('1');
        }
        process.stdout.write('\n');
    }
}

printRectangular(n,m);