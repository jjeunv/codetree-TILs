#include <iostream>
using namespace std;

int main() {
    int a;
    int b;
    cin >> a>> b;

    int cnt[10]= {};
    
    while(a>1){
        cnt[a%b]++;
        a/=b;
    }

    int sum = 0;
    for(int i=0; i<10; i++){
        sum += (cnt[i]*cnt[i]);
    }

    cout<< sum;
    return 0;
}