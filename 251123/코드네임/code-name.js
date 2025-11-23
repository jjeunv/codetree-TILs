class Agent{
    constructor(codename="", score=0){
        this.codename=codename;
        this.score=score;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const agents = [];
for(let i=0; i<input.length; i++){
    const [codeName, score] = input[i].split(' ');
    agents.push(new Agent(codeName, Number(score)));
}

let idx =0;
for(let i=1; i<agents.length; i++){
    if(agents[i].score<agents[idx].score){
        idx=i;
    }
}

console.log(agents[idx].codename, agents[idx].score)