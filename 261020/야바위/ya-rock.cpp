#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    int a[100];
    int b[100];
    int c[100];

    for(int i=0; i<n; i++){
        cin >> a[i] >> b[i] >> c[i];
    }

    int ans = 0;

    for(int i=1; i<=3; i++){
        int pos[4] {0, 1, 2, 3};
        int cnt = 0;

        for(int j=0; j<n; j++){
            swap(pos[a[j]], pos[b[j]]);
            if(pos[c[j]]==i) cnt++;
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}