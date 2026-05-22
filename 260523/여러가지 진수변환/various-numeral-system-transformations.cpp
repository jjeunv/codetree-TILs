#include <iostream>
using namespace std;


int main() {
    int n,b;
    cin>>n>>b;

    int digits[10]={};
    int cnt = 0;

    while(true){
        if(n<b){
            digits[cnt]=n;
            break;
        }
        digits[cnt] = n%b;
        cnt++;
        n/=b;
    }

    for(int i=cnt; i>=0; i--){
        cout<<digits[i];
    }
    return 0;
}