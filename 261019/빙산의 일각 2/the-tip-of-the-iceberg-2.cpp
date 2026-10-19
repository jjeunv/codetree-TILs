#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 100

int main() {
    // 해수면의 높이
    int heights[MAX_N] {};

    // 빙산의 개수
    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> heights[i];
    }

    int ans = 0;

    for(int h=0; h<=1000; h++){
        int currents[MAX_N] {};
        int cnt = 0;

        for(int i=0; i<n; i++){
            if(heights[i]>h){
                currents[i]=1;
            }
        }

        for(int i=0; i<n; i++){
            if(currents[i]==1 && i==0){
                cnt++;
            }else if(currents[i]==1 && currents[i-1]!=1){
                cnt++;
            }
        }

        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}