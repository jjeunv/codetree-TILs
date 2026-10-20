#include <iostream>
#include <climits>
#include <algorithm>
#include <cstdlib>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100];
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int ans = INT_MAX;

    for(int i=0; i<n; i++){
        arr[i]*=2;

       for(int j=0; j<n; j++){
            int cnt[100];
            int idx = 0;

            for(int k=0; k<n; k++){
                if(j==k) continue;
                cnt[idx++]=arr[k];
            }

            int score = 0;
            for(int k=1; k<n-1; k++){
                score += (abs(cnt[k]-cnt[k-1]));
            }

            ans = min(ans, score);
            }

        arr[i]/=2;
    }

    cout << ans;

    return 0;
}