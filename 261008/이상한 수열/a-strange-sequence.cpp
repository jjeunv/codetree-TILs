#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n<=2){
        return n;
    }

    return PrintNumber(n/3) + PrintNumber(n-1);
}

int main() {
    int n;
    cin >> n;

    cout << PrintNumber(n);

    return 0;
}