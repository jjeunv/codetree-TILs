#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int arr[101]{};

    while(k--){
        int a, b;
        cin >> a >> b;

        for(int i=a; i<=b; i++){
            arr[i]++;
        }
    }

    int ans = 0;
    for(int i=1; i<=n; i++){
        ans = max(ans, arr[i]);
    }

    cout << ans;
    return 0;
}