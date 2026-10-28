const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const grid = input.slice(0, 4).map((line) => line.split(' ').map(Number));
const dir = input[4];

function slide() {
    if (dir === 'U' || dir === 'D') {
        for (let i = 0; i < 4; i++) {
            let arr = grid.map((row) => row[i]);
            let temp = [];

            for (let i = 0; i < 4; i++) {
                if (arr[i] !== 0) {
                    temp.push(arr[i]);
                }
            }

            if (dir === 'U' || dir === 'L') {
                while (temp.length != 4) {
                    temp.push(0)
                }

                let idx = 0;
                while (idx < 3) {
                    if (temp[idx] === temp[idx + 1]) {
                        temp.splice(idx + 1, 1);
                        temp[idx] *= 2;
                        temp.push(0);
                    }
                    idx++;
                }
            } else {
                while (temp.length != 4) {
                    temp.unshift(0);
                }
                let idx = 3;
                while (idx > 0) {
                    if (temp[idx] === temp[idx - 1]) {
                        temp[idx] *= 2;
                        temp.splice(idx - 1, 1);
                        temp.unshift(0);
                    }
                    idx--;
                }
            }




            for (let j = 0; j < 4; j++) {
                grid[j][i] = temp[j];
            }

        }
    } else {
        for (let i = 0; i < 4; i++) {
            let arr = grid[i];
            let temp = [];

            for (let i = 0; i < 4; i++) {
                if (arr[i] !== 0) {
                    temp.push(arr[i]);
                }
            }

            if (dir === 'U' || dir === 'L') {
                while (temp.length != 4) {
                    temp.push(0)
                }
                let idx = 0;
                while (idx < 3) {
                    if (temp[idx] === temp[idx + 1]) {
                        temp.splice(idx + 1, 1);
                        temp[idx] *= 2;
                        temp.push(0);
                    }
                    idx++;
                }
            } else {
                while (temp.length != 4) {
                    temp.unshift(0);
                }
                let idx = 3;
                while (idx > 0) {
                    if (temp[idx] === temp[idx - 1]) {
                        temp[idx] *= 2;
                        temp.splice(idx - 1, 1);

                        temp.unshift(0);
                    }
                    idx--;
                }
            }

            grid[i] = temp;

        }
    }

    for (const row of grid) {
        console.log(row.join(' '));
    }
}



slide();