#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <climits>
using namespace std;

#define MAX_N 100

int main() {
    int arr[MAX_N]{};

    int n, h, t;
    cin >> n >> h >> t;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }
    
    int ans = INT_MAX;

    for(int i=0; i<n-t+1; i++){
        int cnt = 0;
        for(int j=i; j<i+t; j++){
            cnt+=(abs(arr[j]-h));
        }
        ans = min(ans, cnt);
    }

    cout << ans;

    return 0;
}