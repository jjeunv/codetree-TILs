#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    int ans = 0;

    for(int i=0; i<=1000; i++){
        for(int j=0; j<=1000; j++){
            int cnt = i*a + j*b;
            if(cnt<=c){
                ans = max(ans, cnt);
            }
        }
    }

    cout << ans;
    
    return 0;
}