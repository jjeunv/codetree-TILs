#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int bomb[101];
    for(int i=0; i<n; i++){
        cin >> bomb[i];
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            if(bomb[i]==bomb[j] && j-i<=k){
                ans = max(ans, bomb[i]);
            }
        }
    }

    cout << (ans==0?-1:ans);

    return 0;
}