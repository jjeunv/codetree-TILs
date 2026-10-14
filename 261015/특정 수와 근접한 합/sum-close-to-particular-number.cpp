#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <climits>

using namespace std;

int main() {
    int arr[101]{};

    int n, s;
    cin >> n >> s;

    int sum = 0;

    for(int i=0; i<n; i++){
        cin >> arr[i];
        sum+=arr[i];
    }

    int ans = INT_MAX;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            ans = min(ans, abs(s- (sum-arr[i]-arr[j])));
        }
    }

    cout << ans;

    return 0;
}