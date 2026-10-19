#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    int a[1001];
    int b[1001];

    for(int i=0; i<n; i++){
        cin >> a[i] >> b[i];
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        int t[1001]{};

        for(int j=0; j<n; j++){
            if(i==j) continue;

            for(int k=a[j]; k<b[j]; k++){
                t[k] = 1;
            }
        }

        int cnt = 0;
        for(int i=0; i<1001; i++){
            if(t[i]==1) cnt++;
        }

        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}