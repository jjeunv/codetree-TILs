// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 2차원 배열을 구현합니다.
let arr2d = [];

// 각 줄마다 정수를 입력받습니다.
for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

// 색칠된 칸에 있는 원소들의 합을 구합니다.
let sum = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        sum += arr2d[i][j];
    }
}

// 출력
console.log(sum);
