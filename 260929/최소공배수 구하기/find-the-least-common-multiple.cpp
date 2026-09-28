#include <iostream>
using namespace std;

int gcd(int a, int b){
    while(a!=0){
        int r = b%a;
        b = a;
        a = r;
    }
    return b;
}

int lcm(int a, int b){
    return (a*b)/gcd(a,b);
}
int main() {
    int n, m;
    cin >> n >> m;

    cout <<lcm(n,m);
    return 0;
}