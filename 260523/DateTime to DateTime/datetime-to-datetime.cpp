#include <iostream>
using namespace std;

int main() {
    int a,b,c;
    cin>>a>>b>>c;

    int min1 = 11*60*24+11*60+11;
    int min2 = (a*24*60 + b*60 +c);
    cout<< (min2-min1 >=0 ? min2-min1 : -1);
    return 0;
}