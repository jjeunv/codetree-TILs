const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

let ans = Math.abs(a-b);
ans = Math.min(ans, Math.abs(a-x)+Math.abs(b-y));
ans = Math.min(ans, Math.abs(a-y)+Math.abs(b-x));

console.log(ans);
