#include <iostream>
using namespace std;

int main() {
    int state[4] = {};

    for(int i=0; i<3; i++){
        char c;
        int temp;
        cin>>c>>temp;

        if(c=='Y' && temp>=37){
            state[0]++;
        }else if(c=='N' && temp>=37){
            state[1]++;
        }else if(c=='Y' && temp<37){
            state[2]++;
        }else{
            state[3]++;
        }
    }

    for(int i=0; i<4; i++){
        cout<<state[i]<<" ";
    }

    if(state[0]>=2){
        cout<<"E";
    }
    return 0;
}