#include <iostream>
#include <utility>
#include <algorithm>
#include <climits>
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
        int max_x = 0;
        int max_y = 0;
        int min_x = 40001;
        int min_y = 40001;

        for(int j=0; j<n; j++){
            if(i==j) continue;

            int x = arr[j].first;
            int y = arr[j].second;

            max_x = max(max_x, x);
            max_y = max(max_y, y);
            min_x = min(min_x, x);
            min_y = min(min_y, y);
        }

        int area = (max_x-min_x) * (max_y-min_y);

        ans = min(ans, area);
    }

    cout << ans;

    return 0;
}