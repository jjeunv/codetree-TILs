#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n < 10){
        return n*n;
    }

    return PrintNumber(n/10) + PrintNumber(n%10);
}

int main() {
    int n;
    cin >> n;

    cout << PrintNumber(n);

    return 0;
}