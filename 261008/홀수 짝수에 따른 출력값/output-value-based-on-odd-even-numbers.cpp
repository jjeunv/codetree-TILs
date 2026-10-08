#include <iostream>
using namespace std;

int PrintAnswer(int n){
    if(n<=2){
        return n;
    }

    return PrintAnswer(n-2) + n;
}

int main() {
    int n;
    cin >> n;

    cout << PrintAnswer(n);

    return 0;
}