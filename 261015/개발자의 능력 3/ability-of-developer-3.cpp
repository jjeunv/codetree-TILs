#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <climits>
using namespace std;

int main() {
    int arr[6];

    int sum=0;

    for(int i=0; i<6; i++){
        cin >> arr[i];
        sum+=arr[i];
    }

    int ans = INT_MAX;

    for(int i=0; i<6; i++){
        for(int j=i+1; j<6; j++){
            for(int k=j+1; k<6; k++){
                int cnt = arr[i]+arr[j]+arr[k];
                ans = min(ans, abs(sum-cnt - cnt));
            }
        }
    }

    cout << ans;

    return 0;
}