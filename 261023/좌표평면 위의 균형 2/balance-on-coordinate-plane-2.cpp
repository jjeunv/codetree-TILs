#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    int n;
    cin >> n;

    int x[100];
    int y[100];

    for(int i=0; i<n; i++){
        cin >> x[i] >> y[i];
    }

    int ans = INT_MAX;

    for(int i=0; i<=100; i+=2){
        for(int j=0; j<=100; j+=2){
            int a = 0;
            int b = 0;
            int c = 0;
            int d = 0;

            for(int k=0; k<n; k++){
                if(x[k]>i && y[k]>j){
                    a++;
                }else if(x[k]<i && y[k]>j){
                    b++;
                }else if(x[k]<i && y[k]<j){
                    c++;
                }else if(x[k]>i && y[k]<j){
                    d++;
                }
            }
            int cnt = max({a, b, c, d});
            ans = min(ans, cnt);
        }
    }

    cout << ans;

    return 0;
}