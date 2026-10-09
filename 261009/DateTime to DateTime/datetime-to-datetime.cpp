#include <iostream>
using namespace std;

int main() {
    int a,b,c;
    cin >> a>>b>>c;

    int ans = (a*24*60 + b*60 + c) - (11*60*24 + 11*60 + 11);
    cout << (ans<0 ? -1 : ans);
    return 0;
}