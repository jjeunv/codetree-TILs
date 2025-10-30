const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let arr=[];

for(let i=0; i<n; i++){
    arr.push([]);
    for(let j=0; j<n; j++){
        arr[i].push(0);
    }
}


for(let i=0; i<n; i++){
    if(i%2===0){
        let cnt=1;
        for(let j=0; j<n; j++){
            arr[j][i]=cnt;
            cnt++;
        }
    }else{
        let cnt=n;
        for(let j=0; j<n; j++){
            arr[j][i]=cnt;
            cnt--;
        }
    }
}


for(const row of arr){
    console.log(row.join(''));
}
