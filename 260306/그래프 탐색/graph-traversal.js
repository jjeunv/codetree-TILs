const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

// const arr = Array.from({length:n+1}, ()=>Array(n+1).fill(0));

// for(let [s,e] of edges){
//     arr[s][e] = 1;
//     arr[e][s] = 1;
// }

// const visited = Array(n+1).fill(false);
// let ans = 0;

// function dfs(vertex){
//     for(let i=1; i<=n; i++){
//         if(arr[vertex][i] === 1 && !visited[i]){
//             visited[i] = true;
//             ans+=1;
//             dfs(i);
//         }
//     }
// }

// visited[1] = true;
// dfs(1);
// console.log(ans)


const graph = Array.from({length:n+1}, ()=> []);
const visited = Array(n+1).fill(false);
let cnt = 0;

function bfs(vertex){
    graph[vertex].forEach(currV=>{
        if(!visited[currV]){
            visited[currV] = true;
            cnt+=1;
            bfs(currV);
        }
    })
}

for(let [v1, v2] of edges){
    graph[v1].push(v2);
    graph[v2].push(v1);
}

visited[1]= true;
bfs(1);

console.log(cnt)