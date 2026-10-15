#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 10001

int main() {
    int arr[MAX_N]{};

    int n, k;
    cin >> n >> k;

    for(int i=1; i<=n; i++){
        int x;
        char c;

        cin >> x >> c;

        arr[x] = (c=='G' ? 1 : 2);
    }

    int ans = 0;

    for(int i=1; i<=MAX_N-k; i++){
        int cnt = 0;
        for(int j=i; j<i+k+1; j++){
            cnt += arr[j];
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}