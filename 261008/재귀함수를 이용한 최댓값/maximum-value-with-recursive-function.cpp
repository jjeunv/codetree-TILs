#include <iostream>
using namespace std;

int PrintMax(int n, int arr[], int max){
    if(n==-1){
        return max;
    }

    if(max < arr[n]){
        max = arr[n];
    }
    return PrintMax(n-1, arr, max);
}

int main() {
    int n;
    cin >> n;

    int arr[101];
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    cout << PrintMax(n-1, arr, 0);
    return 0;
}