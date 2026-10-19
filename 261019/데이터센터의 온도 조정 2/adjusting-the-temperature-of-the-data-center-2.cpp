#include <iostream>
#include <algorithm>
using namespace std;

int n, c, g, h;

int GetWorkload(int ta, int tb, int t){
    if(t<ta){
        return c;
    }
    if(t>tb){
        return h;
    }
    return g;
}

int main() {
    cin >> n >> c >> g >> h;

    int ta[1000];
    int tb[1000];

    for(int i=0; i<n; i++){
        cin >> ta[i] >> tb[i];
    }

    int ans = 0;

    for(int t=-1; t<=1001; t++){
        int cnt = 0;
        for(int i=0; i<n; i++){
            cnt += GetWorkload(ta[i], tb[i], t);
        }   
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}