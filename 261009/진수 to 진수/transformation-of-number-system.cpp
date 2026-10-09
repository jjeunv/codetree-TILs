#include <iostream>
#include <string>
using namespace std;

int GetDecimal(string num, int a){
    int ans = 0;

    for(int i=0; i<(int)num.size(); i++){
        ans = ans*a + (num[i]-'0');
    }

    return ans;
}

void PrintAnswer(int num, int b){
    int digits[20] = {};
    int idx = 0;

    while(true){
        if(num<b){
            digits[idx] = num;
            break;
        }
        digits[idx++] = num%b;
        num/=b;
    }

    for(int i=idx; i>=0; i--){
        cout << digits[i];
    }
}

void Solve(int a, int b, string num){
    PrintAnswer(GetDecimal(num, a), b);
}


int main() {
    int a, b;
    string num;
    cin >> a>>b>>num;

    Solve(a, b, num);
    
    return 0;
}