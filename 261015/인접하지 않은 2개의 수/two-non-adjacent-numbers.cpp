#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 101

int main() {
    int arr[MAX_N] {};

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int ans = 0;
    for(int i=0; i<n; i++){
        for(int j=i+2; j<n; j++){
            ans = max(ans, arr[i]+arr[j]);
        }
    }

    cout << ans;

    return 0;
}