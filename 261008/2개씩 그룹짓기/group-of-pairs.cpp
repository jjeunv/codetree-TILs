#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[2001];
    for(int i=0; i<2*n; i++){
        cin >> arr[i];
    }

    sort(arr, arr+2*n);

    int max = arr[0] + arr[2*n-1];

    for(int i=1; i<n; i++){
        int num = arr[i]+arr[2*n-i-1];
        if(max < num){
            max = num;
        }
    }

    cout <<max;
    return 0;
}

