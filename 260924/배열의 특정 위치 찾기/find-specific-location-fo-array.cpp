#include <iostream>
using namespace std;

int main() {
    int arr[10];
    for(int i=0; i<10; i++){
        cin>>arr[i];
    }

    int sum = 0;
    for(int i=0; i<10; i++){
        if(i%2!=0){
            sum+=arr[i];
        }
    }
    cout << sum<<" ";

    sum=0;

    for(int i=2; i<10; i+=3){
        sum+=arr[i];
    }

    cout<<fixed;
    cout.precision(1);

    cout<<(double)sum/3;
    return 0;
}