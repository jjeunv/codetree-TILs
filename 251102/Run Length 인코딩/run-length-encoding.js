const fs= require("fs");
const str = fs.readFileSync(0).toString().trim();

let s = str[0];
let cnt=0;

let res ="";
for(let i=0; i<str.length; i++){
    if(s===str[i]){
        cnt++;
    }else{
        res+=(s+cnt);
        s=str[i];
        cnt=1;
    }
}
res+=(s+cnt);

console.log(res.length);
console.log(res)