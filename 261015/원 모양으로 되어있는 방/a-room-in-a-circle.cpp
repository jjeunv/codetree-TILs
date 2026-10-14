#include <iostream>
#include <climits>
#include <algorithm>
#include <cstdlib>
using namespace std;

#define MAX_N 1004

int main() {
    int arr[MAX_N]{};

    int n;
    cin >> n;

    for(int i=1; i<=n; i++){
        cin >> arr[i];
    }

    int ans = INT_MAX;

    for(int i=1; i<=n; i++){
        int cur = 0;
        for(int j=1; j<=n; j++){
            if(j<i){
                cur+=(n-i+j)*arr[j];
            }else{
                cur += (abs(i-j) * arr[j]);
            }
        }
        ans = min(ans, cur);
    }

    cout << ans;

    return 0;
}