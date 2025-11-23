const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Bomb{
    constructor(code, color, time){
        this.code=code;
        this.color=color;
        this.time=time;
    }
}


const bomb1 = new Bomb(u_code, l_color, time);

console.log('code :',bomb1.code);
console.log('color :',bomb1.color);
console.log('second :',bomb1.time);