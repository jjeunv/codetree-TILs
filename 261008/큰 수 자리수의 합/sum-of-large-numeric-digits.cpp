#include <iostream>
using namespace std;

int PrintNumber(int n){
    if(n<10){
        return n;
    }
    return PrintNumber(n/10) + PrintNumber(n%10);
}

int main() {
    int a,b,c;
    cin >> a>> b>> c;

    cout << PrintNumber(a*b*c);
    return 0;
}