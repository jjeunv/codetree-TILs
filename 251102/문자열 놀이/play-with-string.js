const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ");

let s = a[0];
const q = Number(a[1]);

for(let i=1; i<=q; i++){
    let res ="";
    let p = input[i].split(" ");
    if(p[0]==='1'){
        let a = Number(p[1]);
        let b = Number(p[2]);
        for(let j=0; j<s.length; j++){
            if(j===a-1){
                res+=s[b-1];
            }else if(j===b-1){
                res+=s[a-1];
            }else{
                res+=s[j];
            }
        }
    }
    else{
        let x = p[1];
        let y = p[2];
        for(let j=0; j<s.length; j++){
            if(s[j]===x){
                res+=y;
            }else{
                res+=s[j];
            }
        }
    }
    s=res;
    console.log(s)
}