#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n, b;
    cin >> n >> b;

    int p[1001] {};

    for(int i=0; i<n; i++){
        cin >> p[i];
    }

    sort(p, p+n);

    int ans = 0;
    for(int i=0; i<n; i++){
        int cnt = 0;
        int price = 0;
        for(int j=0; j<n; j++){
            if(i==j){
                price+=(p[j]/2);
            }else{
                price+=p[j];
            }
            if(price>b){
                break;
            }else{
                cnt++;
            }
        }
        ans = max(ans, cnt);
    }
    cout << ans;

    return 0;
}