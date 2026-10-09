#include <iostream>
#include <string>
using namespace std;

int GetDecimal(string n){
    int num = 0;

    for(int i=0; i<(int)n.size(); i++){
        num = num*2 + (n[i]-'0');
    }

    return num;
}

void PrintBinary(int n){
    int digits[20] = {};
    int idx = 0;

    while(true){
        if(n<2){
            digits[idx] = n;
            break;
        }

        digits[idx++] = n%2;
        n/=2;
    }

    for(int i=idx; i>=0; i--){
        cout << digits[i];
    }
}

void Solve(string n){
    PrintBinary(GetDecimal(n) * 17);
}

int main() {
    string n;
    cin >> n;

    Solve(n);
    
    return 0;
}