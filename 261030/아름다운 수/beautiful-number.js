const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0].trim());
let selected = [];
let numOfBeautiful = 0;

function isBeautiful() {
    let curNum = selected[0];
    let curCnt = 1;

    for (let i = 1; i < selected.length; i++) {
        if (selected[i] !== selected[i - 1]) {
            if (curCnt % curNum !== 0) {
                return false;
            }
            curNum = selected[i];
            curCnt = 1;
        } else {
            curCnt++;
        }
    }

    if (curCnt % curNum !== 0) {
        return false;
    }

    return true;
}

function choose(currNum) {
    if (currNum === n) {
        if (isBeautiful()) {
            // console.log(selected)

            numOfBeautiful++;
        }
        return;
    }

    for (let i = 1; i <= 4; i++) {
        selected.push(i);
        choose(currNum + 1);
        selected.pop();
    }
}

choose(0);
console.log(numOfBeautiful);