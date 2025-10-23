const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const a = input[0].split(' ');
const b = input[1].split(' ');

const mathA = Number(a[0]);
const engA = Number(a[1]);
const mathB = Number(b[0]);
const engB = Number(b[1]);

console.log((mathA>mathB&&engA>engB?1:0));