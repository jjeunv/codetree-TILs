const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ");
let res = "";
const reverseArr = arr.reverse();


console.log(reverseArr.join(""));