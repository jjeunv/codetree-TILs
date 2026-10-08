#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n == 1 || n==2){
        return 1;
    }

    return PrintNumber(n-1) + PrintNumber(n-2);
}

int main() {
    int n;
    cin >> n;

    cout << PrintNumber(n);

    return 0;
}