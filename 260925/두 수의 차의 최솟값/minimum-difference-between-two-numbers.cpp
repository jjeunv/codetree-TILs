#include <iostream>
using namespace std;

int main() {
    int n;
    int arr[10];

    cin >> n;
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int min = 100;
    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            int value = arr[j]-arr[i];
            if(value<min){
                min = value;
            }
        }
    }

    cout << min;
    return 0;
}