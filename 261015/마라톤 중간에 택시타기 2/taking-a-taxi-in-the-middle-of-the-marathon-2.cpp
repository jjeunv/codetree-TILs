#include <iostream>
#include <utility>
#include <algorithm>
#include <climits>
using namespace std;

#define MAX_N 101

int main() {
    pair<int, int> points[MAX_N];
    
    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        int x, y;
        cin >> x >> y;
        points[i] = make_pair(x, y);
    }
    
    int ans = INT_MAX;

    for(int i=1; i<n-1; i++){
        int cx = points[0].first;
        int cy = points[0].second;
        int cur = 0;

        for(int j=1; j<n; j++){
            if(i==j) continue;

            int nx=points[j].first;
            int ny=points[j].second;
            cur+= (abs(cx-nx) + abs(cy-ny));
            cx = nx;
            cy = ny;
        }

        ans = min(ans, cur);
    }

    cout << ans;

    return 0;
}