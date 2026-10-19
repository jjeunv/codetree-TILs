#include <iostream>
#include <algorithm>
#include <cstdlib>
using namespace std;

int main() {
    int n;
    cin >> n;

    int x[101];
    int y[101];

    for(int i=0; i<n; i++){
        cin >> x[i] >> y[i];
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            for(int k=j+1; k<n; k++){
                if((x[i]!=x[j] && x[i]!=x[k] && x[j]!=x[k]) || (y[i]!=y[j]&& y[i]!=y[k] && y[j]!=y[k])){
                    continue;
                }

                ans = max(ans, abs(x[i]*y[j] + x[j]*y[k] + x[k]*y[i] - x[j]*y[i] - x[k]*y[j] - x[i]*y[k]));
            }
        }
    }

    cout << ans;

    return 0;
}