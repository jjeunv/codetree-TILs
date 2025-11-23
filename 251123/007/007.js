const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.


class Secret{
    constructor(s,m,t){
        this.s = s;
        this.m=m;
        this.t=t;
    }
}

const secret1 = new Secret(s_code,m_point,time);

console.log(`secret code : ${secret1.s}\nmeeting point : ${secret1.m}\ntime : ${secret1.t}`)