const fs= require("fs");
const input = fs.readFileSync(0).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if(a>b && a>c){
    if(b>c){
        console.log(b);

    }
    else{ 
        console.log(c);
    }
}

if(b>a && b>c){
    if(a>c){
        console.log(a);
    }
    else{
        console.log(c);
    }
}

if(c>a && c>b){
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}