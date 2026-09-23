#include <iostream>
using namespace std;

int main() {
    int cnt[10]={};

    int n;
    cin>>n;

    for(int i=0; i<n; i++){
        int num;
        cin>>num;
        cnt[num]++;
    }

    for(int i=1;i<10; i++){
        cout<<cnt[i]<<"\n";
    }
    return 0;
}