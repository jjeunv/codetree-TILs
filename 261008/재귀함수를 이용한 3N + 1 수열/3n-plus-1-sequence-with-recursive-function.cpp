#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n == 1){
        return 0;
    }

    if(n%2==0){
        return PrintNumber(n/2) + 1;
    }else{
        return PrintNumber(n*3 + 1) + 1;
    }
}

int main() {
    int n;
    cin >> n;

    cout << PrintNumber(n);

    return 0;
}