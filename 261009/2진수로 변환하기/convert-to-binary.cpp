#include <iostream>
using namespace std;

void PrintBinary(int num){
    int digits[20] = {};
    int idx = 0;

    while(true){
        if(num<2){
            digits[idx] = num;
            break;
        }
        digits[idx++] = num%2;
        num/=2;
    }

    for(int i=idx; i>=0; i--){
        cout << digits[i];
    }
}

int main() {
    int n;
    cin >> n;

    PrintBinary(n);

    return 0;
}