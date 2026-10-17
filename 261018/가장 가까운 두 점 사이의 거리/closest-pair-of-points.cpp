#include <iostream>
#include <utility>
#include <algorithm>
#include <climits>
#include <cmath>
using namespace std;

#define MAX_N 101

int main() {
    pair<int, int> arr[MAX_N];

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        int x, y;
        cin >> x >> y;

        arr[i] = make_pair(x, y);
    }

    int ans = INT_MAX;

    for(int i=0; i<n; i++){
        for(int j=i+1; j <n; j++){
            int x1 = arr[i].first;
            int y1 = arr[i].second;
            int x2 = arr[j].first;
            int y2 = arr[j].second;

            int dis = pow(x1-x2, 2) + pow(y1-y2, 2);

            ans = min(ans, dis);
        }
    }

    cout << ans;

    return 0;
}