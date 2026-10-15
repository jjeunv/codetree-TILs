#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int n, a, b, c;
    cin >> n >> a >> b >> c;
    
    int ans = 0;

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            for(int k=1; k<=n; k++){
                if(abs(i-a)<=2 || abs(j-b)<=2 || abs(k-c)<=2){
                    ans++;
                }
            }
        }
    }

    cout << ans;

    return 0;
}