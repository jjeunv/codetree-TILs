#include <iostream>
#include <algorithm>
using namespace std;

int PrintMax(int n, int arr[]){
    if(n==0){
        return arr[0];
    }

    return max(PrintMax(n-1, arr), arr[n]);
}

int main() {
    int n;
    cin >> n;

    int arr[101];
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    cout << PrintMax(n-1, arr);
    return 0;
}