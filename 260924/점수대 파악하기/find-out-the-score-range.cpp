#include <iostream>
using namespace std;

int main() {
    int cnt[11]={};

    int s;
    cin>>s;

    while(s!=0){
        cnt[s/10]++;
        cin>>s;
    }

    for(int i=10; i>0; i--){
        cout<< i*10 <<" - " << cnt[i] << endl;
    }
    return 0;
}