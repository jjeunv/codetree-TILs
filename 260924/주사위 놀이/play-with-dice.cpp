#include <iostream>
using namespace std;

int main() {
    int cnt[7]={};

    for(int i=0; i<10; i++){
        int num;
        cin>>num;
        cnt[num]++;
    }

    for(int i=1; i<=6; i++){
        cout<< i<<" - "<<cnt[i]<<"\n";
    }
    return 0;
}