const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = input.slice(1).map(Number);

let flag = true;

while (flag) {
    flag = false;
    if(arr.length===0) break;

    let starts = [];
    let cnts = [];
    let startIdx = 0;
    let cnt = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[startIdx]) {
            if (cnt >= m) {
                flag = true;
                starts.push(startIdx);
                cnts.push(cnt);
                // arr = arr.slice(0, startIdx).concat(arr.slice(startIdx + cnt));
            }
            startIdx = i;
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt >= m) {
        flag = true;
        starts.push(startIdx);
        cnts.push(cnt);
        // arr = arr.slice(0, startIdx).concat(arr.slice(startIdx + cnt));
    }

    for (let i = 0; i < starts.length; i++) {
        const [start, cnt] = [starts[i], cnts[i]];
        for (let j = start; j < start + cnt; j++) {
            arr[j] = 0;
        }
    }
    // console.log(starts);
    // console.log(cnts);

    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    arr = [...temp];
    // for (const val of arr) {
    //     console.log(val);
    // }
    // console.log();
}

console.log(arr.length);
for (const val of arr) {
    console.log(val);
}