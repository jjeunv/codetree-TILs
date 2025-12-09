const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N,K,P,T] = input[0].split(' ').map(Number);
const shakes = input.slice(1).map((shake)=>shake.split(' ').map(Number));

shakes.sort((a,b)=>a[0]-b[0]);
const maxT = shakes[T-1][0];

const arr = Array(N+1).fill(0);
const cnt = Array(N+1).fill(0);

arr[P]=1;
cnt[P]=K;

for(let shake of shakes){
    let [t, a, b] = shake;
    if(cnt[a]>0 && cnt[b]>0){
        cnt[a]--;
        cnt[b]--;
    }else if(cnt[a]>0){
        cnt[a]--;
        if(arr[b]!==1){
            arr[b]=1;
            cnt[b]=K;
        }
    }else if(cnt[b]>0){
        cnt[b]--;
        if(arr[a]!==1){
            cnt[a]=K;
            arr[a]=1;
        }
    }
}

arr.shift()
console.log(arr.join(''))