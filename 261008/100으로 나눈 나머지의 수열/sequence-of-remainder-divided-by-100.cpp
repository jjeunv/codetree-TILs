#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n==1){
        return 2;
    }
    if(n==2){
        return 4;
    }

    return PrintNumber(n-1) * PrintNumber(n-2) % 100;
}

int main() {
    int n;
    cin >> n;

    cout << PrintNumber(n);

    return 0;
}