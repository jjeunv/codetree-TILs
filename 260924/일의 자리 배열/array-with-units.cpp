#include <iostream>
using namespace std;

int main() {
    int arr[10];

    int a;
    int b;
    cin >> a>> b;

    arr[0]=a;
    arr[1] =b;

    for(int i=2; i<10; i++){
        arr[i]=(arr[i-1]+arr[i-2])%10;
    }

    for(int i=0; i<10; i++){
        cout<<arr[i]<<" ";
    }


    return 0;
}