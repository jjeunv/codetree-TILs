#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 101

int main() {
    int arr[MAX_N] {};

    int n, k;
    cin >> n >> k;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int ans = 0;

    for(int i=0; i<n-k+1; i++){
        int cnt = 0;
        for(int j=i; j<i+k; j++){
            cnt += arr[j];
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}