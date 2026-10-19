#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <climits>
using namespace std;

int main() {
    int t, a, b;
    cin >> t >> a >> b;

    int s[1000]{};
    int n[1000]{};

    for(int i=0; i<t; i++){
        char c;
        int x;
        cin >> c >> x;
        
        if(c=='S'){
            s[x] = 1;
        }else{
            n[x] = 1;
        }
    }

    int ans = 0;

    for(int i=a; i<=b; i++){
        int d1 = INT_MAX;
        int d2 = INT_MAX;
        
        for(int j=1; j<=1000; j++){
            if(s[j]==1){
                d1 = min(d1, abs(i-j));
            }
            if(n[j]==1){
                d2 = min(d2, abs(i-j));
            }
        }

        if(d1<=d2){
            ans++;
        }
    }

    cout << ans;
    return 0;
}