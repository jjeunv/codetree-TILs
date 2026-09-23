#include <iostream>
using namespace std;

int main() {
    int cnt[10]={};

    int num;
    cin >>num;
    while(num!=0){
        cnt[num/10]++;
        cin>>num;
    }

    for(int i=1; i<=9; i++){
        cout<<i<<" - "<<cnt[i]<<endl;
    }
    return 0;
}