#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    int cnt=0;

    for(int i=0; i<n; i++){
        double arr[4];
        for(int j=0; j<4; j++){
            cin>>arr[j];
        }
        double sum = 0;
        for(int i=0; i<4; i++){
            sum+=arr[i];
        }
        if(sum/4 >=60){
            cout<<"pass\n";
            cnt++;
        }else{
            cout<<"fail\n";
        }
    }

    cout<<cnt;
    return 0;
}