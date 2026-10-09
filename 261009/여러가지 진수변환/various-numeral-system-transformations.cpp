#include <iostream>
using namespace std;

int main() {
    int n, b;
    cin >> n >> b;

    int digits[11] = {};
    int idx = 0;

    while(true){
        if(n<b){
            digits[idx] = n;
            break;
        }

        digits[idx++] = n%b;
        n/=b;
    }

    for(int i=idx; i>=0; i--){
        cout << digits[i];
    }
    
    return 0;
}