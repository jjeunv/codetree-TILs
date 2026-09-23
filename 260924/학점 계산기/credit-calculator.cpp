#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    cout<<fixed;
    cout.precision(1);
    double arr[6];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    double sum=0;
    for(int i=0; i<n; i++){
        sum+=arr[i];
    }

    double avg = sum/n;

    cout<<avg<<"\n";
    if(avg>=4.0){
        cout<<"Perfect";
    }else if(avg>=3.0){
        cout<<"Good";
    }else{
        cout<<"Poor";
    }
    return 0;
}