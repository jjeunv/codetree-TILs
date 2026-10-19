#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int x1[101];
    int x2[101];

    for(int i=0; i<n; i++){
        cin >> x1[i] >> x2[i];
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        bool flag = true;
        for(int j=0; j<n; j++){
            if(i==j) continue;

            if((x1[i]>=x1[j]&&x2[i]<=x2[j]) || (x1[i]<=x1[j]&&x2[i]>=x2[j])){
                flag = false;
                break;
            }
        }
        if(flag) ans++;
    }

    cout << ans;

    return 0;
}