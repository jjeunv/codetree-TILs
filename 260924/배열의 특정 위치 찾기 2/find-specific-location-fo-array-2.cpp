#include <iostream>
using namespace std;

int main() {
    int arr[10];
    int odd = 0;
    int even = 0;

    for(int i=0; i<10; i++){
        cin>>arr[i];
        if(i%2==0){
            odd+=arr[i];
        }else{
            even+=arr[i];
        }
    }

    if(odd>even){
        cout<<odd-even;
    }else{
        cout<<even-odd;
    }

    return 0;
}