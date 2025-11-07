const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function season(m){
    if(m>=3 && m<=5){
        return 'Spring';
    }
    if(m>=6 && m<=8){
        return 'Summer';
    }
    if(m>=9 && m<=11){
        return 'Fall';
    }
    return 'Winter';
}

function judgeYear(y){
    if(y%4===0){
        if(y%100===0){
            if(y%400===0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

function judgeDay(y,m,d){
    if(m==4|| m===6|| m===9||m===11){
        return d<=30;
    }
    if(m===2){
        if(judgeYear(y)){
            return d<=29;
        }
        return d<=28;
    }
    return d<=31;
}

if(judgeDay(year,month,day)){
    console.log(season(month));
}else{
    console.log(-1)
}