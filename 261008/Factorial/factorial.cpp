#include <iostream>
using namespace std;

int PrintAnswer(int n){
    if(n <= 1){
        return 1;
    }

    return PrintAnswer(n-1) * n;
}

int main() {
    int n;
    cin >> n;

    cout << PrintAnswer(n);

    return 0;
}