#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 401

int main() {
    int arr[MAX_N] {};

    int n, k;
    cin >> n >> k;

    for(int i=0; i<n; i++){
        int a, x;
        cin >> a>> x;
    
        arr[x+200]+=a;
    }

    int ans = 0;

    for(int i=k; i<MAX_N-k; i++){
        int cnt = 0;
        for(int j=i-k; j<=i+k; j++){
            cnt+=arr[j];
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}